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
            <button class="course-btn btn-primary" @click="enrollCourse(course.id)">
              Enroll Now
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

const router = useRouter()
const searchQuery = ref('')
const activeFilter = ref('All Courses')

const filters = ['All Courses', 'Computer Science', 'Engineering', 'Mathematics', 'Available']


const courses = [
  {
    id: 1,
    title: 'Human-Computer Interaction',
    professor: 'Prof. Dr. Benjamin Weyers',
    department: 'Computer Science',
    credits: 6,
    schedule: 'Mon 14:00-15:30',
    room: 'H441',
    description: 'Introduction to fundamental principles and practices of Human-Computer Interaction (HCI).',
    category: 'Computer Science',
    available: true
  },
  {
    id: 2,
    title: 'Software Engineering',
    professor: 'Prof. Dr. Michael Chen',
    department: 'Computer Science',
    credits: 6,
    schedule: 'Thu 15:30-17:00',
    room: 'B301',
    description: 'Learn modern software development practices and project management.',
    category: 'Computer Science',
    available: true
  },
  {
    id: 3,
    title: 'Data Structures and Algorithms',
    professor: 'Prof. Dr. Alice Johnson',
    department: 'Computer Science',
    credits: 6,
    schedule: 'Tue 10:00-11:30',
    room: 'C202',
    description: 'Explore advanced data structures and algorithms for efficient problem-solving.',
    category: 'Computer Science',
    available: true
  },
  {
    id: 4,
    title: 'Artificial Intelligence',
    professor: 'Prof. Dr. Robert Smith',
    department: 'Computer Science',
    credits: 6,
    schedule: 'Wed 09:00-10:30',
    room: 'D101',
    description: 'Introduction to AI concepts, including machine learning and neural networks.',
    category: 'Computer Science',
    available: true
  },
  {
    id: 5,
    title: 'Mechanical Engineering Principles',
    professor: 'Prof. Dr. Emily Davis',
    department: 'Engineering',
    credits: 6,
    schedule: 'Mon 08:00-09:30',
    room: 'E301',
    description: 'Fundamentals of mechanical engineering, including mechanics and thermodynamics.',
    category: 'Engineering',
    available: true
  },
  {
    id: 6,
    title: 'Electrical Circuits and Systems',
    professor: 'Prof. Dr. John Brown',
    department: 'Engineering',
    credits: 6,
    schedule: 'Fri 13:00-14:30',
    room: 'F102',
    description: 'Study of electrical circuits, systems, and their applications.',
    category: 'Engineering',
    available: true
  },
  {
    id: 7,
    title: 'Thermodynamics',
    professor: 'Prof. Dr. Sarah Wilson',
    department: 'Engineering',
    credits: 6,
    schedule: 'Thu 11:00-12:30',
    room: 'G201',
    description: 'Principles of thermodynamics and their applications in engineering.',
    category: 'Engineering',
    available: true
  },
  {
    id: 8,
    title: 'Linear Algebra',
    professor: 'Prof. Dr. David Miller',
    department: 'Mathematics',
    credits: 6,
    schedule: 'Tue 14:00-15:30',
    room: 'H301',
    description: 'Introduction to linear algebra, including vectors, matrices, and transformations.',
    category: 'Mathematics',
    available: true
  },
  {
    id: 9,
    title: 'Calculus I',
    professor: 'Prof. Dr. Laura White',
    department: 'Mathematics',
    credits: 6,
    schedule: 'Wed 16:00-17:30',
    room: 'I101',
    description: 'Fundamentals of differential and integral calculus.',
    category: 'Mathematics',
    available: true
  },
  {
    id: 10,
    title: 'Probability and Statistics',
    professor: 'Prof. Dr. Mark Taylor',
    department: 'Mathematics',
    credits: 6,
    schedule: 'Fri 10:00-11:30',
    room: 'J202',
    description: 'Introduction to probability theory and statistical methods.',
    category: 'Mathematics',
    available: true
  },
  {
    id: 11,
    title: 'Discrete Mathematics',
    professor: 'Prof. Dr. Anna Lee',
    department: 'Mathematics',
    credits: 6,
    schedule: 'Mon 12:00-13:30',
    room: 'K301',
    description: 'Study of discrete structures and their applications in computer science.',
    category: 'Mathematics',
    available: true
  },
  {
    id: 12,
    title: 'Advanced Robotics',
    professor: 'Prof. Dr. James Clark',
    department: 'Engineering',
    credits: 6,
    schedule: 'Thu 09:00-10:30',
    room: 'L101',
    description: 'Advanced topics in robotics, including kinematics and control systems.',
    category: 'Engineering',
    available: false
  },
  {
    id: 13,
    title: 'Quantum Computing',
    professor: 'Prof. Dr. Rachel Green',
    department: 'Computer Science',
    credits: 6,
    schedule: 'Wed 14:00-15:30',
    room: 'M201',
    description: 'Introduction to quantum computing and quantum algorithms.',
    category: 'Computer Science',
    available: false
  },
  {
    id: 14,
    title: 'Numerical Methods',
    professor: 'Prof. Dr. Daniel Harris',
    department: 'Mathematics',
    credits: 6,
    schedule: 'Tue 16:00-17:30',
    room: 'N101',
    description: 'Numerical techniques for solving mathematical problems.',
    category: 'Mathematics',
    available: false
  }
];

const displayedCourses = computed(() => {
  return courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         course.professor.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesFilter = activeFilter.value === 'All Courses' || 
                         course.department === activeFilter.value || course.available && activeFilter.value === 'Available'

    return matchesSearch && matchesFilter
  })
})

const setFilter = (filter) => {
  activeFilter.value = filter
}

const enrollCourse = (courseId) => {
  // Implement enrollment logic
  console.log('Enrolling in course:', courseId)
}

const viewCourseDetails = (courseId) => {
  router.push(`/courses/${courseId}`)
}
</script>

<style scoped>
@import '../assets/styles/views/courseListView.css';
</style>