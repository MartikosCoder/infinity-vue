<template>
  <vk-card class="uk-width-1-2 centered">
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
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      default: null
    }
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

.centered:first-child, .centered:last-child {
  margin-top: 0;
  margin-bottom: 0;
}
</style>