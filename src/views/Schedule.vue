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
          <button class="btn btn-secondary" @click="toggleRoomFinder">
            <i class="fas fa-map-marker-alt"></i>
            Room Finder
          </button>
          <button class="btn btn-secondary" @click="goToToday">
            <i class="fas fa-clock"></i>
            Today
          </button>
        </div>
      </div>
  
      <div v-if="showRoomFinderModal" class="room-finder-modal">
        <div class="room-finder-content">
          <h2>Room Finder</h2>
          <input 
            type="text" 
            v-model="roomSearchQuery" 
            placeholder="Search for a room..."
            class="room-search-input"
          >
          <div class="room-list">
            <div 
              v-for="room in filteredRooms" 
              :key="room.number"
              class="room-item"
              @click="selectRoom(room)"
            >
              <span>{{ room.building }} - {{ room.number }}</span>
              <span>{{ room.capacity }} seats</span>
            </div>
          </div>
          <button class="btn btn-secondary" @click="toggleRoomFinder">Close</button>
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
                v-for="time in timeSlots.slice(0, timeSlots.length - 4)"
                :key="time"
                class="schedule-cell"
              >
                <div
                  v-if="getCourseForTimeSlot(day, time)"
                  :class="['course-block', `type-${getCourseForTimeSlot(day, time).type}`]"
                  @click="selectCourse(getCourseForTimeSlot(day, time))"
                >
                  <div class="course-name">{{ getCourseForTimeSlot(day, time).title }}</div>
                  <div class="course-details">{{ getCourseForTimeSlot(day, time).professor }}</div>
                  <div class="course-room">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ getCourseForTimeSlot(day, time).roomNumber }}
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
  
      <div v-if="selectedRoom" class="room-details">
        <div class="room-map">
          <img src="@/assets/images/uni_plan_2.png" alt="Campus Plan" />
        </div>
        <div class="room-info">
          <div class="info-item">
            <div class="info-label">Capacity</div>
            <div class="info-value">{{ selectedRoom.capacity }} Students</div>
          </div>
          <div class="info-item">
            <div class="info-label">Amenities</div>
            <div class="info-value">{{ selectedRoom.amenities.join(', ') }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Building</div>
            <div class="info-value">{{ selectedRoom.building }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Room Number</div>
            <div class="info-value">{{ selectedRoom.number }}</div>
          </div>
          <div v-if="selectedRoom.currentCourse" class="info-item">
            <div class="info-label">Current Course</div>
            <div class="info-value">{{ selectedRoom.currentCourse }}</div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useCourseStore } from '@/stores/courseStore'
  
  const courseStore = useCourseStore()
  
  const selectedWeek = ref(getCurrentWeekString())
  const currentSemester = computed(() => {
    const [year, week] = selectedWeek.value.split('-W')
    return `${getSemesterName(week)} Semester ${year}`
  })
  const showRoomFinderModal = ref(false)
  const roomSearchQuery = ref('')
  
  function getSemesterName(weekNum) {
    const week = parseInt(weekNum)
    if ((week >= 1 && week <= 8) || (week >= 35 && week <= 52) ) return 'Winter'
    return 'Summer'
  }

  const timeSlots = [
    '8:00', '9:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ]
  
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  const sampleCourses = [
  {
    id: 1,
    title: 'HCI',
    professor: 'Prof. Dr. Benjamin Weyers',
    room: {
      number: 'H441',
      building: 'Science Building, Floor 4',
      capacity: 40,
      amenities: ['Projector', 'Whiteboard', 'Computer']
    },
    type: 'lecture',
    day: 'Monday',
    time: '14:00'
  },
  {
    id: 2,
    title: 'UI Design Seminar',
    professor: 'Dr. Smith',
    room: {
      number: 'B301',
      building: 'Technology Building, Floor 3',
      capacity: 30,
      amenities: ['Whiteboard', 'Smart TV']
    },
    type: 'seminar',
    day: 'Monday',
    time: '16:00'
  },
  {
    id: 3,
    title: 'Interactive Systems Lab',
    professor: 'Dr. Thompson',
    room: {
      number: 'C204',
      building: 'Engineering Building, Floor 2',
      capacity: 28,
      amenities: ['Lab Equipment', 'Computers', 'Smart Board']
    },
    type: 'lab',
    day: 'Tuesday',
    time: '11:00'
  },
  {
    id: 4,
    title: 'Artificial Intelligence',
    professor: 'Prof. Dr. Nguyen',
    room: {
      number: 'D112',
      building: 'Computer Science Building, Floor 1',
      capacity: 45,
      amenities: ['Projector', 'Whiteboard', 'GPU Workstations']
    },
    type: 'lecture',
    day: 'Wednesday',
    time: '12:00'
  },
  {
    id: 5,
    title: 'Ethics in Technology',
    professor: 'Dr. Patel',
    room: {
      number: 'E303',
      building: 'Humanities Building, Floor 3',
      capacity: 35,
      amenities: ['Projector', 'Circular Seating', 'Audio System']
    },
    type: 'seminar',
    day: 'Thursday',
    time: '10:00'
  },
  {
    id: 6,
    title: 'Computer Networks',
    professor: 'Prof. Dr. Lee',
    room: {
      number: 'F104',
      building: 'Networks Lab Building, Floor 1',
      capacity: 32,
      amenities: ['Network Equipment', 'Workstations', 'Server Rack']
    },
    type: 'lecture',
    day: 'Friday',
    time: '9:00'
  }
]

  const selectedRoom = ref(null)
  
  function getCurrentWeekString() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    return `${year}-W${getWeekNumber(now)}`
  }
  
  function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7))
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1))
    const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
    return String(weekNo).padStart(2, '0')
  }
  
  const filteredRooms = computed(() => {
  if (!roomSearchQuery.value) return sampleCourses.map(course => course.room)
  const query = roomSearchQuery.value.toLowerCase()
  return sampleCourses
    .map(course => course.room)
    .filter(room => 
      room.number.toLowerCase().includes(query) ||
      room.building.toLowerCase().includes(query)
    )
})
  
  const getCourseType = (courseTitle) => {
    if (courseTitle.toLowerCase().includes('lab')) return 'lab'
    if (courseTitle.toLowerCase().includes('seminar')) return 'seminar'
    return 'lecture'
  }
  
  const courseSchedule = computed(() => {
  const schedule = new Map()
  
  sampleCourses.forEach(course => {
        const key = `${course.day} ${course.time}`
        schedule.set(key, {
        ...course,
        type: course.type
        })
    })
    
    return schedule
    })
  
const getCourseForTimeSlot = (day, time) => {
  const scheduleKey = `${day} ${time}`
  const course = courseSchedule.value.get(scheduleKey)
  if (course) {
    return {
      ...course,
      roomNumber: course.room.number // dla wyświetlania w siatce
    }
  }
  return null
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
  function updateWeek() {
    const [year, week] = selectedWeek.value.split('-W')
    const startDate = getDateOfISOWeek(parseInt(week), parseInt(year))
    const endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 4)

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric' 
        })
    }

    const semesterDates = `(${formatDate(startDate)} - ${formatDate(endDate)})`
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
  
  function toggleRoomFinder() {
    showRoomFinderModal.value = !showRoomFinderModal.value
    roomSearchQuery.value = ''
  }
  
  function selectRoom(room) {
    selectedRoom.value = room
    showRoomFinderModal.value = false
  }
  
  function selectCourse(course) {
  if (!course) return
  selectedRoom.value = {
    ...course.room,
    currentCourse: course.title
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