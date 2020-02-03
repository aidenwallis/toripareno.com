(function() {
    let player;
    let playing = false;

    function onPlayerReady() {
        player.playVideo();
        player.setLoop(true);
    }

    function onPlayerStateChange(event) {
        if ((event.data === YT.PlayerState.BUFFERING || event.data === YT.PlayerState.PLAYING) && !playing) {
            playing = true;
            document.getElementById("yt-player").classList.add("yt-player--has-video");
            document.getElementById("background-image").style.display = "none";
        }
    }

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player("yt-player", {
            playerVars: {
                modestbranding: 3,
                cc_load_policy: 0,
                listType: "playlist",
                list: "UURK-GguN6hl9oM7G4PVXWuA",
                loop: 1,
                controls: 0,
                showinfo: 0,
                autoplay: 1,
                iv_load_policy: 3,
                mute: 1,
                rel: 0,
            },
            events: {
                "onReady": onPlayerReady,
                "onStateChange": onPlayerStateChange,
            },
        });
    };

}());
