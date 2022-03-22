<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
      flashMessage: null,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
      this.flashMessage = localStorage.flashMessage;
      localStorage.removeItem("flashMessage");
    },
  },
};
</script>
<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/signup">SignUp</router-link>
    |
    <router-link v-if="!isLoggedIn" to="/login">Log In</router-link>
    |
    <router-link v-if="!!isLoggedIn" to="/logout">Log Out</router-link>
    |
    <router-link to="/listings">Listings</router-link>
    |
    <router-link v-if="!!isLoggedIn" to="/listings/new">Create Listing</router-link>
    |
    <router-link v-if="!!isLoggedIn" to="/conversations">Conversations</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 250px;
}
</style>
