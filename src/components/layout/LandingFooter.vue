<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- University Information -->
      <div class="footer__column">
        <div class="footer__logo">
          <div class="logo-small">
            <img src="../../assets/images/logo.svg" alt="Space University">
          </div>
        </div>
        <h3 class="footer__heading">Space University</h3>
        <address class="footer__address">
          1000 Cosmic Drive<br>
          Stellar City, SP 12345<br>
          United Earth Federation
        </address>
        <div class="footer__contact">
          <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
          <p><i class="fas fa-envelope"></i> info@spaceuniversity.edu</p>
        </div>
        <div class="footer__emergency">
          <h4>Emergency Contact</h4>
          <p><i class="fas fa-exclamation-triangle"></i> Campus Security: (555) 911-0000</p>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer__column">
        <h3 class="footer__heading">Quick Links</h3>
        <ul class="footer__list">
          <li><router-link to="/admissions">Admissions</router-link></li>
          <li><router-link to="/schedule">Academic Calendar</router-link></li>
          <li><router-link to="/courses">Course Catalog</router-link></li>
          <li><router-link to="/library">Library Resources</router-link></li>
          <li><router-link to="/research">Research Centers</router-link></li>
          <li><router-link to="/career">Career Services</router-link></li>
          <li><router-link to="/campus">Campus Life</router-link></li>
          <li><router-link to="/alumni">Alumni Network</router-link></li>
        </ul>
      </div>

      <!-- System Support -->
      <div class="footer__column">
        <h3 class="footer__heading">System Support</h3>
        <div class="system-status">
          <div class="status-indicator">
            <span class="status-dot status-dot--online"></span>
            System Status: Online
          </div>
          <p class="last-update">Last Updated: 21 Jan 2025 14:30 UTC</p>
        </div>
        <ul class="footer__list">
          <li><a href="#"><i class="fas fa-question-circle"></i> Help Center</a></li>
          <li><a href="#"><i class="fas fa-book"></i> User Guide</a></li>
          <li><a href="#"><i class="fas fa-tools"></i> Technical Support</a></li>
          <li><a href="#"><i class="fas fa-shield-alt"></i> Security</a></li>
        </ul>
        <div class="footer__support">
          <p>24/7 Support:</p>
          <p><i class="fas fa-phone"></i> (555) 123-HELP</p>
          <p><i class="fas fa-envelope"></i> support@spaceuniversity.edu</p>
        </div>
      </div>

      <!-- Resources -->
      <div class="footer__column">
        <h3 class="footer__heading">Resources</h3>
        <ul class="footer__list">
          <li><a href="#">Student Portal</a></li>
          <li><a href="#">Faculty Directory</a></li>
          <li><a href="#">Research Database</a></li>
          <li><a href="#">Online Learning</a></li>
          <li><a href="#">Academic Support</a></li>
          <li><a href="#">Writing Center</a></li>
          <li><a href="#">International Programs</a></li>
          <li><a href="#">Graduate Studies</a></li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer__bottom">
      <div class="footer__container">
        <div class="footer__info">
          <div class="footer__copyright">
            © 2025 Space University. All rights reserved.
          </div>
          <div class="footer__accreditation">
            Accredited by the Interplanetary Council of Higher Education
          </div>
        </div>
        <div class="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accessibility</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </div>
  </footer>
</template>



<style scoped>
  @import '../../assets/styles/layout/landing_footer.css';
</style>