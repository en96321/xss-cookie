<template>
  <div class="cookie-view">
    {{ cookies }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      cookies: this.$route.query.cookie
    }
  }
}
</script>

<style>
  .cookie-view {
    text-align: left;
    max-width: 800px;
    word-break: break-all;
  }
</style>