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
    url: String
  },
  data: () => {
    return {
      dp: null,
    };
  },
  mounted: function() {
    this.dp = new DPlayer({
        container: document.getElementById('dplayer'),
        screenshot: true,
        video: {
            url: this.url,
            type: 'customHls',
            customType: {
              customHls: function (video) {
                  const hls = new Hls();
                  hls.loadSource(video.src);
                  hls.attachMedia(video);
              },
          },
        },
    });
    this.dp.fullScreen.request('browser');
    this.dp.on('ended', this.ended);
    this.dp.on('abort', this.ended);
    this.dp.on('error', this.ended);

    this.dp.play();
  },
  methods: {
    back() {
      this.$router.back()
    },
    ended() {
      this.back();
    },
  }
}
</script>