<template>
    <main class="dashboard">
      <div class="dashboard-header">
        <div class="welcome-text">
          <h1>Welcome, {{ teacherData.name }}</h1>
          <p>Manage your courses and schedule</p>
        </div>
        <div class="action-buttons">
          <button class="btn btn-secondary" @click="$router.push('/schedule')">
            <i class="fas fa-calendar mr-2"></i>
            View Schedule
          </button>
          <button class="btn btn-primary" @click="$router.push('/courses/new')">
            <i class="fas fa-plus mr-2"></i>
            Create New Course
          </button>
        </div>
      </div>
  
      <div class="dashboard-grid">
        <!-- Left Column -->
        <div class="dashboard-main">
          <div class="course-cards">
            <div v-for="course in courses" :key="course.id" class="course-card">
              <div class="course-card__header">
                <div>
                  <h3 class="course-card__title">{{ course.title }}</h3>
                  <p class="course-card__students">{{ course.enrolledStudents }} Students Enrolled</p>
                </div>
                <span 
                  class="course-card__status"
                  :class="{ 'active': course.status === 'Active' }"
                >
                  {{ course.status }}
                </span>
              </div>
              <div class="course-card__actions">
                <button class="card-btn" @click="editCourse(course.id)">
                  <i class="fas fa-edit mr-2"></i>
                  Edit Course
                </button>
                <button class="card-btn" @click="viewStudents(course.id)">
                  <i class="fas fa-users mr-2"></i>
                  View Students
                </button>
                <button class="card-btn" @click="manageMaterials(course.id)">
                  <i class="fas fa-book mr-2"></i>
                  Manage Materials
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Column -->
        <div class="dashboard-sidebar">
          <!-- Profile Section -->
          <div class="profile-section">
            <div class="profile-header">
              <div class="profile-avatar">
                {{ teacherData.initials }}
              </div>
              <div class="profile-info">
                <h2>{{ teacherData.name }}</h2>
                <p>{{ teacherData.department }}</p>
              </div>
            </div>
            <div class="profile-details">
              <div class="detail-item">
                <div class="detail-label">Office Hours</div>
                <div class="detail-value">{{ teacherData.officeHours }}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Office Location</div>
                <div class="detail-value">{{ teacherData.officeLocation }}</div>
              </div>
              <div class="detail-item">
                <div class="detail-label">Contact Email</div>
                <div class="detail-value">{{ teacherData.email }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const teacherData = ref({
    name: 'Prof. Dr. Benjamin Weyers',
    initials: 'BW',
    department: 'Department of Computer Science',
    officeHours: 'Thursday 13:00 - 14:00',
    officeLocation: 'H441',
    email: 'b.weyers@space-university.edu'
  })
  
  const courses = ref([
    {
      id: 1,
      title: 'Human-Computer Interaction',
      enrolledStudents: 32,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Advanced HCI Research',
      enrolledStudents: 15,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Interactive Systems',
      enrolledStudents: 25,
      status: 'Active'
    }
  ])
  
  const editCourse = (courseId) => {
    router.push(`/courses/${courseId}/edit`)
  }
  
  const viewStudents = (courseId) => {
    router.push(`/courses/${courseId}/students`)
  }
  
  const manageMaterials = (courseId) => {
    router.push(`/courses/${courseId}/materials`)
  }
  </script>

<style scoped>
@import '../assets/styles/views/faculty_dashboard.css';
</style>