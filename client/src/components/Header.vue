<template>
  <v-toolbar fixed dark color="info">
    <v-toolbar-title class="white--text">
      <router-link to='/'>
        <h1>Tab-Tracker</h1>
       </router-link>
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark to='/login'>
          Login
      </v-btn>
      <v-btn block dark to='/register'>
          Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
a{
  color:lightcyan;
}
h1{
  font-weight:normal;
}
</style>
