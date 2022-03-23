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
      this.newConversationParams.leaser_id = this.listing.owner.id;
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
  <div class="shop-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="product-details">
            <div class="product-details-img">
              <div class="tab-content jump">
                <div id="shop-details-1" class="tab-pane large-img-style">
                  <div class="img-popup-wrap">
                    <a class="img-popup" href="/assets/img/product-details/b-large-1.jpg">
                      <i class="pe-7s-expand1"></i>
                    </a>
                  </div>
                </div>
                <div id="shop-details-2" class="tab-pane active large-img-style">
                  <img v-bind:src="listing.image_url" v-bind:alt="listing.brand" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="product-details-content ml-70">
            <h2>{{ listing.brand }}</h2>
            <h3>{{ listing.model }}</h3>
            <p>
              {{ listing.description }}
            </p>
            <div class="pro-details-meta">
              <span>Owner: {{ listing.owner.name }}</span>
            </div>
            <div class="pro-details-meta">
              <span>Location: {{ listing.location }}</span>
            </div>
            <div>
              <div class="pro-details-quality">
                <div class="pro-details-cart btn-hover">
                  <a v-on:click="createConversation()">Message Owner</a>
                </div>
              </div>
              <router-link to="/listings">Back to all listings</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
