<template>
  <div>
    <v-card
      class="d-flex justify-space-around mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <div class="d-flex flex-column mb-6">
      <v-card
        key="4"
        class="pa-2"
        outlined
        tile
      >
        <Datepicker :language="ja" format="yyyy-MM-dd" :value="this.$store.state.date" @selected="updateDate" />
      </v-card>
      <v-card
        key="5"
        class="pa-2"
        outlined
        tile
      >
        <v-select
          :items="this.$store.state.places"
          :value="this.$store.state.place"
          @change="updatePlace"
          label="開催場所"
          outlined
        ></v-select>
      </v-card>
      </div>
      <div class="d-flex flex-column mb-6">
      <v-card
        key="6"
        class="pa-2"
        outlined
        tile
      >
        <v-select
          :items="this.$store.state.races"
          :value="this.$store.state.race"
          @change="updateRace"
          label="レース"
          outlined
        ></v-select>
      </v-card>
      <v-card
        key="7"
        class="pa-2"
        outlined
        tile
      >
        <v-btn
          depressed
          color="primary"
          @click="play"
        >
          Play
        </v-btn>
      </v-card>
      </div>
    </v-card>
    <Calendar />
  </div>
</template>

<script>
  import Calendar from '../components/Calendar'
  import Datepicker from 'vuejs-datepicker'
  import {ja} from 'vuejs-datepicker/dist/locale'

  export default {
    name: 'Home',

    components: {
      Calendar,
      Datepicker
    },
    data() {
      return {
        ja: ja,
      }
    },
    methods: {
      updateDate(date) {
        this.$store.commit("setDate", date)
      },
      updatePlace(place) {
        this.$store.commit("setPlace", place)
      },
      updateRace(race) {
        this.$store.commit("setRace", race)
      },
      play() {
        //const races = ["1R", "2R", "3R", "4R", "5R", "6R", "7R", "8R", "9R", "10R", "11R", "12R"]
        const places = {'川口': 'kawaguchi', '伊勢崎': 'isezaki', '浜松': 'hama', '飯塚': 'iizuka', '鉄壁山陽': 'sanyou'}

        const race = this.$store.state.races.findIndex(r => { return r === this.$store.state.race }) + 1
        const raceNo = ( '00' + race ).slice( -2 )
        const place = places[this.$store.state.place]
        const date = new Date(this.$store.state.date)
        const year = date.getFullYear()
        const month = ( '00' + (date.getMonth() + 1) ).slice( -2 )
        const dayOfMonth = ( '00' + date.getDate()).slice( -2 )

        const url = `https://sp-auto.digi-c.com/autorace/_definst_/${place}/${year}/${place}_${year}${month}${dayOfMonth}_${raceNo}/playlist.m3u8`
        console.log(url)
      }
    }
  }
</script>
