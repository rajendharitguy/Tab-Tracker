<template>
    <v-flex xs12 sm7>
        <v-card color="#424242">
            <v-toolbar>
            <v-toolbar-title>{{song.title}}</v-toolbar-title>
            </v-toolbar>
            <iframe width="100%" height="380" :src="song.youtubeId" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <v-card-text>
            <h3 class="text-xs-left grey--text"><span class="textback">Artist</span> : {{song.artist}}</h3>
            <h3 class="text-xs-left grey--text"><span class="textback">Genre</span> : {{song.genre}}</h3>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>

export default {
  name: 'YouTube',
  props: ['song']
}
</script>
