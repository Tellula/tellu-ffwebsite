var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var startSeconds = 5;
var endSeconds = 340;
var nextButton = document.getElementById("nextButton");

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      autohide: 1, // Hide video controls when playing
      disablekb: 0 ,
      controls: 0, // Hide pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 0, // Hide the Youtube Logo
      loop: 0, // Run the video in a loop
      fs: 0, // Hide the full screen button
      rel: 0,
      enablejsapi: 1,
      start: startSeconds,
      widget_referrer: "https://tellula.github.io/tellu-ffwebsite/MusicPlayer.html"
      },

    events: {
      onReady: function (e) {
        // e.target.mute();
        e.target.loadPlaylist({
          list: "PLm6gHyIWRgty-L9Qz8l3_ZM_QC92wKdZn",
          startSeconds: 5,
          autoplay: 1,
        });
        e.target.setVolume(50);
        e.target.playVideo();
      },
      onStateChange: function (e) {
        if (e.data === YT.PlayerState.PLAYING) {
          document.getElementById("player").classList.add("loaded");
        }

        if (e.data === YT.PlayerState.ENDED) {
          // Loop from starting point
          player.seekTo(startSeconds);
        }
      },
    },
  });
}
// onYouTubeIframeAPIReady();
