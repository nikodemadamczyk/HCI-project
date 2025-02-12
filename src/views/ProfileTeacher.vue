# src/views/ProfileTeacher.vue
<template>
  <main class="settings-container">
    <!-- Settings Navigation -->
    <aside class="settings-nav">
      <h2 class="settings-nav-title">Settings</h2>
      <ul class="settings-nav-list">
        <li v-for="item in navigationItems" :key="item.id" class="settings-nav-item">
          <a 
            href="#" 
            class="settings-nav-link" 
            :class="{ active: activeSection === item.id }"
            @click.prevent="setActiveSection(item.id)"
          >
            <i :class="['settings-nav-icon', item.icon]"></i>
            {{ item.label }}
          </a>
        </li>
      </ul>
    </aside>

    <!-- Settings Content -->
    <div class="settings-content">
      <!-- Success Message -->
      <div v-if="showSuccessMessage" class="alert alert-success">
        <i class="fas fa-check-circle alert-icon"></i>
        <div class="alert-content">
          <div class="alert-title">Profile Updated Successfully</div>
          <div class="alert-message">Your changes have been saved.</div>
        </div>
      </div>

      <div class="settings-header">
        <h1 class="settings-title">Personal Information</h1>
        <p class="settings-description">Manage your personal information and contact details. This information will be displayed on your public profile.</p>
      </div>

      <form @submit.prevent="handleSubmit">
        <!-- Basic Information -->
        <div class="form-group">
          <h3 class="form-label">Basic Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                class="form-input" 
                v-model="teacherData.basicInfo.fullName"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="academicTitle">Academic Title</label>
              <input 
                type="text" 
                id="academicTitle" 
                class="form-input" 
                v-model="teacherData.basicInfo.academicTitle"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="department">Department</label>
              <input 
                type="text" 
                id="department" 
                class="form-input" 
                v-model="teacherData.basicInfo.department"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="facultyId">Faculty ID</label>
              <input 
                type="text" 
                id="facultyId" 
                class="form-input" 
                v-model="teacherData.basicInfo.facultyId" 
                disabled
              >
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="form-group">
          <h3 class="form-label">Contact Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                class="form-input" 
                v-model="teacherData.contactInfo.email"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Office Phone</label>
              <input 
                type="tel" 
                id="phone" 
                class="form-input" 
                v-model="teacherData.contactInfo.phone"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="office">Office Location</label>
              <input 
                type="text" 
                id="office" 
                class="form-input" 
                v-model="teacherData.contactInfo.office"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="officeHours">Office Hours</label>
              <input 
                type="text" 
                id="officeHours" 
                class="form-input" 
                v-model="teacherData.contactInfo.officeHours"
              >
            </div>
          </div>
        </div>

        <!-- Profile Visibility -->
        <div class="form-group">
          <h3 class="form-label">Profile Visibility</h3>
          <div 
            v-for="(setting, key) in teacherData.visibility" 
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

        <!-- Communication Preferences -->
        <div class="form-group">
          <h3 class="form-label">Communication Preferences</h3>
          <div 
            v-for="(pref, key) in teacherData.communications" 
            :key="key" 
            class="switch-group"
          >
            <div>
              <div class="switch-label">{{ pref.label }}</div>
              <div class="switch-description">{{ pref.description }}</div>
            </div>
            <label class="switch">
              <input type="checkbox" v-model="pref.enabled">
              <span class="switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button 
            type="button" 
            class="btn btn-secondary"
            @click="handleCancel"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="btn btn-primary"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeSection = ref('personal')
const showSuccessMessage = ref(false)

const navigationItems = [
  { id: 'personal', label: 'Personal Information', icon: 'fas fa-user' },
  { id: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
  { id: 'language', label: 'Language & Region', icon: 'fas fa-globe' },
  { id: 'accessibility', label: 'Accessibility', icon: 'fas fa-universal-access' },
  { id: 'security', label: 'Security', icon: 'fas fa-shield-alt' }
]

const teacherData = ref({
  basicInfo: {
    fullName: 'Prof. Dr. Benjamin Weyers',
    academicTitle: 'Junior Professor',
    department: 'Computer Science',
    facultyId: 'FAC2024001'
  },
  contactInfo: {
    email: 'b.weyers@space-university.edu',
    phone: '+1 (555) 123-4567',
    office: 'H441',
    officeHours: 'Thursday 13:00 - 14:00'
  },
  visibility: {
    email: { label: 'Show Email Address', description: 'Display your email address on your public profile', enabled: true },
    officeHours: { label: 'Show Office Hours', description: 'Display your office hours on your public profile', enabled: true },
    phone: { label: 'Show Phone Number', description: 'Display your office phone number on your public profile', enabled: false }
  },
  communications: {
    email: { label: 'Email Notifications', description: 'Receive email notifications for important updates', enabled: true },
    announcements: { label: 'Course Announcements', description: 'Receive notifications for course-related announcements', enabled: true }
  }
})

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

const handleCancel = () => {
  router.go(-1)
}

// Load initial data
onMounted(async () => {

})
</script>

<style scoped>
@import '@/assets/styles/views/profile.css';
</style>