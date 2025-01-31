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
          class="w-full h-12 px-4 border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange focus:ring-opacity-10"
          :class="{ 
            'border-error-red': v$.fullName.$error,
            'border-success-green': !v$.fullName.$error && formData.fullName 
          }"
          v-model="formData.fullName" 
          placeholder="John Doe"
        >
        <span v-if="v$.fullName.$error" class="text-error-red text-sm mt-1 block">
          {{ v$.fullName.$errors[0].$message }}
        </span>
        <span v-else-if="formData.fullName" class="text-success-green text-sm mt-1 block">
          Looks good!
        </span>
      </div>

      <div>
        <label class="block text-primary-navy font-medium mb-2" for="register-email">Email</label>
        <input 
          type="email" 
          id="register-email" 
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
        <label class="block text-primary-navy font-medium mb-2" for="register-password">Password</label>
        <input 
          type="password" 
          id="register-password" 
          class="w-full h-12 px-4 border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange focus:ring-opacity-10"
          :class="{ 'border-error-red': v$.password.$error }"
          v-model="formData.password" 
          placeholder="Create a password"
        >
        <span v-if="v$.password.$error" class="text-error-red text-sm mt-1 block">
          {{ v$.password.$errors[0].$message }}
        </span>
      </div>
      
      <div>
        <label class="block text-primary-navy font-medium mb-2" for="register-confirm">Confirm Password</label>
        <input 
          type="password" 
          id="register-confirm" 
          class="w-full h-12 px-4 border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-primary-orange focus:ring-opacity-10"
          :class="{ 'border-error-red': v$.confirmPassword.$error }"
          v-model="formData.confirmPassword" 
          placeholder="Confirm your password"
        >
        <span v-if="v$.confirmPassword.$error" class="text-error-red text-sm mt-1 block">
          {{ v$.confirmPassword.$errors[0].$message }}
        </span>
      </div>
      
      <button 
        type="submit" 
        class="w-full h-12 bg-primary-orange text-primary-white font-semibold rounded-lg hover:bg-light-orange transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Creating Account...' : 'Create Account' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

const emit = defineEmits(['submit'])
const isSubmitting = ref(false)

const formData = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const rules = {
  fullName: { required, minLength: minLength(3) },
  email: { required, email },
  password: { required, minLength: minLength(8) },
  confirmPassword: { 
    required,
    sameAsPassword: (value) => value === formData.password || 'Passwords must match'
  }
}

const v$ = useVuelidate(rules, formData)

const handleSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return
  
  isSubmitting.value = true
  try {
    await emit('submit', { ...formData })
    alert('Account created successfully! You can now log in.')
  } catch (error) {
    alert(error.message)
  } finally {
    isSubmitting.value = false
  }
}

</script>