# src/App.vue
<template>
  <div class="min-h-screen flex flex-col">
    <template v-if="isLandingPage">
      <LandingNavbar />
    </template>
    <template v-else>
      <TeacherNavbar v-if="authStore.isTeacher" />
      <MainNavbar v-else-if="authStore.isStudent" />
      <LandingNavbar v-else />
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
import { useAuthStore } from '@/stores/authStore'
import LandingNavbar from './components/layout/LandingNavbar.vue'
import MainNavbar from './components/layout/MainNavbar.vue'
import TeacherNavbar from './components/layout/TeacherNavbar.vue'
import LandingFooter from './components/layout/LandingFooter.vue'
import MainFooter from './components/layout/MainFooter.vue'

const route = useRoute()
const authStore = useAuthStore()

const isLandingPage = computed(() => route.path === '/')
</script>

<style>
@import './assets/styles/main.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>