<template>
    <div class="course-card">
      <div class="course-card__header">
        <div>
          <h3 class="course-card__title">{{ course.title }}</h3>
          <p class="course-card__professor">{{ course.professor }}</p>
        </div>
        <span class="course-card__badge">{{ course.status }}</span>
      </div>
      <div class="course-card__info">
        <div class="course-card__detail">
          <strong>Room:</strong> {{ course.room.number }}
        </div>
        <div class="course-card__detail">
          <strong>Time:</strong> {{ formatSchedule(course.schedule) }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    course: {
      type: Object,
      required: true
    }
  })
  
  const formatSchedule = (schedule) => {
    // Przykładowa funkcja formatująca harmonogram
    return schedule
  }
  </script>
  
  <style scoped>
  .course-card {
    @apply bg-primary-white rounded-xl p-6 shadow-sm border border-border-gray;
  }
  
  .course-card__header {
    @apply flex justify-between items-start mb-4;
  }
  
  .course-card__title {
    @apply text-lg font-semibold text-primary-navy mb-1;
  }
  
  .course-card__professor {
    @apply text-sm text-text-gray;
  }
  
  .course-card__badge {
    @apply px-3 py-1 bg-primary-orange/10 text-primary-orange text-sm font-medium rounded-full;
  }
  
  .course-card__info {
    @apply grid grid-cols-2 gap-4 pt-4 border-t border-border-gray;
  }
  
  .course-card__detail {
    @apply text-sm text-text-gray;
  }
  
  .course-card__detail strong {
    @apply text-primary-navy;
  }
  </style>