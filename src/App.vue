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
    window.addEventListener('scroll', this.handleScroll);
    this.loadNewUsers(10);
  },
  methods: {
    handleScroll() {
      const position = window.scrollY + window.innerHeight;
      const bottom = document.body.scrollHeight;
      const offset = 500;
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