<template>
  <panel title='Songs'>
   <v-toolbar slot="toolbar-header" dark color="deep-purple">
      <v-toolbar-title class="display-1">Songs</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small color="#4DB6AC" icon :to="{name:'AddSong'}">
        <v-icon size="30px" style="margin-top:10px">add</v-icon>
      </v-btn>
   </v-toolbar>
   <br>
   <div v-for="song in songs" :key="song.id">
      <v-card color="purple" class="white--text">
        <v-layout row wrap align-center>
          <v-flex xs12 sm7 style="order:2">
              <div class="ma-3">
                <div class="headline" style="border-bottom:2px solid red">{{song.title}}</div>
                <div class="subheading pt-3 text-xs-left"><span class="textback">Artist:</span>  {{song.artist}}</div>
                <div class="subheading pt-2 text-xs-left" ><span class="textback">Genre:</span> {{song.genre}}</div>
                <v-btn :to="{name:'ViewSong',params:{songId:song.id}}">view</v-btn>
              </div>
          </v-flex>
          <v-flex xs12 sm5 style="order:1">
            <v-avatar size=100% tile
            class="pl-auto">
              <v-img
              :src="song.imageUrl"
              :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
              >
              </v-img>
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-card>
      <br>
   </div>
  </panel>
</template>
<script>
import FetchingSongs from '@/services/FetchingSongs'

export default {
  name: 'Songs',
  data () {
    return {
      songs: []
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await FetchingSongs.index(value)).data
      }
    }
  }
}
</script>
