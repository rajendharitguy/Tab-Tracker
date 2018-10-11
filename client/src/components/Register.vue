<template>
  <div class="hello">
    <h1>Registration</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <input type="password" name="password" v-model="password" placeholder="password" />
    <button @click="register"> Register</button>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  // name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      alert(response.data.message)
    }
  }
}
</script>
