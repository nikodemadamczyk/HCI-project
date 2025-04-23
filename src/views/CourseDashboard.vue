<template>
    <main class="dashboard">
      <div class="dashboard-grid">
        <div class="dashboard-main">
          <div class="flex justify-between items-center mb-6">
            <h2 class="section-title">My Courses</h2>
            <button 
              class="btn btn-primary"
              @click="$router.push('/courses')"
            >
              <i class="fas fa-plus mr-2"></i>
              Add New Course
            </button>
          </div>
          <div class="course-cards">
            <div 
              v-for="course in userCourses" 
              :key="course.id"
              class="bg-white rounded-xl p-6 shadow-sm border border-border-gray hover:shadow-md transition-all cursor-pointer"
              @click="goToMoodle(course)"
            >
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-lg font-semibold text-primary-navy mb-1">{{ course.title }}</h3>
                  <p class="text-sm text-text-gray">{{ course.professor }}</p>
                </div>
                <span class="px-3 py-1 bg-primary-orange/10 text-primary-orange text-sm font-medium rounded-full">
                  {{ course.status }}
                </span>
              </div>
              <div class="grid grid-cols-2 gap-4 pt-4 border-t border-border-gray">
                <div class="text-sm text-text-gray">
                  <strong class="text-primary-navy">Room:</strong> {{ course.room }}
                </div>
                <div class="text-sm text-text-gray">
                  <strong class="text-primary-navy">Time:</strong> {{ course.schedule }}
                </div>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <a 
                  href="https://moodle.uni-trier.de/" 
                  target="_blank"
                  class="text-primary-orange hover:underline text-sm inline-flex items-center gap-2"
                  @click.stop
                >
                  <i class="fas fa-external-link-alt"></i>
                  Open in Moodle
                </a>
                <div>
                  <button 
                    class=" text-sm hover:underline"  style="padding-right: 15px"
                  >
                    Register for exam     
                  </button>
                
                  <button 
                    class="text-error-red text-sm hover:underline"
                    @click.stop="unenrollFromCourse(course)"
                  >
                    Unenroll
                  </button>
                </div>
                <!-- <button 
                  class=" text-sm hover:underline"
                >
                  Register for exam
                </button>
                <button 
                  class="text-error-red text-sm hover:underline"
                  @click.stop="unenrollFromCourse(course)"
                >
                  Unenroll
                </button> -->
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Column -->
        <div class="dashboard-sidebar">
        <div class="container_schedule">
          <h2 class="section-title mb-4">Weekly Schedule</h2>
          <div class="bg-white rounded-xl p-6 shadow-sm border border-border-gray">
            <div class="text-text-gray mb-4">
              View your complete weekly schedule with detailed information about your courses.
            </div>
            <button 
              @click="$router.push('/schedule')" 
              class="w-full px-4 py-3 bg-primary-orange text-white rounded-lg hover:bg-light-orange transition-colors flex items-center justify-center gap-2"
            >
              <i class="fas fa-calendar-alt"></i>
              View Full Schedule
            </button>
          </div>
        </div>
        <div class="container_map mt-8">
          <h2 class="section-title">Campus Map</h2>
          <div class="room-map">
            <div class="map-placeholder bg-white rounded-lg overflow-hidden">
              <img 
                src="@/assets/images/uni_plan.png" 
                alt="Campus Map" 
                class="w-full h-auto"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useCourseStore } from '@/stores/courseStore'
  import { useAuthStore } from '@/stores/authStore'

  
  const courseStore = useCourseStore()
  const authStore = useAuthStore()
  
  const userCourses = computed(() => {
    return courseStore.getUserCourses(authStore.user?.id)
  })
  
  const goToMoodle = (course) => {
    window.open('https://moodle.uni-trier.de/', '_blank')
  }
  
  const unenrollFromCourse = async (course) => {
    if (confirm(`Are you sure you want to unenroll from ${course.title}?`)) {
      try {
        await courseStore.unenrollCourse(authStore.user?.id, course.id)
      } catch (error) {
        alert(error.message)
      }
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    @apply px-8 py-8;
  }
  
  .dashboard-grid {
    @apply grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto;
  }
  
  .dashboard-main {
    @apply lg:col-span-2;
  }
  
  .section-title {
    @apply text-2xl font-semibold text-primary-navy;
  }
  
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors;
  }
  
  .btn-primary {
    @apply bg-primary-orange text-white hover:bg-light-orange;
  }
  </style>