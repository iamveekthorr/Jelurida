<template>
  <user-login></user-login>
</template>

<script>
import UserLogin from '@/pages/UserLogin.vue';
export default {
  components: {
    UserLogin,
  },
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  border: none;
}

html {
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
}

img {
  width: 100%;
}

a {
  text-decoration: none;
  color: currentColor;
}

input {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>