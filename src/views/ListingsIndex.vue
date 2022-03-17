<script>
import axios from "axios";
export default {
  data: function () {
    return {
      listings: [],
    };
  },
  created: function () {
    this.indexListings();
  },
  methods: {
    indexListings: function () {
      axios.get("/listings").then((response) => {
        console.log("listings index", response);
        this.listings = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>All Listings</h1>
    <div v-for="listing in listings" v-bind:key="listing.id">
      <router-link v-bind:to="`/listings/${listing.id}`">
        <h2>{{ listing.brand }}</h2>
      </router-link>
      <!-- <img v-bind:src="listing.image_url" v-bind:alt="listing.brand" /> -->
      <p>Model: {{ listing.model }}</p>
    </div>
  </div>
</template>
