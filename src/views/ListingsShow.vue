<script>
import axios from "axios";
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
      listing: {},
      newConversationParams: {},
      newConversation: {},
      user_id: localStorage.user_id,
    };
  },
  created: function () {
    axios.get(`/listings/${this.$route.params.id}`).then((response) => {
      console.log("Listings Show:", response.data);
      this.listing = response.data;
    });
  },
  methods: {
    destroyListing: function () {
      if (confirm("Are you sure you to delete this?")) {
        axios.delete(`/listings/${this.listing.id}`).then((response) => {
          console.log("Success", response.data);
          this.$router.push("/listings");
        });
      }
    },
    createConversation: function () {
      axios
        .post("/conversations", this.newConversationParams)
        .then((response) => {
          console.log("conversations create", response);
          this.newConversation = response.data;
          console.log(this.newConversation);
          this.$router.push("/conversations/" + this.newConversation.id);
        })
        .catch((error) => {
          console.log("conversations create error", error.response);
          this.errors = error.response;
        });
    },
  },
};
</script>

<template>
  <div class="listings-show">
    <h2>{{ listing.brand }}</h2>

    <img v-bind:src="listing.image_url" v-bind:alt="listing.brand" />
    <h3>Model: {{ listing.model }}</h3>
    <p>Description: {{ listing.description }}</p>
    <!-- <div v-if="user_id == listing.user.id">
      <button v-on:click="destroyListing()">Delete Listing</button>
    </div> -->
    <!-- Authentication for destroy action still needed -->

    <br />
    <p>Owner: {{ listing.owner.name }}</p>
    <button v-on:click="createConversation()">Message Owner</button>
    <br />

    <router-link to="/listings">Back to all listings</router-link>
  </div>
</template>
