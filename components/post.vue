<template>
  <div class="item">
  <a :href="post.url" target="_blank">
    <p>{{ post.title }}</p>
    </a>
  </div>
</template>

<style>
  .item {
      display: grid;
      margin-bottom: 10px;
  }
</style>

<script>
export default {
  props: ['post'],
  methods: {
    
  }
}
</script>

