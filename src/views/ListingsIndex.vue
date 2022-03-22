<script>
import axios from "axios";
export default {
  data: function () {
    return {
      listings: [],
      brandFilter: "",
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
  computed: {
    filteredListings() {
      return this.listings.filter((listing) => {
        return listing.brand.toLowerCase().includes(this.brandFilter.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>All Listings</h1>
    <h2>Search by Brand:</h2>
    <input type="text" v-model="brandFilter" placeholder="Search by Brand" />
    <div v-for="listing in filteredListings" v-bind:key="listing.id">
      <h2>{{ listing.brand }}</h2>
      <router-link v-bind:to="`/listings/${listing.id}`">
        <img v-bind:src="listing.image_url" v-bind:alt="listing.brand" />
      </router-link>
      <p>Model: {{ listing.model }}</p>
    </div>
  </div>
</template>
