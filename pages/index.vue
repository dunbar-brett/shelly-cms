<template>
  <div>
    <Login v-if="!isLoggedIn"></Login>
    <!-- <v-layout v-else column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <div class="text-center">
        </div>
      </v-flex>
    </v-layout> -->
  </div>
</template>

<script>
import Login from "../components/login";

export default {
  components: {
    Login
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['login/isUserLoggedIn'];
    }
  }
}
</script>
