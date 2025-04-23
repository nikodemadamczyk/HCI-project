# src/components/auth/RegisterForm.vue
<template>
  <div class="w-full">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-primary-navy mb-2">Create Account</h2>
      <p class="text-text-gray">Join Space University today</p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block text-primary-navy font-medium mb-2" for="register-name">Full Name</label>
        <input 
          type="text" 
          id="register-name" 
          class="form-input"
          v-model="formData.fullName" 
          placeholder="John Doe"
        >
      </div>

      <div>
        <label class="block text-primary-navy font-medium mb-2" for="register-email">Email</label>
        <input 
          type="email" 
          id="register-email" 
          class="form-input"
          v-model="formData.email" 
          placeholder="you@example.com"
        >
      </div>
      
      <div>
        <label class="block text-primary-navy font-medium mb-2">Role</label>
        <div class="flex gap-4">
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="formData.role" 
              value="student"
              class="form-radio text-primary-orange"
            >
            <span class="ml-2">Student</span>
          </label>
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="formData.role" 
              value="teacher"
              class="form-radio text-primary-orange"
            >
            <span class="ml-2">Teacher</span>
          </label>
        </div>
      </div>
      
      <div>
        <label class="block text-primary-navy font-medium mb-2" for="register-password">Password</label>
        <input 
          type="password" 
          id="register-password" 
          class="form-input"
          v-model="formData.password" 
          placeholder="Create a password"
        >
      </div>
      
      <div>
        <label class="block text-primary-navy font-medium mb-2" for="register-confirm">Confirm Password</label>
        <input 
          type="password" 
          id="register-confirm" 
          class="form-input"
          v-model="formData.confirmPassword" 
          placeholder="Confirm your password"
        >
      </div>
      
      <button 
        type="submit" 
        class="btn btn-primary w-full"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Creating Account...' : 'Create Account' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const isSubmitting = ref(false)

const formData = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'student' // Default role
})

const handleSubmit = async () => {
  if (formData.value.password !== formData.value.confirmPassword) {
    alert('Passwords do not match')
    return
  }

  isSubmitting.value = true
  try {
    await emit('submit', { ...formData.value })
  } catch (error) {
    console.error('Registration error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-2 border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-orange;
}

.form-radio {
  @apply text-primary-orange focus:ring-primary-orange;
}
</style>