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
        <Datepicker :language="ja" format="yyyy-MM-dd" :value="date" @selected="updateDate" />
      </v-card>
      <v-card
        key="5"
        class="pa-2"
        outlined
        tile
      >
        <v-select
          :items="places"
          :value="place"
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
          :items="races"
          :value="race"
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
        <v-row>
          <v-col>
          <v-switch
            v-model="switch1"
            label="Repeat"
          ></v-switch>
          </v-col>
          <v-col>
          <v-btn
            depressed
            color="primary"
            @click="play"
          >
            Play
          </v-btn>
          </v-col>
        </v-row>
      </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import {ja} from 'vuejs-datepicker/dist/locale'

  export default {
    name: 'Home',

    components: {
      Datepicker
    },
    data() {
      return {
        ja: ja,
        switch1: true,
      }
    },
    methods: {
      updateDate(date) {
        this.$store.commit("setDate", date)
        this.$store.commit("setPlaces", { events: this.$store.state.events, date: date })
        this.$store.commit("maybeChangePlace")
      },
      updatePlace(place) {
        const names = {'川口': 'kawaguchi', '伊勢崎': 'isesaki', '浜松': 'hamamatsu', '飯塚': 'iizuka', '鉄壁山陽': 'sanyou'}
        this.$store.commit("setPlace", names[place])
      },
      updateRace(race) {
        const index = this.races.findIndex(r => r === race)
        this.$store.commit("setRace", index)
      },
      play() {
        const places = {'kawaguchi': 'kawaguchi', 'isesaki': 'isezaki', 'hamamatsu': 'hama', 'iizuka': 'iizuka', 'sanyou': 'sanyou'}

        const race = this.$store.state.race + 1
        const place = places[this.$store.state.place]

        const urls = []
        if (this.switch1) {
          for (let i = race; i <= 12; i++) {
            const url = this.url(i, place, this.$store.state.date)
            urls.push(url)
          }
        } else {
          const url = this.url(race, place, this.$store.state.date)
          urls.push(url)
        }

        console.log(urls)

        this.$router.push({ name: 'Player', params: {urls}})
      },
      url(race, place, d) {
        const raceNo = ( '00' + race ).slice( -2 )
        const date = new Date(d)
        const year = date.getFullYear()
        const month = ( '00' + (date.getMonth() + 1) ).slice( -2 )
        const dayOfMonth = ( '00' + date.getDate()).slice( -2 )

        const url = `https://sp-auto.digi-c.com/autorace/_definst_/${place}/${year}/${place}_${year}${month}${dayOfMonth}_${raceNo}/playlist.m3u8`

        return url;
      }
    },
    computed: {
      date: function() {
        return this.$store.state.date
      },
      places: function() {
        return this.$store.state.places.map(p => this.names[p])
      },
      place: function() {
        return this.names[this.$store.state.place]
      },
      races: function() {
        return ["1R", "2R", "3R", "4R", "5R", "6R", "7R", "8R", "9R", "10R", "11R", "12R"]
      },
      race: function() {
        return this.races[this.$store.state.race]
      },
      names: function() {
        return {kawaguchi: '川口', isesaki: '伊勢崎', hamamatsu: '浜松', iizuka: '飯塚', sanyou: '鉄壁山陽'}
      }
    }
  }
</script>
