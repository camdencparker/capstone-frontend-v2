<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="login-register-wrapper">
    <div class="login-register-tab-list nav">
      <a class="active" data-bs-toggle="tab" href="#lg1">
        <h4>Sign Up</h4>
      </a>
    </div>
    <div class="tab-content">
      <div id="lg1" class="tab-pane active">
        <div class="login-form-container">
          <div class="login-register-form">
            <form v-on:submit.prevent="submit()">
              <h1>Sign Up Today!</h1>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div>
                <label>Name:</label>
                <input type="text" v-model="newUserParams.name" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" v-model="newUserParams.email" />
              </div>
              <div>
                <label>Phone:</label>
                <input type="phone" v-model="newUserParams.phone" />
              </div>
              <div>
                <label>Location:</label>
                <input type="location" v-model="newUserParams.location" />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" v-model="newUserParams.password" />
              </div>
              <div>
                <label>Password confirmation:</label>
                <input type="password" v-model="newUserParams.password_confirmation" />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>SignUp Today!</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Phone:</label>
        <input type="phone" v-model="newUserParams.phone" />
      </div>
      <div>
        <label>Location:</label>
        <input type="location" v-model="newUserParams.location" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
