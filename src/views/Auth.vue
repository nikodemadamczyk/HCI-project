# src/views/Auth.vue
<template>
  <div class="flex flex-col justify-center items-center px-8 py-16 min-h-[calc(100vh-180px)]">
    <div class="w-full max-w-lg">
      <!-- Toggle Buttons -->
      <div class="bg-primary-white rounded-t-xl p-2 flex shadow-sm">
        <button 
          class="flex-1 py-4 px-6 text-base font-semibold relative transition-all"
          :class="activeForm === 'login' ? 'text-primary-orange border-b-2 border-primary-orange' : 'text-text-gray hover:text-primary-navy'"
          @click="activeForm = 'login'"
        >
          <span>Login</span>
        </button>
        <button 
          class="flex-1 py-4 px-6 text-base font-semibold relative transition-all"
          :class="activeForm === 'register' ? 'text-primary-orange border-b-2 border-primary-orange' : 'text-text-gray hover:text-primary-navy'"
          @click="activeForm = 'register'"
        >
          <span>Register</span>
        </button>
      </div>

      <!-- Form Container -->
      <div class="bg-primary-white rounded-b-xl p-10 shadow-md">
        <LoginForm 
          v-if="activeForm === 'login'"
          @submit="handleLogin"
          class="w-full"
        />
        <RegisterForm 
          v-if="activeForm === 'register'"
          @submit="handleRegister"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const router = useRouter()
const authStore = useAuthStore()
const activeForm = ref('login')

const handleLogin = async (credentials) => {
  try {
    const user = await authStore.login(credentials)
    // Przekieruj do odpowiedniego dashboardu
    if (user.role === 'teacher') {
      router.push('/faculty/dashboard')
    } else {
      router.push('/dashboard')
    }
  } catch (error) {
    alert(error.message)
  }
}

const handleRegister = async (userData) => {
  try {
    await authStore.register(userData)
    activeForm.value = 'login'
    alert('Account created successfully! You can now log in.')
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped>
@import '@/assets/styles/views/auth.css';
</style>