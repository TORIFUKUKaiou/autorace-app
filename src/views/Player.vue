<template>
  <div>
    <div>
      <div id="dplayer"></div>
      <button @click="this.back">back</button>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js";
import DPlayer from "dplayer";
export default {
  props: {
    urls: Array,
  },
  data: () => {
    return {
      dp: null,
      current: 0,
    };
  },
  mounted: function () {
    this.play();
  },
  methods: {
    play() {
      this.dp = new DPlayer({
        container: document.getElementById("dplayer"),
        screenshot: true,
        video: {
          url: this.urls[this.current],
          type: "customHls",
          customType: {
            customHls: function (video) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            },
          },
        },
      });
      this.dp.fullScreen.request("browser");
      this.dp.on("ended", this.nextPlay);
      this.dp.on("abort", this.ended);
      this.dp.on("error", this.ended);

      this.dp.play();
    },
    nextPlay() {
      this.current++;
      if (this.urls.length > this.current) {
        this.play();
      } else {
        this.ended();
      }
    },
    back() {
      this.$router.back();
    },
    ended() {
      this.back();
    },
  },
};
</script>
