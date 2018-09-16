<template>
  <a :href="`https://viblo.asia`">
    <slot></slot>
  </a>
</template>

<style>
a {
  text-decoration:none;
  padding: 10px 15px;
  background: #1CB593;
  color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  border:none;
}
a:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>

<script>
export default {
  
}
</script>