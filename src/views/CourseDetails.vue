<template>
    <div class="course-details">
      <div class="course-header">
        <div class="course-header__top">
          <div>
            <h1 class="course-title">{{ course.title }}</h1>
            <div class="course-code">{{ course.code }}</div>
          </div>
          <span class="course-status">{{ course.status }}</span>
        </div>
        <div class="course-meta">
          <div class="meta-item">
            <span>Credits: {{ course.credits }} ECTS</span>
          </div>
          <div class="meta-item">
            <span>Semester: {{ course.semester }}</span>
          </div>
          <div class="meta-item">
            <span>Department: {{ course.department }}</span>
          </div>
        </div>
      </div>
  
      <div class="course-content">
        <!-- Left Column -->
        <div class="main-content">
          <section class="content-section">
            <h2 class="section-title">Course Description</h2>
            <div class="section-content">
              <p>{{ course.description }}</p>
              <h3 class="section-title">Learning Objectives</h3>
              <ul class="content-list">
                <li v-for="objective in course.learningObjectives" :key="objective">{{ objective }}</li>
              </ul>
            </div>
          </section>
  
          <section class="content-section">
            <h2 class="section-title">Instructor</h2>
            <div class="instructor-profile">
              <div class="instructor-avatar">{{ course.instructor.initials }}</div>
              <div class="instructor-info">
                <h3>{{ course.instructor.name }}</h3>
                <p>{{ course.instructor.title }}</p>
                <p>Office: {{ course.instructor.office }}</p>
                <p>Email: {{ course.instructor.email }}</p>
              </div>
            </div>
          </section>
        </div>
  
        <!-- Right Column -->
        <div class="sidebar-content">
          <section class="content-section">
            <h2 class="section-title">Schedule & Location</h2>
            <div class="schedule-grid">
              <div class="schedule-item" v-for="schedule in course.schedules" :key="schedule.day">
                <div class="schedule-day">{{ schedule.day }}</div>
                <div class="schedule-time" v-for="time in schedule.times" :key="time">{{ time }}</div>
              </div>
            </div>
  
            <div class="room-info">
              <h3>Room Location</h3>
              <p>{{ course.room }}</p>
              <div class="room-map">
                <img :src="course.mapImage" alt="Campus Map" style="max-width: 100%; height: auto; border-radius: 8px;">
              </div>
            </div>
          </section>
  
          <div class="enrollment-section">
            <div class="enrollment-status">
              <strong>{{ course.enrollment.remaining }}/{{ course.enrollment.total }}</strong> spots remaining
            </div>
            <button class="enroll-btn" @click="enrollCourse">Enroll in Course</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Dane kursu
  const course = ref({
    title: 'Human-Computer Interaction',
    code: 'CS-HCI-301',
    status: 'Enrollment Open',
    credits: 6,
    semester: 'Winter 2024/25',
    department: 'Computer Science',
    description: 'This course introduces students to the fundamental principles and practices of Human-Computer Interaction (HCI). Topics covered include user-centered design, usability evaluation methods, interaction design patterns, and contemporary HCI research areas.',
    learningObjectives: [
      'Understand core HCI principles and theories',
      'Apply user-centered design methods',
      'Conduct usability evaluations',
      'Design and prototype interactive systems',
    ],
    instructor: {
      initials: 'BW',
      name: 'Prof. Dr. Benjamin Weyers',
      title: 'Professor of Human-Computer Interaction',
      office: 'H441',
      email: 'b.weyers@space-university.edu',
    },
    schedules: [
      {
        day: 'Monday',
        times: ['14:00 - 15:30'],
      },
      {
        day: 'Thursday',
        times: ['13:00 - 14:00', 'Office Hours'],
      },
    ],
    room: 'Building H, Room 441',
    mapImage: '/images/uni_plan.png',
    enrollment: {
      remaining: 20,
      total: 30,
    },
  });
  
  // Funkcja do zapisywania się na kurs
  const enrollCourse = () => {
    if (course.value.enrollment.remaining > 0) {
      course.value.enrollment.remaining--;
      alert('You have successfully enrolled in the course!');
    } else {
      alert('Sorry, the course is full.');
    }
  };
  </script>
  
  <style scoped>
  @import '../assets/styles/views/course_details.css';
  @import '';
  </style>