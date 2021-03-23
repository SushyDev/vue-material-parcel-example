<template>
  <div class="body">
    <md-field md-clearable>
      <label>Username</label>
      <md-input v-model="username"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <md-button v-show="login_btn" class="md-raised md-primary" @click="loginForm">Login</md-button>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  data: () => ({
    login_btn: true,
    username: '',
    password: '',
  }),
  methods: {
    loginForm() {
      this.login_btn = false;
      this.$emit('showProgress');
      axios
        .post(`/api/validate-login`, {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$emit('showProgress');
          this.$router.push('/about');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.body {
  height: 100vh;
}
</style>
