// src/components/auth/LoginForm.vue
<template>
  <div class="w-full">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-primary-navy mb-2">Welcome Back</h2>
      <p class="text-text-gray">Access your Space University account</p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block text-primary-navy font-medium mb-2" for="login-email">Email</label>
        <input 
          type="email" 
          id="login-email" 
          class="w-full h-12 px-4 border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange focus:ring-opacity-10"
          :class="{ 'border-error-red': v$.email.$error }"
          v-model="formData.email" 
          placeholder="you@example.com"
        >
        <span v-if="v$.email.$error" class="text-error-red text-sm mt-1 block">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>
      
      <div>
        <label class="block text-primary-navy font-medium mb-2" for="login-password">Password</label>
        <input 
          type="password" 
          id="login-password" 
          class="w-full h-12 px-4 border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange focus:ring-opacity-10"
          :class="{ 'border-error-red': v$.password.$error }"
          v-model="formData.password" 
          placeholder="Enter your password"
        >
        <span v-if="v$.password.$error" class="text-error-red text-sm mt-1 block">
          {{ v$.password.$errors[0].$message }}
        </span>
      </div>
      
      <button 
        type="submit" 
        class="w-full h-12 bg-primary-orange text-primary-white font-semibold rounded-lg hover:bg-light-orange transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Logging in...' : 'Login' }}
      </button>
      
      <div class="text-center mt-6">
        <a 
          href="#" 
          @click.prevent="forgotPassword"
          class="text-primary-orange text-sm font-medium hover:underline"
        >
          Forgot password?
        </a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

const emit = defineEmits(['submit'])
const isSubmitting = ref(false)

const formData = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, formData)

const handleSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return
  
  isSubmitting.value = true
  try {
    await emit('submit', { ...formData })
  } finally {
    isSubmitting.value = false
  }
}

const forgotPassword = () => {
  console.log('Reset password for:', formData.email)
}
</script>