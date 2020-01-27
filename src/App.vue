<template>
  <vk-card class="uk-width-1-2 centered">
    <div slot="header">
      <vk-grid gutter="small" class="uk-flex-middle">
        <div class="uk-width-auto">
          <img class="uk-border-circle" width="40" height="40" src="/images/guide/avatar.jpg" />
        </div>
        <div class="uk-width-expand">
          <vk-card-title class="uk-margin-remove-bottom">Title</vk-card-title>
          <p class="uk-text-meta uk-margin-remove-top">
            <time datetime="2016-04-01T19:00">April 01, 2016</time>
          </p>
        </div>
      </vk-grid>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div slot="footer">
      <vk-button-link type="text" href="#">Read more</vk-button-link>
    </div>
  </vk-card>
</template>

<script>
export default {};
</script>

<style>
.centered {
  margin: 1% auto;
}
</style>