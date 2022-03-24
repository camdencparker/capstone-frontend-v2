<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newListingParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createListing: function () {
      axios
        .post("/listings", this.newListingParams)
        .then((response) => {
          console.log("listings create", response);
          this.$router.push("/listings");
        })
        .catch((error) => {
          console.log("listings create error", error.response);
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
        <h4>Create New Listing</h4>
      </a>
    </div>
    <div class="tab-content">
      <div id="lg1" class="tab-pane active">
        <div class="login-form-container">
          <div class="login-register-form">
            <form v-on:submit.prevent="createListing()">
              <h5>Please Fill Out All Fields</h5>
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <br />
              Brand:
              <input type="text" v-model="newListingParams.brand" placeholder="Kawasaki" />
              <br />
              Model:
              <input type="text" v-model="newListingParams.model" placeholder="Ninja 300" />
              <br />
              Year:
              <input type="text" v-model="newListingParams.year" placeholder="2018" />
              <br />
              Description:
              <input type="text" v-model="newListingParams.description" placeholder="Description of Bike" />
              <br />
              Image url:
              <input type="text" v-model="newListingParams.image_url" placeholder="Link to Image of Bike" />
              <br />
              Location:
              <input type="text" v-model="newListingParams.location" placeholder="City, State" />
              <input type="submit" value="Create" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
