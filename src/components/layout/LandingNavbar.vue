<template>
  <header class="header">
    <div class="header__top">
      <div class="logo-container">
        <router-link to="/" class="logo">
          <img src="../../assets/images/logo.svg" alt="Space University">
        </router-link>
      </div>
      <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" placeholder="Search courses, programs, or resources...">
      </div>

      <div class="user-menu">
        <a href="#" class="user-menu__item">
          <i class="far fa-bell"></i>
          <span class="badge">3</span>
        </a>
        <div v-if="!isAuthenticated">
          <router-link to="/auth" class="user-menu__item">
            <i class="far fa-user"></i>
            <span>My Account</span>
          </router-link>
        </div>
        <div v-else>
          <a href="#" class="user-menu__item" @click="logout">
            <i class="far fa-user"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>

    <nav class="header__bottom">
      <div class="nav">
        <div class="nav-item">
          <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>
        </div>
        
        <div class="nav-item">
            <a href="#" class="nav-link">
                Courses
                <i class="fas fa-chevron-down"></i>
            </a>
            <div class="dropdown">
                <router-link to="/courses" class="dropdown-item">Browse All Courses</router-link>
                <router-link to="/courses?filter=enrolled" class="dropdown-item">My Enrolled Courses</router-link>
                <router-link to="/schedule" class="dropdown-item">Course Calendar</router-link>
                <router-link to="/courses?view=catalog" class="dropdown-item">Course Catalog</router-link>
            </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            Programs
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-item">Undergraduate</a>
            <a href="#" class="dropdown-item">Graduate</a>
            <a href="#" class="dropdown-item">Certificates</a>
            <a href="#" class="dropdown-item">Professional Development</a>
          </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            Resources
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-item">Academic Calendar</a>
            <a href="#" class="dropdown-item">Library</a>
            <a href="#" class="dropdown-item">Support Center</a>
            <a href="#" class="dropdown-item">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'LandingNavbar',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const isAuthenticated = computed(() => authStore.isAuthenticated)

    const logout = async () => {
      await authStore.logout()
      router.push('/')
    }

    return {
      isAuthenticated,
      logout
    }
  }
}
</script>

<style scoped>
@import '../../assets/styles/layout/landing_navbar.css';
</style>