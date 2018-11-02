<template>
  <v-layout align-top justify-center>
    <v-flex xs12 sm10 md7>
      <v-card class="elevation-12">
          <slot name="toolbar-header">
            <v-toolbar dark color="deep-purple">
              <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>
          </slot>
          <div class="px-2">
            <slot></slot>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['title']
}
</script>
