
<template>
  <main class="settings-container">
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
                v-model="studentData.basicInfo.fullName" 
                disabled
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="studentId">Student ID</label>
              <input 
                type="text" 
                id="studentId" 
                class="form-input" 
                v-model="studentData.basicInfo.studentId" 
                disabled
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="faculty">Faculty</label>
              <input 
                type="text" 
                id="faculty" 
                class="form-input" 
                v-model="studentData.basicInfo.faculty" 
                disabled
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="currentSemester">Current Semester</label>
              <input 
                type="text" 
                id="currentSemester" 
                class="form-input" 
                v-model="studentData.basicInfo.currentSemester" 
                disabled
              >
            </div>
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
                v-model="studentData.contactInfo.email"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                class="form-input" 
                v-model="studentData.contactInfo.phone"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="address">Current Address</label>
              <input 
                type="text" 
                id="address" 
                class="form-input" 
                v-model="studentData.contactInfo.address"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="country">Country</label>
              <input 
                type="text" 
                id="country" 
                class="form-input" 
                v-model="studentData.contactInfo.country"
              >
            </div>
          </div>
        </div>

        <div class="form-group">
          <h3 class="form-label">Emergency Contact</h3>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="emergencyName">Contact Name</label>
              <input 
                type="text" 
                id="emergencyName" 
                class="form-input" 
                v-model="studentData.emergencyContact.name"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="relationship">Relationship</label>
              <input 
                type="text" 
                id="relationship" 
                class="form-input" 
                v-model="studentData.emergencyContact.relationship"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="emergencyPhone">Emergency Phone</label>
              <input 
                type="tel" 
                id="emergencyPhone" 
                class="form-input" 
                v-model="studentData.emergencyContact.phone"
              >
            </div>
            <div class="form-group">
              <label class="form-label" for="emergencyEmail">Emergency Email</label>
              <input 
                type="email" 
                id="emergencyEmail" 
                class="form-input" 
                v-model="studentData.emergencyContact.email"
              >
            </div>
          </div>
        </div>

        <div class="form-group">
          <h3 class="form-label">Profile Visibility</h3>
          <div 
            v-for="(setting, key) in studentData.visibility" 
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
            v-for="(pref, key) in studentData.communications" 
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

const studentData = ref({
  basicInfo: {
    fullName: 'John Doe',
    studentId: 'ST2024001',
    faculty: 'Computer Science',
    currentSemester: '3rd Semester'
  },
  contactInfo: {
    email: 'john.doe@student.space-university.edu',
    phone: '+1 (555) 123-4567',
    address: '123 Student Housing, Campus Area',
    country: 'United States'
  },
  emergencyContact: {
    name: 'Jane Doe',
    relationship: 'Parent',
    phone: '+1 (555) 987-6543',
    email: 'jane.doe@email.com'
  },
  visibility: {
    email: { label: 'Show Email Address', description: 'Display your email address on your public profile', enabled: true },
    phone: { label: 'Show Phone Number', description: 'Display your phone number on your public profile', enabled: false },
    address: { label: 'Show Address', description: 'Display your address on your public profile', enabled: true }
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

onMounted(async () => {

})
</script>

<style scoped>
@import '@/assets/styles/views/profile.css';
</style>