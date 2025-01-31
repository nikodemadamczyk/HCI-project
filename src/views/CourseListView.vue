<template>
  <main class="course-listing">
    <div class="listing-header">
      <h1 class="page-title">Available Courses</h1>
      <div class="search-section">
        <div class="search-bar">
          <i class="fas fa-search search-icon"></i>
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search for courses..."
            v-model="searchQuery"
            @input="filterCourses"
          >
        </div>
      </div>
      <div class="filters">
        <button 
          v-for="filter in filters" 
          :key="filter"
          class="filter-btn"
          :class="{ 'active': activeFilter === filter }"
          @click="setFilter(filter)"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    <div class="course-grid">
      <div v-for="course in displayedCourses" :key="course.id" class="course-card">
        <div class="course-header">
          <h2 class="course-title">{{ course.title }}</h2>
          <p class="course-professor">{{ course.professor }}</p>
        </div>
        <div class="course-content">
          <div class="course-details">
            <div class="detail-item">
              <div class="detail-label">Department</div>
              <div class="detail-value">{{ course.department }}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Credits</div>
              <div class="detail-value">{{ course.credits }} ECTS</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Schedule</div>
              <div class="detail-value">{{ course.schedule }}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Room</div>
              <div class="detail-value">{{ course.room }}</div>
            </div>
          </div>
          <p class="course-description">{{ course.description }}</p>
            <div class="course-actions">
            <button 
              class="course-btn btn-primary" 
              @click="enrollCourse(course.id)"
              :disabled="isEnrolled(course.id)"
            >
              {{ isEnrolled(course.id) ? 'Enrolled' : 'Enroll Now' }}
            </button>
            <button class="course-btn btn-secondary" @click="viewCourseDetails(course.id)">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/courseStore'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const courseStore = useCourseStore()
const authStore = useAuthStore()
const searchQuery = ref('')
const activeFilter = ref('All Courses')

const filters = ['All Courses', 'Computer Science', 'Engineering', 'Mathematics', 'Available']

const displayedCourses = computed(() => {
  return courseStore.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         course.professor.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesFilter = activeFilter.value === 'All Courses' || 
                         course.department === activeFilter.value || 
                         (course.available && activeFilter.value === 'Available')

    return matchesSearch && matchesFilter
  })
})

const setFilter = (filter) => {
  activeFilter.value = filter
}

const isEnrolled = (courseId) => {
  return courseStore.enrollments.some(
    e => e.userId === authStore.user?.id && e.courseId === courseId
  )
}

const enrollCourse = async (courseId) => {
  if (!authStore.user) {
    router.push('/auth')
    return
  }

  try {
    await courseStore.enrollCourse(authStore.user.id, courseId)
    alert('Successfully enrolled in course!')
  } catch (error) {
    alert(error.message)
  }
}

const viewCourseDetails = (courseId) => {
  router.push(`/courses/${courseId}`)
}
</script>

<style scoped>
@import '../assets/styles/views/course_list_view.css';
</style>