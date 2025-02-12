# src/views/EditCourse.vue
<template>
  <div class="container max-w-4xl mx-auto px-8 py-8">
    <div class="bg-white rounded-xl shadow-sm">
      <!-- Header -->
      <div class="border-b border-border-gray p-6">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-semibold text-primary-navy">Edit Course</h1>
          <button 
            class="btn btn-secondary"
            @click="$router.back()"
          >
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Dashboard
          </button>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
        <div class="form-group">
          <label class="form-label">Course Title</label>
          <input 
            type="text" 
            v-model="courseData.title"
            class="form-input"
            placeholder="Enter course title"
          >
        </div>

        <div class="form-group">
          <label class="form-label">Course Description</label>
          <textarea 
            v-model="courseData.description"
            class="form-input h-32"
            placeholder="Enter course description"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="form-group">
            <label class="form-label">Start Date</label>
            <input 
              type="date" 
              v-model="courseData.startDate"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label class="form-label">End Date</label>
            <input 
              type="date" 
              v-model="courseData.endDate"
              class="form-input"
            >
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="form-group">
            <label class="form-label">Room</label>
            <select v-model="courseData.room" class="form-input">
              <option value="">Select Room</option>
              <option v-for="room in rooms" :key="room" :value="room">
                {{ room }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Maximum Students</label>
            <input 
              type="number" 
              v-model="courseData.maxStudents"
              class="form-input"
              min="1"
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Course Status</label>
          <div class="flex gap-4">
            <label class="inline-flex items-center">
              <input 
                type="radio" 
                v-model="courseData.status"
                value="Active"
                class="form-radio"
              >
              <span class="ml-2">Active</span>
            </label>
            <label class="inline-flex items-center">
              <input 
                type="radio" 
                v-model="courseData.status"
                value="Draft"
                class="form-radio"
              >
              <span class="ml-2">Draft</span>
            </label>
            <label class="inline-flex items-center">
              <input 
                type="radio" 
                v-model="courseData.status"
                value="Archived"
                class="form-radio"
              >
              <span class="ml-2">Archived</span>
            </label>
          </div>
        </div>

        <div class="flex justify-end gap-4 pt-6 border-t border-border-gray">
          <button 
            type="button" 
            class="btn btn-secondary"
            @click="$router.back()"
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const rooms = ['H441', 'H442', 'H443', 'B301']

const courseData = ref({
  title: '',
  description: '',
  startDate: '',
  endDate: '',
  room: '',
  maxStudents: 30,
  status: 'Active'
})

const loadCourseData = async () => {
  try {
    // Tutaj normalnie byłoby zapytanie do API
    const data = {
      title: 'Human-Computer Interaction',
      description: 'Introduction to fundamental principles and practices of Human-Computer Interaction (HCI).',
      startDate: '2025-01-15',
      endDate: '2025-06-30',
      room: 'H441',
      maxStudents: 30,
      status: 'Active'
    }
    
    courseData.value = data
  } catch (error) {
    console.error('Error loading course:', error)
  }
}

const handleSubmit = async () => {
  try {
    // Tutaj normalnie byłoby zapytanie do API
    console.log('Saving course:', courseData.value)
    router.push('/faculty/dashboard')
  } catch (error) {
    console.error('Error saving course:', error)
  }
}

onMounted(() => {
  if (route.params.id) {
    loadCourseData()
  }
})
</script>

<style scoped>
.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-medium text-primary-navy;
}

.form-input {
  @apply w-full px-4 py-2 border border-border-gray rounded-lg focus:outline-none focus:border-primary-orange transition-colors;
}

.form-radio {
  @apply text-primary-orange focus:ring-primary-orange;
}

/* Override radio button styles for better visibility */
input[type="radio"] {
  @apply w-4 h-4;
}
</style>