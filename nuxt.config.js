module.exports = {
  head: {
    title: 'nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { hid: 'description', name: 'description', content: 'Viblo' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    vendor: ['axios']
  },
  css: ['normalize.css', '@/assets/css/base.css', 'bootstrap/dist/css/bootstrap.css']
};
