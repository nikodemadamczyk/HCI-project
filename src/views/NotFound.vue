<template>
    <div class="min-h-screen flex items-center justify-center bg-light-gray px-4">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-primary-navy mb-4">404</h1>
        <p class="text-xl text-text-gray mb-8">Page not found</p>
        <router-link 
          to="/" 
          class="inline-flex items-center px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-light-orange transition-colors"
        >
          <i class="fas fa-home mr-2"></i>
          Back to Home
        </router-link>
      </div>
    </div>
</template>