<template>
  <div>
    <app-h1>Terms of service
</app-h1>
    <p class="about">The following is "Terms of Use" part. When you use Viblo means you agree to these Terms of Service (below referred to "the Terms of Use").</p>
    <p class="about">These Terms of Use are the conditions relating to the use of Viblo (below referred to "This Service"), the product is provided by Framgia, Inc. (below referred to "Our Company"). It defines the relationship between customers using the service (below referred to "User") with the Company.
</p>
    <p class="about">By using Viblo you accept our Terms of Use and agree to abide by them.</p>
    <p class="about">We reserves the right to update the Terms of Use time to time without notice to you Users. The most current version of these Terms is assumed to be applied in preference to all earlier versions, and the posted on this service is valid.</p>
  </div>
</template>

<style>
.about {
  margin: 5rem 10rem;
}
h1 {
  text-align: center
}
</style>

<script>
import h1 from '@/components/h1';
export default {
  components: {
    'app-h1': h1
  },

  head() {
    return {
      title: 'About Viblo',
      meta: [
        { hid: 'description', name: 'description', content: 'About Vibloooo' }
      ]
    }
  }
};
</script>