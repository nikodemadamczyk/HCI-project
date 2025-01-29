<template>
  <nav class="navbar">
    <div class="nav">
      <div class="logo_container">
        <!-- Logo will be added later with proper asset -->
        <div class="text-primary-orange text-xl font-bold">Space University</div>
      </div>
      <ul class="nav__links">
        <li><a href="/" class="nav__link" :class="{ 'active': currentRoute === '/' }">Home</a></li>
        <li><a href="/courses" class="nav__link" :class="{ 'active': currentRoute === '/courses' }">Courses</a></li>
        <li><a href="/schedule" class="nav__link" :class="{ 'active': currentRoute === '/schedule' }">Schedule</a></li>
        <li><a href="/profile" class="nav__link" :class="{ 'active': currentRoute === '/profile' }">Profile</a></li>
        <li><a href="/auth" class="nav__link" :class="{ 'active': currentRoute === '/auth' }">Login</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'


  const route = useRoute()
  const currentRoute = computed(() => route.path)
</script>

<style scoped>
     @import '../../assets/styles/layout/main_navbar.css'; 
</style>