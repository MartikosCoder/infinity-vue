<template>
  <div>
    <vk-card
      @scroll="checkScroll"
      v-for="(user, index) in users"
      class="uk-width-1-2 centered"
      :key="index"
      ref="index"
    >
      <div slot="header">
        <vk-grid gutter="small" class="uk-flex-middle">
          <div class="uk-width-auto">
            <img class="uk-border-circle" width="80" height="80" :src="user.picture.large" />
          </div>
          <div class="uk-width-expand">
            <vk-card-title class="uk-margin-remove-bottom">{{ fullName(user.name) }}</vk-card-title>
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
  name: "main-card",
  data() {
    return {
      users: []
    };
  },
  created() {
    fetch("https://randomuser.me/api/?results=10&inc=name,picture,email")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("API Error");
      })
      .then(body => {
        this.$set(this, "users", body.results);
        console.log(this.users);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    fullName(name) {
      return `${name.title} ${name.first} ${name.last}`;
    }
  }
};
</script>

<style>
.centered {
  margin: 1% auto;
}
</style>