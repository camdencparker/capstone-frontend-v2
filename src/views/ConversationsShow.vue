<script>
import axios from "axios";
export default {
  data: function () {
    return {
      conversation: [],
      user_id: localStorage.user_id,
      messages: [],
      newMessageParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/conversations/${this.$route.params.id}`).then((response) => {
      console.log("Conversations Show:", response.data);
      this.conversation = response.data;
      this.messages = this.conversation.messages;
      console.log("Messages array", this.messages);
    });
  },
  methods: {
    //only impement destroy as nice to have
    destroyConversation: function () {
      if (confirm("Are you sure you to delete this?")) {
        axios.delete(`/conversations/${this.conversation.id}`).then((response) => {
          console.log("Success", this.conversation);
          console.log("Success", response.data);
          this.$router.push("/conversations");
        });
      }
    },
    createMessage: function () {
      this.newMessageParams.conversation_id = this.$route.params.id;
      axios
        .post("/messages", this.newMessageParams)
        .then((response) => {
          console.log("messages create", response);
          this.messages.push(response.data);
          this.newMessageParams = {};
        })
        .catch((error) => {
          console.log("messages create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="conversations-show">
    <p>{{ conversation.messages }}</p>
    <p>Conversation With {{ conversation.partner.name }}</p>
    <div v-for="message in conversation.messages" v-bind:key="message.id">
      <p>{{ message.body }}</p>
    </div>
    <br />
    <div>
      <form v-on:submit.prevent="createMessage()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        New Message
        <br />
        <input type="text" v-model="newMessageParams.body" />
        <br />

        <input type="submit" value="Create" />
      </form>
    </div>
    <p>{{ user_id }}</p>
  </div>
</template>
