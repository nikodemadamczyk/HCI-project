<template>
  <main class="schedule-container">
    <div class="schedule-header">
      <div class="semester-info">
        <h1>Course Schedule</h1>
        <p>{{ currentSemester }}</p>
      </div>
      <div class="schedule-navigation">
        <button class="btn btn-secondary" @click="previousWeek">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="date-selector">
          <input type="week" v-model="selectedWeek" @change="updateWeek" class="week-input">
        </div>
        <button class="btn btn-secondary" @click="nextWeek">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="schedule-controls">
        <button class="btn btn-secondary" @click="goToToday">
          <i class="fas fa-clock"></i>
          Today
        </button>
      </div>
    </div>

    <div class="schedule-grid-container">
      <div class="time-slots">
        <div
          v-for="time in timeSlots"
          :key="time"
          class="time-slot"
        >
          {{ time }}
        </div>
      </div>

      <div class="schedule-grid">
        <div
          v-for="day in weekDays"
          :key="day"
          class="day-header"
        >
          {{ day }}
        </div>

        <template v-for="day in weekDays" :key="day">
          <div class="schedule-column">
            <div
              v-for="time in timeSlots"
              :key="time"
              class="schedule-cell"
            >
              <div
                v-if="getEnrolledCourseForTimeSlot(day, time)"
                class="course-block"
                @click="selectCourse(getEnrolledCourseForTimeSlot(day, time))"
              >
                <div class="course-name">{{ getEnrolledCourseForTimeSlot(day, time).title }}</div>
                <div class="course-details">
                  <div class="course-room">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ getEnrolledCourseForTimeSlot(day, time).room }}
                  </div>
                  <div class="course-professor">
                    <i class="fas fa-user"></i>
                    {{ getEnrolledCourseForTimeSlot(day, time).professor }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
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

const selectedWeek = ref(getCurrentWeekString())
const currentSemester = computed(() => {
  return 'Winter Semester 2024/25'
})

const timeSlots = [
  '8:00', '9:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
]

// Convert 'Monday' to 'Mon' etc.
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

// Pobierz kursy użytkownika
const userCourses = computed(() => {
  return courseStore.getUserCourses(authStore.user?.id) || []
})

// Helper function to convert time to slot format
const timeToSlot = (timeString) => {
  return timeString.split(':')[0] + ':00'
}

const getDayAbbreviation = (fullDay) => {
  const days = {
    'Monday': 'Mon',
    'Tuesday': 'Tue',
    'Wednesday': 'Wed',
    'Thursday': 'Thu',
    'Friday': 'Fri'
  }
  return days[fullDay]
}

const getEnrolledCourseForTimeSlot = (day, time) => {
  return userCourses.value.find(course => {
    if (!course.schedule) return false
    
    const [courseDay, courseTimeRange] = course.schedule.split(' ')
    const [startTime] = courseTimeRange.split('-')
    
    const slotTime = timeToSlot(time)
    const courseSlotTime = timeToSlot(startTime)
    
    return courseDay === getDayAbbreviation(day) && courseSlotTime === slotTime
  })
}

function getCurrentWeekString() {
  const now = new Date()
  const year = now.getFullYear()
  return `${year}-W${getWeekNumber(now)}`
}

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1))
  const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
  return String(weekNo).padStart(2, '0')
}

function updateWeek() {
  const [year, week] = selectedWeek.value.split('-W')
  const startDate = getDateOfISOWeek(parseInt(week), parseInt(year))
  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + 4)
}

function getDateOfISOWeek(week, year) {
  const simple = new Date(year, 0, 1 + (week - 1) * 7)
  const dayOfWeek = simple.getDay()
  const ISOweekStart = simple
  if (dayOfWeek <= 4)
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1)
  else
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay())
  return ISOweekStart
}

function previousWeek() {
  const [year, week] = selectedWeek.value.split('-W').map(Number)
  if (week === 1) {
    selectedWeek.value = `${year-1}-W52`
  } else {
    selectedWeek.value = `${year}-W${String(week-1).padStart(2, '0')}`
  }
  updateWeek()
}

function nextWeek() {
  const [year, week] = selectedWeek.value.split('-W').map(Number)
  if (week === 52) {
    selectedWeek.value = `${year+1}-W01`
  } else {
    selectedWeek.value = `${year}-W${String(week+1).padStart(2, '0')}`
  }
  updateWeek()
}

function selectCourse(course) {
  if (course) {
    router.push(`/courses/${course.id}`)
  }
}

function goToToday() {
  selectedWeek.value = getCurrentWeekString()
  updateWeek()
}
</script>

<style scoped>
    @import '@/assets/styles/views/schedule.css';
</style>