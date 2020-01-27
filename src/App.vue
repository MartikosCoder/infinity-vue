<template>
  <div>
    <vk-card 
      v-for="(user, index) in users" 
      :key="index" 
      class="uk-width-1-2 centered"
    >
      <div slot="header">
        <vk-grid 
          gutter="small" 
          class="uk-flex-middle"
        >
          <div class="uk-width-auto">
            <img 
              class="uk-border-circle" 
              width="80" 
              height="80" 
              :src="user.picture.large"
            >
          </div>
          <div class="uk-width-expand">
            <vk-card-title class="uk-margin-remove-bottom">
              {{ fullName(user.name) }}
            </vk-card-title>
            <p class="uk-text-meta uk-margin-remove-top">
              <span>{{ user.email }}</span>
            </p>
          </div>
        </vk-grid>
      </div>
    </vk-card>
  </div>
</template>

<script>
export default {
  name: "MainCard",
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
    fullName(name) {
      return `${name.title} ${name.first} ${name.last}`;
    },
    handleScroll() {
      const position = window.scrollY + window.innerHeight;
      const bottom = document.body.scrollHeight;
      const offset = 400;
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
.centered {
  margin: 1% auto;
}

.centered:last-child {
  margin-top: 0;
  margin-bottom: 0;
}
</style>