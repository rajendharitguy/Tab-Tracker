<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registration</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="email" label="email" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  @click="register" color="primary">Register</v-btn>
              </v-card-actions>
                <div v-if='!null' class="err" v-html="error" />
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
  // name: 'Register',
  data () {
    return {
      email: 'we@ert.gdt',
      password: 'eeeeeee',
      error: ''
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(`welcome ${this.email}`)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.err{
  color:red;
}
</style>
