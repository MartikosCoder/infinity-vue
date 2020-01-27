<template>
  <div>
    <user-card
      v-for="(user, index) in users" 
      :key="index"
      :user="user"
    />
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue';
/**
   * @vue-data {Boolean} [uploading=false] - Indicates upload status (to prevent multiple uploads per scroll)
   * @vue-data {Array} [users=[]] - Array of users to render
   * @vue-event handleScroll - Controls scroll logic
   * @vue-event {Number} loadNewUsers - Gets new users from API, based on amount (given as parameter)
   */
export default {
  name: "CardTable",
  components: {
    'user-card': UserCard
  },
  data() {
    return {
      uploading: false,
      users: []
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll); // Binding scroll handler to window
    this.loadNewUsers(10); // Initial load
  },
  methods: {
    handleScroll() {
      const position = window.scrollY + window.innerHeight; // Current position of scroll
      const bottom = document.body.scrollHeight; // Bottom of the page
      const offset = 500; // Offset ( for smooth refresh process )
      if(position >= bottom - offset && !this.uploading) {
        this.loadNewUsers(15);
      }
    },
    loadNewUsers(amount) {
      this.$set(this, 'uploading', true);
      fetch(`https://randomuser.me/api/?results=${amount}&inc=name,picture,email`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("API Error");
        })
        .then(body => {
          this.$set(this, "users", [...this.users, ...body.results]);
          this.$set(this, 'uploading', false);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
  body {
    background: #e9fffc;
    padding: 1% 0;
  }
</style>