<template>
  <v-app id="register">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Registration Form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    outlined
                    label="First Name"
                    name="first_name"
                    prepend-icon="mdi-account-card-details-outline"
                    type="text"
                    v-model="first_name"></v-text-field>
                  <v-text-field
                    outlined
                    label="Last Name"
                    name="last_name"
                    prepend-icon="mdi-account-card-details-outline"
                    type="text"
                    v-model="last_name"></v-text-field>
                  <v-text-field
                    outlined label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="text"
                    v-model="email"></v-text-field>
                  <v-text-field
                    outlined
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    autocomplete="new-password"
                    v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="danger-alert" v-html="error" />
                <v-spacer></v-spacer>
                <v-btn dark color="primary" @click="register">Register</v-btn>
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
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      error: null
    }
  },
  metaInfo: {
    title: 'Registration Page | Project Cosmos',
    titleTemplate: null
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          first_name: this.first_name,
          last_name: this.last_name,
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
.error {
  color: crimson;
}
</style>
