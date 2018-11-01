<template>
    <v-flex xs12 sm5 elevation-14>
        <v-expansion-panel dark>
          <v-expansion-panel-content>
           <div slot="header" dark>Lyrics</div>
           <v-card>
             <v-card-text style="height:350px; overflow-y:auto;"><pre>{{song.lyrics}}</pre></v-card-text>
           </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
           <div slot="header" dark>Tabs</div>
           <v-card>
              <v-card-text style="height:350px; overflow-y:auto;"><pre>{{song.tabs}}</pre>
              </v-card-text>
           </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
</template>

<script>

export default {
  name: 'LyricsTabs',
  props: ['song']
}
</script>
