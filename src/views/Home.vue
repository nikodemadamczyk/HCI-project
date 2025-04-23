
<template>
  <section class="hero">
    <div class="decorative-element decorative-1"></div>
    <div class="decorative-element decorative-2"></div>

    <div class="hero__content">
      <div class="semester-indicator">
        <i class="fas fa-calendar-alt"></i>
        Spring Semester 2025
      </div>
      
      <h1 class="hero__title">Welcome to the Space University Course Management System</h1>
      <p class="hero__subtitle">Access your academic journey through our comprehensive course management platform. Register for classes, view your schedule, and track your academic progress.</p>
    <div class="hero__cta">
      <router-link to="/auth" class="btn btn-primary">
        <i class="fas fa-user"></i>
        Login to System
      </router-link>
      <router-link to="/auth" class="btn btn-secondary">
        <i class="fas fa-user-plus"></i>
        New Registration
      </router-link>
    </div>

      <div class="quick-links">
        <router-link to="/courses" class="quick-link">
          <i class="fas fa-book-open quick-link__icon"></i>
          <span class="quick-link__text">Course Catalog</span>
        </router-link>
        <router-link to="/schedule" class="quick-link">
          <i class="fas fa-calendar-check quick-link__icon"></i>
          <span class="quick-link__text">Class Schedule</span>
        </router-link>
        <a href="#" class="quick-link">
          <i class="fas fa-graduation-cap quick-link__icon"></i>
          <span class="quick-link__text">Academic Records</span>
        </a>
        <a href="#" class="quick-link">
          <i class="fas fa-question-circle quick-link__icon"></i>
          <span class="quick-link__text">Registration Help</span>
        </a>
      </div>

      <div class="stats">
        <div class="stat">
          <div class="stat__number">5,000+</div>
          <div class="stat__label">Active Students</div>
        </div>
        <div class="stat">
          <div class="stat__number">300+</div>
          <div class="stat__label">Courses</div>
        </div>
        <div class="stat">
          <div class="stat__number">98%</div>
          <div class="stat__label">Success Rate</div>
        </div>
      </div>
    </div>

    <div class="hero__academic-info">
      <h2 class="section-title">Important Academic Dates</h2>
      <div class="academic-calendar">
        <div class="calendar-item">
          <div class="calendar-date">
            <div class="calendar-date__day">15</div>
            <div class="calendar-date__month">Jan</div>
          </div>
          <div class="calendar-info">
            <div class="calendar-info__title">Spring Semester Begins</div>
            <div class="calendar-info__desc">First day of classes for Spring 2025</div>
          </div>
        </div>
        
        <div class="calendar-item">
          <div class="calendar-date">
            <div class="calendar-date__day">22</div>
            <div class="calendar-date__month">Jan</div>
          </div>
          <div class="calendar-info">
            <div class="calendar-info__title">Add/Drop Deadline</div>
            <div class="calendar-info__desc">Last day to modify course schedule without penalty</div>
          </div>
        </div>
        
        <div class="calendar-item">
          <div class="calendar-date">
            <div class="calendar-date__day">01</div>
            <div class="calendar-date__month">Feb</div>
          </div>
          <div class="calendar-info">
            <div class="calendar-info__title">Registration Opens</div>
            <div class="calendar-info__desc">Summer 2025 course registration begins</div>
          </div>
        </div>
        
        <div class="calendar-item">
          <div class="calendar-date">
            <div class="calendar-date__day">15</div>
            <div class="calendar-date__month">Mar</div>
          </div>
          <div class="calendar-info">
            <div class="calendar-info__title">Mid-Term Week</div>
            <div class="calendar-info__desc">Mid-semester examinations begin</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="features">
    <div class="features__container">
      <div class="section-header">
        <div class="section-subtitle">System Features</div>
        <h2 class="section-title">Streamlined Academic Management</h2>
        <p class="section-description">Experience our comprehensive suite of tools designed to enhance your academic journey at Space University.</p>
      </div>

      <div class="features-grid">
        <!-- Interactive Class Schedule -->
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-calendar-week"></i>
          </div>
          <h3 class="feature-title">Interactive Class Schedule</h3>
          <p class="feature-description">Dynamic scheduling interface with customizable views and real-time updates for your academic timetable.</p>
          <div class="feature-highlights">
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Weekly/Monthly Views
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Calendar Sync
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Conflict Detection
            </span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-door-open"></i>
          </div>
          <h3 class="feature-title">Smart Room Allocation</h3>
          <p class="feature-description">Efficient room management system with interactive maps and real-time availability tracking.</p>
          <div class="feature-highlights">
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Real-time Availability
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Capacity Planning
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Equipment Info
            </span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-map-marked-alt"></i>
          </div>
          <h3 class="feature-title">Interactive Campus Map</h3>
          <p class="feature-description">Navigate campus efficiently with our interactive map featuring building locations and optimal routes.</p>
          <div class="feature-highlights">
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              3D Building View
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Route Planning
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Location Services
            </span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-user-graduate"></i>
          </div>
          <h3 class="feature-title">Registration Progress</h3>
          <p class="feature-description">Track your registration status, course requirements, and enrollment progress in real-time.</p>
          <div class="feature-highlights">
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Status Tracking
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Requirement Check
            </span>
            <span class="feature-highlight">
              <i class="fas fa-check-circle"></i>
              Progress Alerts
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="resources">
        <div class="resources__container">
            <div class="section-header">
                <div class="section-subtitle">University Resources</div>
                <h2 class="section-title">Essential Academic Resources</h2>
                <p class="section-description">Access comprehensive information about campus facilities, departments, and academic schedules.</p>
            </div>

            <div class="resources-grid">
                <div class="resource-card">
                    <div class="resource-header">
                        <div class="resource-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <div class="resource-title-group">
                            <h3 class="resource-title">Campus Buildings & Rooms</h3>
                            <p class="resource-subtitle">Facility Information System</p>
                        </div>
                    </div>
                    
                    <p class="resource-description">Comprehensive database of campus facilities, including classrooms, laboratories, and study spaces.</p>
                    
                    <div class="resource-access">
                        <i class="fas fa-universal-access"></i>
                        <span>Available to all registered users</span>
                    </div>

                    <div class="resource-links">
                        <a href="#" class="resource-link">
                            <i class="fas fa-search"></i>
                            <span class="resource-link__text">Search Facilities</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-map-marker-alt"></i>
                            <span class="resource-link__text">Interactive Map</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-calendar-check"></i>
                            <span class="resource-link__text">Room Availability</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                    </div>

                    <div class="integration-hint">
                        <i class="fas fa-link"></i>
                        Integrates with Class Schedule
                    </div>
                </div>

                <div class="resource-card">
                    <div class="resource-header">
                        <div class="resource-icon">
                            <i class="fas fa-sitemap"></i>
                        </div>
                        <div class="resource-title-group">
                            <h3 class="resource-title">Department Directory</h3>
                            <p class="resource-subtitle">Academic Departments & Programs</p>
                        </div>
                    </div>
                    
                    <p class="resource-description">Complete listing of academic departments, programs, and administrative offices with contact information.</p>
                    
                    <div class="resource-access">
                        <i class="fas fa-globe"></i>
                        <span>Public Access</span>
                    </div>

                    <div class="resource-links">
                        <a href="#" class="resource-link">
                            <i class="fas fa-university"></i>
                            <span class="resource-link__text">Browse Departments</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-phone"></i>
                            <span class="resource-link__text">Contact Directory</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-info-circle"></i>
                            <span class="resource-link__text">Program Information</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                    </div>

                    <div class="integration-hint">
                        <i class="fas fa-link"></i>
                        Links to Course Catalog
                    </div>
                </div>

                <div class="resource-card">
                    <div class="resource-header">
                        <div class="resource-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div class="resource-title-group">
                            <h3 class="resource-title">Academic Calendar</h3>
                            <p class="resource-subtitle">Important Dates & Deadlines</p>
                        </div>
                    </div>
                    
                    <p class="resource-description">Comprehensive academic calendar with key dates, registration periods, and university events.</p>
                    
                    <div class="resource-access">
                        <i class="fas fa-globe"></i>
                        <span>Public Access</span>
                    </div>

                    <div class="resource-links">
                        <a href="#" class="resource-link">
                            <i class="fas fa-calendar"></i>
                            <span class="resource-link__text">View Full Calendar</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-clock"></i>
                            <span class="resource-link__text">Important Deadlines</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-download"></i>
                            <span class="resource-link__text">Download Calendar</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                    </div>

                    <div class="integration-hint">
                        <i class="fas fa-link"></i>
                        Syncs with Personal Calendar
                    </div>
                </div>

                <div class="resource-card">
                    <div class="resource-header">
                        <div class="resource-icon">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </div>
                        <div class="resource-title-group">
                            <h3 class="resource-title">Faculty Offices</h3>
                            <p class="resource-subtitle">Professor Locations & Office Hours</p>
                        </div>
                    </div>
                    
                    <p class="resource-description">Locate faculty offices, view office hours, and schedule appointments with professors.</p>
                    
                    <div class="resource-access">
                        <i class="fas fa-user-check"></i>
                        <span>Requires Student Login</span>
                    </div>

                    <div class="resource-links">
                        <a href="#" class="resource-link">
                            <i class="fas fa-search"></i>
                            <span class="resource-link__text">Find Professor</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-clock"></i>
                            <span class="resource-link__text">Office Hours</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                        <a href="#" class="resource-link">
                            <i class="fas fa-calendar-plus"></i>
                            <span class="resource-link__text">Schedule Meeting</span>
                            <i class="fas fa-chevron-right resource-link__arrow"></i>
                        </a>
                    </div>
                    

                    <div class="integration-hint">
                        <i class="fas fa-link"></i>
                        Connected to Faculty Portal
                    </div>
                </div>
            </div>
        </div>
    </section>
  <section class="help-support">
        <div class="help-support__container">
            <div class="help-support__content">
                <div class="help-info">
                    <h2 class="help-info__title">Need Help? We're Here to Support You</h2>
                    <p class="help-info__subtitle">Get assistance with registration, technical issues, or academic guidance</p>
                    <p class="help-info__description">Our dedicated support team is available to help you navigate the course management system and ensure your academic success at Space University.</p>
                    
                    <div class="help-features">
                        <div class="help-feature">
                            <i class="fas fa-user-graduate"></i>
                            <div class="help-feature__content">
                                <h3>Registration Assistance</h3>
                                <p>Get help with course enrollment, scheduling, and academic requirements</p>
                            </div>
                        </div>
                        
                        <div class="help-feature">
                            <i class="fas fa-tools"></i>
                            <div class="help-feature__content">
                                <h3>Technical Support</h3>
                                <p>Resolve system access issues and get technical troubleshooting</p>
                            </div>
                        </div>
                        
                        <div class="help-feature">
                            <i class="fas fa-compass"></i>
                            <div class="help-feature__content">
                                <h3>Academic Advising</h3>
                                <p>Connect with advisors for guidance on your academic journey</p>
                            </div>
                        </div>
                        
                        <div class="help-feature">
                            <i class="fas fa-book-reader"></i>
                            <div class="help-feature__content">
                                <h3>System Guidance</h3>
                                <p>Learn how to effectively use all system features and tools</p>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-primary help-info__cta">
                        <i class="fas fa-info-circle"></i>
                        Request More Information
                    </button>
                </div>

                <div class="help-resources">
                    <div class="faq-preview">
                        <h3 class="faq-preview__title">Frequently Asked Questions</h3>
                        
                        <div class="faq-questions">
                            <div class="faq-question">
                                <h4>How do I reset my password?</h4>
                                <p>Follow our simple password reset process to regain access to your account</p>
                            </div>
                            
                            <div class="faq-question">
                                <h4>When can I register for courses?</h4>
                                <p>Find important registration dates and deadlines for each semester</p>
                            </div>
                            
                            <div class="faq-question">
                                <h4>How do I access my course materials?</h4>
                                <p>Learn to navigate the course management system and find your resources</p>
                            </div>
                        </div>

                        <button class="btn btn-secondary faq-preview__cta">
                            <i class="fas fa-list-ul"></i>
                            View All FAQs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
@import '../assets/styles/views/home.css';
</style>