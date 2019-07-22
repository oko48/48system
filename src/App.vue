<template>
  <v-app>
      <core-toolbar />
      <slider />
      <v-layout row wrap>
            <v-flex xs12>
                <h2>Научные работы</h2>
            </v-flex>
        </v-layout>
      <tabs />
      <footers />

  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {

      CoreToolbar: () => import('@/components/Toolbar'),
      Slider: () => import('@/components/Slider'),
      Tabs: () => import('@/components/Tabs'),
      Footers: () => import('@/components/Footers'),

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
