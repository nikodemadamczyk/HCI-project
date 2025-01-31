<template>
    <div class="schedule">
      <div class="schedule-grid">
        <div class="schedule-header"></div>
        <div 
          v-for="day in weekDays" 
          :key="day" 
          class="schedule-header"
        >
          {{ day }}
        </div>
  
        <template v-for="time in timeSlots" :key="time">
          <div class="schedule-time">{{ time }}</div>
          <div 
            v-for="day in weekDays" 
            :key="`${day}-${time}`" 
            class="schedule-cell"
          >
            <div 
              v-if="getEventForTimeSlot(day, time)"
              class="schedule-event"
            >
              {{ getEventForTimeSlot(day, time).title }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    courses: {
      type: Array,
      required: true
    }
  })
  
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const timeSlots = ['09:00', '11:00', '13:00', '15:00']
  
  const getEventForTimeSlot = (day, time) => {
    return props.courses.find(course => {
      const [courseDay, courseTime] = course.schedule.split(' ')
      return courseDay === day && courseTime === time
    })
  }
  </script>
  
  <style scoped>
  .schedule {
    @apply bg-primary-white rounded-xl p-6 shadow-sm border border-border-gray;
  }
  
  .schedule-grid {
    @apply grid grid-cols-6 gap-px bg-border-gray rounded-lg overflow-hidden;
  }
  
  .schedule-header {
    @apply bg-primary-navy text-primary-white p-3 text-center font-medium text-sm;
  }
  
  .schedule-time {
    @apply bg-light-gray text-text-gray p-3 text-sm text-right;
  }
  
  .schedule-cell {
    @apply bg-primary-white p-2 min-h-[80px];
  }
  
  .schedule-event {
    @apply bg-primary-orange/10 text-primary-orange p-2 rounded text-sm font-medium;
  }
  </style>