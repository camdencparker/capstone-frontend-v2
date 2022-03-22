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
    <div class="Blog-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-12">
            <div class="blog-details-wrapper ml-20">
              <div class="blog-comment-wrapper mt-55">
                <h4 class="blog-dec-title">Conversation With {{ conversation.partner.name }}</h4>
                <div
                  v-for="message in conversation.messages"
                  v-bind:key="message.id"
                  class="single-comment-wrapper mt-35"
                >
                  <div class="blog-comment-img">
                    <img :src="message.user.profile_pic" alt="" />
                  </div>
                  <div class="blog-comment-content">
                    <h4>{{ message.user.name }}</h4>
                    <span>{{ message.created_at }}</span>
                    <p>
                      {{ message.body }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="blog-reply-wrapper mt-50">
                <h4 class="blog-dec-title">reply</h4>
                <form class="blog-form" v-on:submit.prevent="createMessage()">
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="text-leave">
                        <textarea placeholder="Message" v-model="newMessageParams.body"></textarea>
                        <input type="submit" value="SEND MESSAGE" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
