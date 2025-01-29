<template>
  <header class="header">
    <div class="header__top">
      <div class="logo-container">
        <!-- Logo will be added later with proper asset -->
        <div class="text-primary-orange text-2xl font-bold">Space University</div>
      </div>
      <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" placeholder="Search courses, programs, or resources...">
      </div>

      <div class="user-menu">
        <a href="#" class="user-menu__item">
          <i class="far fa-bell"></i>
          <span class="badge">3</span>
        </a>
        <a href="#" class="user-menu__item">
          <i class="far fa-user"></i>
          <span>My Account</span>
        </a>
      </div>
    </div>

    <nav class="header__bottom">
      <div class="nav">
        <div class="nav-item">
          <a href="#" class="nav-link active">
            Dashboard
          </a>
        </div>
        
        <div class="nav-item">
          <a href="#" class="nav-link">
            Courses
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-item">Browse All Courses</a>
            <a href="#" class="dropdown-item">My Enrolled Courses</a>
            <a href="#" class="dropdown-item">Course Calendar</a>
            <a href="#" class="dropdown-item">Course Catalog</a>
          </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            Programs
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-item">Undergraduate</a>
            <a href="#" class="dropdown-item">Graduate</a>
            <a href="#" class="dropdown-item">Certificates</a>
            <a href="#" class="dropdown-item">Professional Development</a>
          </div>
        </div>

        <div class="nav-item">
          <a href="#" class="nav-link">
            Resources
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-item">Academic Calendar</a>
            <a href="#" class="dropdown-item">Library</a>
            <a href="#" class="dropdown-item">Support Center</a>
            <a href="#" class="dropdown-item">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
    @import '../../assets/styles/layout/landing_navbar.css';
</style>