<template>
  <v-toolbar fixed dark color="info">
    <v-toolbar-title class="white--text">
      <router-link to='/'>
        <h1>Tab-Tracker</h1>
       </router-link>
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{
        name: 'Login'
        }">
          Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" block dark :to="{
        name: 'Register'
        }">
          Sign Up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" block dark @click="logout">
          Sign Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>
<style scoped>
a {
  color: lightcyan;
}
h1 {
  font-weight: normal;
}
</style>
