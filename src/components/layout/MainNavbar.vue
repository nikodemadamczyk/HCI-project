<template>
  <nav class="navbar">
    <div class="nav">
      <div class="logo_container">
        <router-link to="/" class="logo">
          <img src="../../assets/images/logo.svg" alt="Space University">
        </router-link>
      </div>
      <ul class="nav__links">
        <li><router-link to="/" class="nav__link" :class="{ 'active': currentRoute === '/' }">Home</router-link></li>
        <li v-if="authStore.isAuthenticated">
          <router-link to="/dashboard" class="nav__link" :class="{ 'active': currentRoute === '/dashboard' }">Dashboard</router-link>
        </li>
        <li><router-link to="/courses" class="nav__link" :class="{ 'active': currentRoute === '/courses' }">Courses</router-link></li>
        <li v-if="authStore.isAuthenticated">
          <router-link to="/schedule" class="nav__link" :class="{ 'active': currentRoute === '/schedule' }">Schedule</router-link>
        </li>
        <li v-if="authStore.isAuthenticated">
          <router-link to="/profile" class="nav__link" :class="{ 'active': currentRoute === '/profile' }">Profile</router-link></li>
        <li>
          <router-link 
            v-if="!authStore.isAuthenticated"
            to="/auth" 
            class="nav__link" 
            :class="{ 'active': currentRoute === '/auth' }"
          >
            Login
          </router-link>
          <a 
            v-else 
            href="#" 
            class="nav__link logout-link"
            @click.prevent="handleLogout"
          >
            <i class="fas fa-sign-out-alt"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

export default {
  name: 'MainNavbar',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const authStore = useAuthStore()
    const currentRoute = computed(() => route.path)
    
    const handleLogout = async () => {
      await authStore.logout()
      router.push('/')
    }

    return {
      currentRoute,
      authStore,
      handleLogout
    }
  }
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