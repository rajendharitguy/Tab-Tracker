<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
                <v-card-text>
                <v-alert v-model='alert' v-html="error" dismissible outline type="warning"></v-alert>
                <v-form>
                  <v-text-field name="email" label="email" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  @click="login" color="primary">Log in</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: 'we@ert.gdt',
      password: 'eeeeeee',
      error: null,
      alert: false
    }
  },
  methods: {
    async login () {
      this.alert = false
      this.error = null
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log(`welcome back ${this.email}`)
      } catch (error) {
        this.error = error.response.data.error
        this.alert = true
        console.log(error)
      }
    }
  }
}
</script>
