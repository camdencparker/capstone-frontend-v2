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
  <div class="Blog-area pt-100 pb-100 blog-no-sidebar">
    <div class="sidebar-widget">
      <h4 class="pro-sidebar-title">Find Your Motorcyle:</h4>
      <div class="pro-sidebar-search mb-50 mt-25">
        <form class="pro-sidebar-search-form" action="#">
          <input type="text" v-model="brandFilter" placeholder="Search by Brand" />
          <button>
            <i class="pe-7s-search"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12" v-for="listing in filteredListings" v-bind:key="listing.id">
              <div class="blog-wrap-2 mb-30">
                <div class="blog-img-2">
                  <router-link v-bind:to="`/listings/${listing.id}`">
                    <a><img v-bind:src="listing.image_url" v-bind:alt="listing.brand" /></a>
                  </router-link>
                </div>
                <div class="blog-content-2">
                  <div class="blog-meta-2">
                    <ul>
                      <li>{{ listing.location }}</li>
                      <li>
                        <a href="#">
                          <i class="fa fa-comments-o"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <router-link v-bind:to="`/listings/${listing.id}`">
                      <a>{{ listing.brand }} {{ listing.model }}</a>
                    </router-link>
                  </h4>
                  <div class="blog-share-comment">
                    <div class="blog-btn-2">
                      <router-link v-bind:to="`/listings/${listing.id}`">
                        <a href="blog-details.html">To Listing</a>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="home">
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
  </div> -->
</template>
