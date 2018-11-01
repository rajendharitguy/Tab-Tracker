<template>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 elevation-14 class="deep-purple
 mb-3">
       <v-layout row>
       <v-flex xs6 offset-xs1>  
        <v-text-field
            v-model="search"
            :rules="nameRules"
            label="Search song, artist, genre"
            required>
        </v-text-field>
       </v-flex>
       <v-flex xs4 class="pt-2"> 
        <v-btn><v-icon>search</v-icon>search</v-btn>
      </v-flex>
      </v-layout>
    </v-flex>
</template>
<script>
export default {
    data () {
    return {
        search: '',
        valid: false,
        nameRules: [v => !!v || 'this field is required']
    }
  },
  watch: {
      search (value) {
          console.log(vaeul)
    }
  }
}
</script>
