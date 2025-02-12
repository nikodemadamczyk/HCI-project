<template>
  <nav class="navbar">
    <div class="nav">
      <div class="logo-container">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo.svg" alt="Space University" class="h-8">
        </router-link>
      </div>
      <ul class="nav__links">
        <li>
          <router-link to="/" class="nav__link" :class="{ 'active': currentRoute === '/' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link 
            to="/faculty/dashboard" 
            class="nav__link" 
            :class="{ 'active': currentRoute === '/faculty/dashboard' }"
          >
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link 
            to="/schedule" 
            class="nav__link" 
            :class="{ 'active': currentRoute === '/schedule' }"
          >
            Schedule
          </router-link>
        </li>
        <li>
          <router-link 
            to="/profile" 
            class="nav__link" 
            :class="{ 'active': currentRoute === '/profile' }"
          >
            Profile
          </router-link>
        </li>
        <li>
          <button @click="handleLogout" class="nav__link text-error-red">
            <i class="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const currentRoute = computed(() => route.path)

const handleLogout = async () => {
  await authStore.logout()
  router.push('/')
}
</script>

<style scoped>
@import '../../assets/styles/layout/main_navbar.css';

.logout-link {
  color: var(--error-red) !important;
}

.logout-link:hover {
  background-color: rgba(220, 38, 38, 0.1) !important;
}

.nav__link i {
  margin-right: 0.5rem;
}
</style>