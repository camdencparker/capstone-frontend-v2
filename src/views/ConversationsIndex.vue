<script>
import axios from "axios";
export default {
  data: function () {
    return {
      conversations: [],
      messages: [],
    };
  },
  created: function () {
    this.indexConversations();
  },
  methods: {
    indexConversations: function () {
      axios.get("/conversations").then((response) => {
        this.conversations = response.data;
        console.log("Conversations data", this.conversations);
        this.messages = this.conversations.messages;
        console.log("Message data", this.messages);
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="section-title-2 text-center mb-60">
      <h2>Conversations</h2>
      <p>Treat Others How You Want To Be Treated</p>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6" v-for="conversation in conversations" v-bind:key="conversation.id">
        <div class="team-wrapper mb-30">
          <div class="team-img">
            <a href="#">
              <router-link v-bind:to="`/conversations/${conversation.id}`">
                <img :src="conversation.partner.profile_pic" class="rounded-circle" :alt="conversation.partner.name" />
              </router-link>
            </a>
          </div>
          <div class="team-content text-center">
            <router-link v-bind:to="`/conversations/${conversation.id}`">
              <h4>{{ conversation.partner.name }}</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
