<template>
  <div>
    <div>
      <video id="video" controls autoplay></video>
      <button @click="this.back">back</button>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js";
export default {
  props: {
    url: String
  },
  data: () => {
    return {
      hls: new Hls(),
    };
  },
  mounted: function() {
    this.videoPlay()
  },
  methods: {
    videoPlay() {
      const video = document.getElementById("video");
      const videoUrl = this.url;
      if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(videoUrl);
        this.hls.attachMedia(video);
        video.play();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoUrl;
        video.addEventListener("canplay", () => {
          video.play();
        });
      }
    },
    back() {
      this.$router.back()
    }
  },
};
</script>