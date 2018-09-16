<template>
  <div class="post-list">
    <app-h2>Newest Posts</app-h2>
    <div class="posts">
      <post v-for="post in posts" :key="post.id" :post="post"></post>
    </div>
  </div>
</template>

<style>
.post-list {
  text-align: center;
  margin: 5rem;
}
.posts {
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

<script>
import Post from './post.vue'
import AppH2 from './h2.vue'
export default {
  props: ['posts'],
  components: {
    Post,
    AppH2,
  }
}
</script>