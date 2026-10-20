/* ============================================================
   Targo — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ----------------------------------------------------------
     Robust video autoplay
     Some browsers block autoplay until a gesture. We always set
     muted before calling play(), swallow the promise rejection,
     retry once a second, and retry on the first user interaction.
     ---------------------------------------------------------- */
  var videos = Array.prototype.slice.call(document.querySelectorAll("video"));

  function play(video) {
    video.muted = true;
    var attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(function () {
        /* ignore — we'll try again */
      });
    }
  }

  function playAll() {
    videos.forEach(play);
  }

  playAll();
  setInterval(playAll, 1000);

  function onFirstInteraction() {
    playAll();
    document.removeEventListener("click", onFirstInteraction);
    document.removeEventListener("touchstart", onFirstInteraction);
  }

  document.addEventListener("click", onFirstInteraction);
  document.addEventListener("touchstart", onFirstInteraction, { passive: true });
})();
