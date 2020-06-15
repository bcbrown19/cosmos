<template>
  <v-app id="login">
    <v-main>
      {{ $route.meta.title }}
      <v-container class="fill-height" ma-0 pa-0 fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    outlined
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="text"
                    v-model="email">
                  </v-text-field>
                  <v-text-field
                    autocomplete="current-password"
                    outlined label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="danger-alert" v-html="error" />
                <v-spacer></v-spacer>
                <v-btn large dark color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
