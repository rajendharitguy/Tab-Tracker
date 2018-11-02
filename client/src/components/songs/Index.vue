<template>
 <v-container>
   <song-search />
   <songs-panel />
 </v-container>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongSearch from './SongSearch'
import FetchingSongs from '@/services/FetchingSongs'

export default {
  name: 'Songs',
  components: {
    'songs-panel': SongsPanel,
    'song-search': SongSearch
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await FetchingSongs.index()).data
  }
}
</script>

<style scoped>
.textback{
  color:lightgrey;
  padding: 1px 5px;
  background: black;
  border-radius: 3px;
}
</style>
