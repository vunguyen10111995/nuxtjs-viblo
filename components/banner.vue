<template>
  <div class="banner">
    <img 
    src="https://images.viblo.asia/full/f5acbc78-6bc1-46f8-82a8-d93b6e0ebd3d.png">
    <div class="greeting">
      <app-h1>Viblo | Free service for technical knowledge sharing</app-h1>
      <p>Technology Articles Platform from Asia, filled with latest information on Programming Languages and Frameworks. Ruby on Rails / PHP / Swift / Unity / Java /.Net</p>
    </div>
  </div>
</template>

<style>
.banner {
  margin: 8rem 0;
  position: relative;
}
img {
  width: 100%;
}
.greeting {
  text-align: center;
  position: absolute;
  bottom: -5rem;
  margin: 0 25rem;
  padding: 1rem 2rem;
  background: #fff;
}
</style>

<script>
import h1 from './h1';
export default {
  components: {
    'app-h1': h1
  }
};
</script>