<template>
  <div>
    <banner></banner>
    <div class="cta">
      <app-button>Write post</app-button>
    </div>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<style>
.cta {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
}
</style>

<script>
import axios from 'axios'
import AppH1 from '~/components/h1.vue';
import Banner from '~/components/banner.vue';
import AppButton from '~/components/button.vue';
import PostList from '~/components/list.vue';
export default {

  fetch({ store }) {
    return axios.get('https://viblo.asia/api/posts?limit=6')
    .then((res) => {
      console.log(1);
      store.commit('put', res.data.data)
    })
  }, 

  computed: {
    posts() {
      return this.$store.state.posts
    }
  },

  components: {
    PostList, 
    AppButton,
    Banner,
    AppH1
  }
};
</script>


