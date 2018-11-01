<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex  xs12 class="red">
        <v-btn style="float:right;"
               :to="{
                 name:'EditSong',
                 params () {
                   return {
                     songId: song.id
                      }
                    }
                   }"
                ><v-icon>edit</v-icon>Edit</v-btn>
      </v-flex>
      <youtube-component :song="song" />
      <lyrics-tabs-component :song="song" />
    </v-layout>
  </v-container>
</template>

<script>
import FetchingSongs from '@/services/FetchingSongs'
import YouTube from './YouTube'
import LyricsTabs from './LyricsTabs'

export default {
  name: 'ViewSong',
  components: {
    'youtube-component': YouTube,
    'lyrics-tabs-component': LyricsTabs
  },
  data () {
    return {
      song: [],
      isExpanded: [true]
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await FetchingSongs.show(songId)).data
    this.song.youtubeId = this.song.youtubeId.replace('youtu.be', 'www.youtube.com/embed')
  }
}
</script>

<style scoped>
.textback{
  color:lightgrey;
  padding: 0 5px;
  background: black;
  border-radius: 3px;
}
</style>
