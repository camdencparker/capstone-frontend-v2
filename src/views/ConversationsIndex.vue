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
  <div class="conversations-index">
    <h1>All Conversations</h1>
    <div v-for="conversation in conversations" v-bind:key="conversation.id">
      <p>{{ conversation.partner.name }}</p>

      <img :src="conversation.partner.profile_pic" :alt="conversation.partner.name" />
      <!-- <div v-for="message in conversations.messages"></div> -->
      <router-link v-bind:to="`/conversations/${conversation.id}`">See Conversattion</router-link>
    </div>
  </div>
</template>
