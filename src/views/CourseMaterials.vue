# src/views/CourseMaterials.vue
<template>
  <div class="container max-w-4xl mx-auto px-8 py-8">
    <div class="bg-white rounded-xl shadow-sm">
      <div class="border-b border-border-gray p-6">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-semibold text-primary-navy">{{ courseData.title }}</h1>
            <p class="text-text-gray mt-1">Course Materials</p>
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
          <input 
            type="file" 
            ref="fileInput"
            class="hidden"
            @change="handleFileChange"
          >
          <button 
            class="btn btn-primary"
            @click="$refs.fileInput.click()"
          >
            <i class="fas fa-upload mr-2"></i>
            Upload Materials
          </button>
        </div>
      </div>

      <div class="p-6">
        <div class="space-y-4">
          <div 
            v-for="material in materials" 
            :key="material.id"
            class="flex items-center justify-between p-4 border border-border-gray rounded-lg"
          >
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center">
                <i :class="getFileIcon(material.type)"></i>
              </div>
              <div>
                <h3 class="font-medium text-primary-navy">{{ material.name }}</h3>
                <p class="text-sm text-text-gray">{{ material.size }} • {{ material.uploadedAt }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button 
                class="icon-btn"
                @click="downloadMaterial(material)"
              >
                <i class="fas fa-download"></i>
              </button>
              <button 
                class="icon-btn text-error-red"
                @click="deleteMaterial(material.id)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>

        <div 
          v-if="materials.length === 0" 
          class="text-center py-12"
        >
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-orange/10 text-primary-orange flex items-center justify-center">
            <i class="fas fa-file-upload text-2xl"></i>
          </div>
          <h3 class="text-lg font-medium text-primary-navy mb-2">No Materials Yet</h3>
          <p class="text-text-gray">Upload course materials to get started</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const fileInput = ref(null)

const courseData = ref({
  id: '',
  title: 'Human-Computer Interaction'
})

const materials = ref([
  {
    id: 1,
    name: 'Lecture 1 - Introduction to HCI.pdf',
    type: 'pdf',
    size: '2.5 MB',
    uploadedAt: '2025-01-15'
  },
  {
    id: 2,
    name: 'Week 1 - Tutorial Materials.zip',
    type: 'zip',
    size: '15.2 MB',
    uploadedAt: '2025-01-15'
  },
  {
    id: 3,
    name: 'Assignment 1 - Requirements.docx',
    type: 'doc',
    size: '524 KB',
    uploadedAt: '2025-01-16'
  }
])

const getFileIcon = (type) => {
  const icons = {
    pdf: 'fas fa-file-pdf',
    doc: 'fas fa-file-word',
    zip: 'fas fa-file-archive',
    default: 'fas fa-file'
  }
  return icons[type] || icons.default
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    console.log('Uploading file:', file)
    
    const newMaterial = {
      id: materials.value.length + 1,
      name: file.name,
      type: file.name.split('.').pop(),
      size: `${(file.size / 1024).toFixed(1)} KB`,
      uploadedAt: new Date().toISOString().split('T')[0]
    }
    materials.value.unshift(newMaterial)
  }
}

const downloadMaterial = (material) => {
  console.log('Downloading:', material.name)
}

const deleteMaterial = async (materialId) => {
  if (confirm('Are you sure you want to delete this material?')) {
    try {
      // Tutaj normalnie byłoby zapytanie do API
      materials.value = materials.value.filter(m => m.id !== materialId)
    } catch (error) {
      console.error('Error deleting material:', error)
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
.icon-btn {
  @apply p-2 rounded-lg text-text-gray hover:bg-light-gray transition-colors;
}
</style>