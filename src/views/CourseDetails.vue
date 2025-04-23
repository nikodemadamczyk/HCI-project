<template>
    <div v-if="course" class="course-details">
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
                            <img src="../assets/images/uni_plan.png" alt="Room Map">
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
    <div v-else>
        <p>Course not found</p>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useCourseStore } from '@/stores/courseStore';

    const route = useRoute();
    const courseStore = useCourseStore();

    const course = computed(() => {
        return courseStore.getCourseById(route.params.id);
    });

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
</style>