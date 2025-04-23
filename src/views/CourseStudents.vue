# src/views/CourseStudents.vue
<template>
  <div class="container max-w-4xl mx-auto px-8 py-8">
    <div class="bg-white rounded-xl shadow-sm">
      <div class="border-b border-border-gray p-6">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-semibold text-primary-navy">{{ courseData.title }}</h1>
            <p class="text-text-gray mt-1">Enrolled Students: {{ students.length }}</p>
          </div>
          <button 
            class="btn btn-secondary"
            @click="$router.back()"
          >
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Dashboard
          </button>
        </div>
      </div>

      <div class="p-6 border-b border-border-gray">
        <div class="flex gap-4">
          <div class="flex-1">
            <div class="relative">
              <input 
                type="text" 
                v-model="searchQuery"
                placeholder="Search students..." 
                class="form-input pl-10"
              >
              <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-text-gray"></i>
            </div>
          </div>
          <select v-model="filterStatus" class="form-select">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div class="p-6">
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="border-b border-border-gray">
                <th class="text-left py-4 px-4 text-sm font-medium text-primary-navy">Student Name</th>
                <th class="text-left py-4 px-4 text-sm font-medium text-primary-navy">Student ID</th>
                <th class="text-left py-4 px-4 text-sm font-medium text-primary-navy">Email</th>
                <th class="text-left py-4 px-4 text-sm font-medium text-primary-navy">Status</th>
                <th class="text-right py-4 px-4 text-sm font-medium text-primary-navy">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="student in filteredStudents" 
                :key="student.id"
                class="border-b border-border-gray last:border-b-0"
              >
                <td class="py-4 px-4">
                  <div class="flex items-center">
                    <div class="w-8 h-8 rounded-full bg-primary-orange/10 text-primary-orange flex items-center justify-center text-sm font-medium mr-3">
                      {{ getInitials(student.name) }}
                    </div>
                    <span class="font-medium text-primary-navy">{{ student.name }}</span>
                  </div>
                </td>
                <td class="py-4 px-4 text-text-gray">{{ student.studentId }}</td>
                <td class="py-4 px-4 text-text-gray">{{ student.email }}</td>
                <td class="py-4 px-4">
                  <span 
                    class="px-2 py-1 rounded-full text-xs font-medium"
                    :class="student.status === 'active' ? 'bg-success-green/10 text-success-green' : 'bg-error-red/10 text-error-red'"
                  >
                    {{ student.status }}
                  </span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex justify-end gap-2">
                    <button 
                      class="icon-btn"
                      @click="viewStudentDetails(student.id)"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <button 
                      class="icon-btn text-error-red"
                      @click="removeStudent(student.id)"
                    >
                      <i class="fas fa-user-minus"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const courseData = ref({
  id: '',
  title: 'Human-Computer Interaction'
})

const searchQuery = ref('')
const filterStatus = ref('')

const students = ref([
  {
    id: 1,
    name: 'John Doe',
    studentId: 'ST2024001',
    email: 'john.doe@student.space-university.edu',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    studentId: 'ST2024002',
    email: 'jane.smith@student.space-university.edu',
    status: 'active'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    studentId: 'ST2024003',
    email: 'michael.johnson@student.space-university.edu',
    status: 'inactive'
  }
])

const filteredStudents = computed(() => {
  return students.value.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesStatus = !filterStatus.value || student.status === filterStatus.value
    
    return matchesSearch && matchesStatus
  })
})

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('')
}

const viewStudentDetails = (studentId) => {
  router.push(`/students/${studentId}`)
}

const removeStudent = async (studentId) => {
  if (confirm('Are you sure you want to remove this student from the course?')) {
    try {
      students.value = students.value.filter(s => s.id !== studentId)
    } catch (error) {
      console.error('Error removing student:', error)
    }
  }
}

onMounted(() => {
  if (route.params.id) {
    courseData.value.id = route.params.id
  }
})
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-2 border border-border-gray rounded-lg focus:outline-none focus:border-primary-orange transition-colors;
}

.form-select {
  @apply px-4 py-2 border border-border-gray rounded-lg focus:outline-none focus:border-primary-orange transition-colors;
}

.icon-btn {
  @apply p-2 rounded-lg text-text-gray hover:bg-light-gray transition-colors;
}
</style>