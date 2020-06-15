// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

import colors from 'vuetify/lib/util/colors'

Vue.config.productionTip = false
Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken4, // #E53935
        secondary: colors.indigo.lighten2, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
      },
      dark: {
        primary: colors.indigo.accent4
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  components: { App },
  template: '<App/>'
})
