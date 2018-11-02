<template>
<v-layout row wrap justify-center>
    <v-flex xs12 sm10 md7 elevation-14 class="deep-purple
 mb-3">
       <v-layout row>
       <v-flex xs6 offset-xs1>
        <v-text-field
            v-model="search"
            label="Search song, artist, genre"
            >
        </v-text-field>
       </v-flex>
       <v-flex xs4 class="pt-2">
        <v-btn><v-icon>search</v-icon>search</v-btn>
      </v-flex>
      </v-layout>
    </v-flex>
</v-layout>
</template>
<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'Songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>
