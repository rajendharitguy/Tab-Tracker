<template>
    <v-layout>
      <v-flex xs12 sm10 offset-sm1 elevation-12>
        <v-card>
          <v-toolbar color="blue-grey darken-1">
            <v-toolbar-title class="white--text">Add Song</v-toolbar-title>
          </v-toolbar>
          <v-container fluid grid-list-sm>
            <v-form v-model="valid" >
            <v-layout row>
              <v-flex sm6>
                <v-text-field
                    v-model="song.title"
                    :rules="nameRules"
                    label="Title"
                    height=40px
                    required>
                </v-text-field>
                <v-text-field
                    v-model="song.artist"
                    :rules="nameRules"
                    label="Artist"
                    height=40px
                    required>
                </v-text-field>
                <v-text-field
                    v-model="song.genre"
                    :rules="nameRules"
                    label="Genre"
                    height=40px
                    required>
                </v-text-field>
                <v-text-field
                    v-model="song.imageUrl"
                    :rules="nameRules"
                    label="imageUrl"
                    height=40px
                    required>
                </v-text-field>
                <v-text-field
                    v-model="song.youtubeId"
                    :rules="nameRules"
                    label="YouTubeId"
                    height=40px
                    required>
                </v-text-field>
              </v-flex>
              <v-flex sm6 ml-2 pl-2 style="border-left: 2px solid green">
                <v-textarea
                    outline
                    v-model="song.lyrics"
                    :rules="nameRules"
                    label="Lyrics"
                    multi-line
                    height=165px
                    required>
                </v-textarea>
                <v-textarea
                    outline
                    v-model="song.tabs"
                    :rules="nameRules"
                    multi-line
                    label="Tabes"
                    height=170px
                    required>
                </v-textarea>
              </v-flex>
            </v-layout>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-alert v-if="error">{{error}}</v-alert>
            <v-spacer></v-spacer>
            <v-btn large color="light-blue darken-3" @click="save" class="white--text">
             Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</template>
<script>
import FetchingSongs from '@/services/FetchingSongs'
export default {
  name: 'AddSong',
  data () {
    return {
      valid: false,
      nameRules: [v => !!v || 'this field is required'],
      song: {
        title: null,
        artist: null,
        genre: null,
        imageUrl: null,
        youtubeId: null,
        lyrics: null,
        tabs: null
      },
      error: null
    }
  },
  methods: {
    async save () {
      const songId = this.$store.state.route.params.songId
      try {
        // this.song.youtubeId = this.song.youtubeId.replace('youtu.be', 'www.youtube.com/embed')
        await FetchingSongs.put(this.song)
        this.$router.push({
          name: 'ViewSong',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        this.error = err
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await FetchingSongs.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}

</script>
