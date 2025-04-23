# src/views/Profile.vue
<template>
  <main class="settings-container">
    <aside class="settings-nav">
      <h2 class="settings-nav-title">Settings</h2>
      <ul class="settings-nav-list">
        <li v-for="item in navigationItems" :key="item.id" class="settings-nav-item">
          <a 
            href="#" 
            class="settings-nav-link" 
            :class="{ 'active': activeSection === item.id }"
            @click.prevent="setActiveSection(item.id)"
          >
            <i :class="['settings-nav-icon', item.icon]"></i>
            {{ item.label }}
          </a>
        </li>
      </ul>
    </aside>

    <div class="settings-content">
      <div v-if="showSuccessMessage" class="alert alert-success">
        <i class="fas fa-check-circle alert-icon"></i>
        <div class="alert-content">
          <div class="alert-title">Profile Updated Successfully</div>
          <div class="alert-message">Your changes have been saved.</div>
        </div>
      </div>

      <div class="settings-header">
        <h1 class="settings-title">Personal Information</h1>
        <p class="settings-description">Manage your personal information and contact details.</p>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <h3 class="form-label">Basic Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                class="form-input" 
                v-model="userData.fullName"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="id">{{ authStore.isTeacher ? 'Faculty ID' : 'Student ID' }}</label>
              <input 
                type="text" 
                id="id" 
                class="form-input" 
                v-model="userData.id"
                disabled
              >
            </div>
            
            <template v-if="authStore.isTeacher">
              <div class="form-group">
                <label class="form-label" for="academicTitle">Academic Title</label>
                <input 
                  type="text" 
                  id="academicTitle" 
                  class="form-input" 
                  v-model="userData.academicTitle"
                >
              </div>
              <div class="form-group">
                <label class="form-label" for="department">Department</label>
                <input 
                  type="text" 
                  id="department" 
                  class="form-input" 
                  v-model="userData.department"
                >
              </div>
            </template>
            
            <template v-else>
              <div class="form-group">
                <label class="form-label" for="faculty">Faculty</label>
                <input 
                  type="text" 
                  id="faculty" 
                  class="form-input" 
                  v-model="userData.faculty"
                >
              </div>
              <div class="form-group">
                <label class="form-label" for="semester">Current Semester</label>
                <input 
                  type="text" 
                  id="semester" 
                  class="form-input" 
                  v-model="userData.semester"
                >
              </div>
            </template>
          </div>
        </div>

        <div class="form-group">
          <h3 class="form-label">Contact Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                class="form-input" 
                v-model="userData.email"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                class="form-input" 
                v-model="userData.phone"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="office">
                {{ authStore.isTeacher ? 'Office Location' : 'Current Address' }}
              </label>
              <input 
                type="text" 
                id="office" 
                class="form-input" 
                v-model="userData.address"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="officeHours">
                {{ authStore.isTeacher ? 'Office Hours' : 'Country' }}
              </label>
              <input 
                type="text" 
                id="officeHours" 
                class="form-input" 
                v-model="userData.officeHours"
              >
            </div>
          </div>
        </div>

        <div class="form-group">
          <h3 class="form-label">Profile Visibility</h3>
          <div 
            v-for="(setting, key) in userData.visibility" 
            :key="key" 
            class="switch-group"
          >
            <div>
              <div class="switch-label">{{ setting.label }}</div>
              <div class="switch-description">{{ setting.description }}</div>
            </div>
            <label class="switch">
              <input type="checkbox" v-model="setting.enabled">
              <span class="switch-slider"></span>
            </label>
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" @click="resetForm">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const showSuccessMessage = ref(false)
const activeSection = ref('personal')

const navigationItems = [
  { id: 'personal', label: 'Personal Information', icon: 'fas fa-user' },
  { id: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
  { id: 'language', label: 'Language & Region', icon: 'fas fa-globe' },
  { id: 'accessibility', label: 'Accessibility', icon: 'fas fa-universal-access' },
  { id: 'security', label: 'Security', icon: 'fas fa-shield-alt' }
]

const defaultTeacherData = {
  fullName: '',
  id: '',
  academicTitle: '',
  department: '',
  email: '',
  phone: '',
  address: '',
  officeHours: '',
  visibility: {
    email: { label: 'Show Email Address', description: 'Display your email address on your public profile', enabled: true },
    officeHours: { label: 'Show Office Hours', description: 'Display your office hours on your public profile', enabled: true },
    phone: { label: 'Show Phone Number', description: 'Display your phone number on your public profile', enabled: false }
  }
}

const defaultStudentData = {
  fullName: '',
  id: '',
  faculty: '',
  semester: '',
  email: '',
  phone: '',
  address: '',
  country: '',
  visibility: {
    email: { label: 'Show Email Address', description: 'Display your email address on your public profile', enabled: true },
    phone: { label: 'Show Phone Number', description: 'Display your phone number on your public profile', enabled: false }
  }
}

const userData = ref(authStore.isTeacher ? { ...defaultTeacherData } : { ...defaultStudentData })

const setActiveSection = (section) => {
  activeSection.value = section
}

const handleSubmit = async () => {
  try {
    showSuccessMessage.value = true
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 3000)
  } catch (error) {
    console.error('Error saving profile:', error)
  }
}

const resetForm = () => {
  userData.value = authStore.isTeacher ? { ...defaultTeacherData } : { ...defaultStudentData }
}

onMounted(() => {
  if (authStore.isTeacher) {
    userData.value = {
      ...defaultTeacherData,
      fullName: 'Prof. Dr. Benjamin Weyers',
      id: 'FAC2024001',
      academicTitle: 'Junior Professor',
      department: 'Computer Science',
      email: 'b.weyers@space-university.edu',
      phone: '+1 (555) 123-4567',
      address: 'H441',
      officeHours: 'Thursday 13:00 - 14:00'
    }
  } else {
    userData.value = {
      ...defaultStudentData,
      fullName: 'John Doe',
      id: 'ST2024001',
      faculty: 'Computer Science',
      semester: '3rd Semester',
      email: 'john.doe@student.space-university.edu',
      phone: '+1 (555) 123-4567',
      address: '123 Student Housing, Campus Area',
      country: 'United States'
    }
  }
})
</script>

<style scoped>
@import '@/assets/styles/views/profile.css';
</style>