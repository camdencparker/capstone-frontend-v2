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
  <div class="listings-new">
    <h1>New Listing</h1>
    <form v-on:submit.prevent="createListing()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <br />
      Brand:
      <input type="text" v-model="newListingParams.brand" />
      <br />
      Model:
      <input type="text" v-model="newListingParams.model" />
      <br />
      Year:
      <input type="text" v-model="newListingParams.year" />
      <br />
      Description:
      <input type="text" v-model="newListingParams.description" />
      <br />
      Image url:
      <input type="text" v-model="newListingParams.image_url" />
      <br />
      Location:
      <input type="text" v-model="newListingParams.location" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
