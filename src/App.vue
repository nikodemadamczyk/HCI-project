<template>
  <div class="min-h-screen flex flex-col">
    <template v-if="isLandingPage">
      <LandingNavbar />
    </template>
    <template v-else>
      <MainNavbar />
    </template>

    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <template v-if="isLandingPage">
      <LandingFooter />
    </template>
    <template v-else>
      <MainFooter />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LandingNavbar from './components/layout/LandingNavbar.vue'
import MainNavbar from './components/layout/MainNavbar.vue'
import LandingFooter from './components/layout/LandingFooter.vue'
import MainFooter from './components/layout/MainFooter.vue'

const route = useRoute()
const isLandingPage = computed(() => route.path === '/')
</script>

<style>
@import './assets/styles/main.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>