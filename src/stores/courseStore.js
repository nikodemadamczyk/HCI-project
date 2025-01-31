import { defineStore } from 'pinia'


export const useCourseStore = defineStore('courses', {
  state: () => ({
    courses: [
      {
        id: 1,
        title: 'Human-Computer Interaction',
        code: 'CS-HCI-301',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Computer Science',
        description: 'Introduction to fundamental principles and practices of Human-Computer Interaction (HCI).',
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
            times: ['14:00-15:30'],
          }
        ],
        room: 'Building H, Room 441',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 20,
          total: 30,
        },
        professor: 'Prof. Dr. Benjamin Weyers',
        schedule: 'Mon 14:00-15:30',
      },
      {
        id: 2,
        title: 'Software Engineering',
        code: 'CS-SE-302',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Computer Science',
        description: 'Learn modern software development practices and project management.',
        learningObjectives: [
          'Understand software development life cycle',
          'Apply agile methodologies',
          'Use version control systems',
          'Develop and test software solutions',
        ],
        instructor: {
          initials: 'MC',
          name: 'Prof. Dr. Michael Chen',
          title: 'Professor of Software Engineering',
          office: 'B301',
          email: 'm.chen@space-university.edu',
        },
        schedules: [
          {
            day: 'Thursday',
            times: ['15:30-17:00'],
          }
        ],
        room: 'Building B, Room 301',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 15,
          total: 30,
        },
        professor: 'Prof. Dr. Michael Chen',
        schedule: 'Thu 15:30-17:00',
      },
      {
        id: 3,
        title: 'Data Structures and Algorithms',
        code: 'CS-DSA-303',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Computer Science',
        description: 'Explore advanced data structures and algorithms for efficient problem-solving.',
        learningObjectives: [
          'Analyze time and space complexity',
          'Implement sorting and searching algorithms',
          'Understand graph and tree data structures',
          'Optimize algorithm performance',
        ],
        instructor: {
          initials: 'AJ',
          name: 'Prof. Dr. Alice Johnson',
          title: 'Professor of Computer Science',
          office: 'C202',
          email: 'a.johnson@space-university.edu',
        },
        schedules: [
          {
            day: 'Tuesday',
            times: ['10:00-11:30'],
          }
        ],
        room: 'Building C, Room 202',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 10,
          total: 25,
        },
        professor: 'Prof. Dr. Alice Johnson',
        schedule: 'Tue 10:00-11:30',
      },
      {
        id: 4,
        title: 'Artificial Intelligence',
        code: 'CS-AI-304',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Computer Science',
        description: 'Introduction to AI concepts, including machine learning and neural networks.',
        learningObjectives: [
          'Understand machine learning principles',
          'Apply neural network models',
          'Explore reinforcement learning',
          'Develop AI-driven applications',
        ],
        instructor: {
          initials: 'RS',
          name: 'Prof. Dr. Robert Smith',
          title: 'Professor of Artificial Intelligence',
          office: 'D101',
          email: 'r.smith@space-university.edu',
        },
        schedules: [
          {
            day: 'Wednesday',
            times: ['09:00-10:30'],
          }
        ],
        room: 'Building D, Room 101',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 12,
          total: 25,
        },
        professor: 'Prof. Dr. Robert Smith',
        schedule: 'Wed 09:00-10:30',
      },
      {
        id: 5,
        title: 'Mechanical Engineering Principles',
        code: 'ENG-MEP-305',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Engineering',
        description: 'Fundamentals of mechanical engineering, including mechanics and thermodynamics.',
        learningObjectives: [
          'Understand fundamental mechanical principles',
          'Analyze mechanical systems',
          'Apply thermodynamic laws',
          'Solve engineering problems',
        ],
        instructor: {
          initials: 'ED',
          name: 'Prof. Dr. Emily Davis',
          title: 'Professor of Mechanical Engineering',
          office: 'E301',
          email: 'e.davis@space-university.edu',
        },
        schedules: [
          {
            day: 'Monday',
            times: ['08:00-09:30'],
          }
        ],
        room: 'Building E, Room 301',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 18,
          total: 30,
        },
        professor: 'Prof. Dr. Emily Davis',
        schedule: 'Mon 08:00-09:30',
      },
      {
        id: 6,
        title: 'Electrical Circuits and Systems',
        code: 'ENG-ECS-306',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Engineering',
        description: 'Study of electrical circuits, systems, and their applications.',
        learningObjectives: [
          'Master circuit analysis techniques',
          'Design electronic systems',
          'Understand signal processing',
          'Apply electrical engineering principles'
        ],
        instructor: {
          initials: 'JB',
          name: 'Prof. Dr. John Brown',
          title: 'Professor of Electrical Engineering',
          office: 'F102',
          email: 'j.brown@space-university.edu',
        },
        schedules: [
          {
            day: 'Friday',
            times: ['13:00-14:30'],
          }
        ],
        room: 'Building F, Room 102',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 15,
          total: 25,
        },
        professor: 'Prof. Dr. John Brown',
        schedule: 'Fri 13:00-14:30',
        available: true
      },
      {
        id: 7,
        title: 'Thermodynamics',
        code: 'ENG-THD-307',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Engineering',
        description: 'Principles of thermodynamics and their applications in engineering.',
        learningObjectives: [
          'Understand thermodynamic laws',
          'Analyze energy systems',
          'Apply heat transfer principles',
          'Design thermal systems'
        ],
        instructor: {
          initials: 'SW',
          name: 'Prof. Dr. Sarah Wilson',
          title: 'Professor of Thermal Engineering',
          office: 'G201',
          email: 's.wilson@space-university.edu',
        },
        schedules: [
          {
            day: 'Thursday',
            times: ['11:00-12:30'],
          }
        ],
        room: 'Building G, Room 201',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 12,
          total: 25,
        },
        professor: 'Prof. Dr. Sarah Wilson',
        schedule: 'Thu 11:00-12:30',
        available: true
      },
      {
        id: 8,
        title: 'Linear Algebra',
        code: 'MATH-LA-308',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Mathematics',
        description: 'Introduction to linear algebra, including vectors, matrices, and transformations.',
        learningObjectives: [
          'Master vector and matrix operations',
          'Understand linear transformations',
          'Solve systems of linear equations',
          'Apply eigenvalue and eigenvector concepts'
        ],
        instructor: {
          initials: 'DM',
          name: 'Prof. Dr. David Miller',
          title: 'Professor of Mathematics',
          office: 'H301',
          email: 'd.miller@space-university.edu',
        },
        schedules: [
          {
            day: 'Tuesday',
            times: ['14:00-15:30'],
          }
        ],
        room: 'Building H, Room 301',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 18,
          total: 30,
        },
        professor: 'Prof. Dr. David Miller',
        schedule: 'Tue 14:00-15:30',
        available: true
      },
      {
        id: 9,
        title: 'Calculus I',
        code: 'MATH-CAL-309',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Mathematics',
        description: 'Fundamentals of differential and integral calculus.',
        learningObjectives: [
          'Master differential calculus',
          'Understand integral calculus',
          'Apply calculus to real-world problems',
          'Develop mathematical reasoning'
        ],
        instructor: {
          initials: 'LW',
          name: 'Prof. Dr. Laura White',
          title: 'Professor of Mathematics',
          office: 'I101',
          email: 'l.white@space-university.edu',
        },
        schedules: [
          {
            day: 'Wednesday',
            times: ['16:00-17:30'],
          }
        ],
        room: 'Building I, Room 101',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 20,
          total: 35,
        },
        professor: 'Prof. Dr. Laura White',
        schedule: 'Wed 16:00-17:30',
        available: true
      },
      {
        id: 10,
        title: 'Probability and Statistics',
        code: 'MATH-PS-310',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Mathematics',
        description: 'Introduction to probability theory and statistical methods.',
        learningObjectives: [
          'Understand probability concepts',
          'Apply statistical methods',
          'Analyze data sets',
          'Conduct hypothesis testing'
        ],
        instructor: {
          initials: 'MT',
          name: 'Prof. Dr. Mark Taylor',
          title: 'Professor of Statistics',
          office: 'J202',
          email: 'm.taylor@space-university.edu',
        },
        schedules: [
          {
            day: 'Friday',
            times: ['10:00-11:30'],
          }
        ],
        room: 'Building J, Room 202',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 15,
          total: 30,
        },
        professor: 'Prof. Dr. Mark Taylor',
        schedule: 'Fri 10:00-11:30',
        available: true
      },
      {
        id: 11,
        title: 'Discrete Mathematics',
        code: 'MATH-DM-311',
        status: 'Enrollment Open',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Mathematics',
        description: 'Study of discrete structures and their applications in computer science.',
        learningObjectives: [
          'Understand set theory',
          'Apply combinatorial principles',
          'Master graph theory',
          'Develop logical reasoning'
        ],
        instructor: {
          initials: 'AL',
          name: 'Prof. Dr. Anna Lee',
          title: 'Professor of Discrete Mathematics',
          office: 'K301',
          email: 'a.lee@space-university.edu',
        },
        schedules: [
          {
            day: 'Monday',
            times: ['12:00-13:30'],
          }
        ],
        room: 'Building K, Room 301',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 16,
          total: 25,
        },
        professor: 'Prof. Dr. Anna Lee',
        schedule: 'Mon 12:00-13:30',
        available: true
      },
      {
        id: 12,
        title: 'Advanced Robotics',
        code: 'ENG-AR-312',
        status: 'Enrollment Closed',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Engineering',
        description: 'Advanced topics in robotics, including kinematics and control systems.',
        learningObjectives: [
          'Master robot kinematics',
          'Design control systems',
          'Program robotic systems',
          'Implement sensor integration'
        ],
        instructor: {
          initials: 'JC',
          name: 'Prof. Dr. James Clark',
          title: 'Professor of Robotics',
          office: 'L101',
          email: 'j.clark@space-university.edu',
        },
        schedules: [
          {
            day: 'Thursday',
            times: ['09:00-10:30'],
          }
        ],
        room: 'Building L, Room 101',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 0,
          total: 20,
        },
        professor: 'Prof. Dr. James Clark',
        schedule: 'Thu 09:00-10:30',
        available: false
      },
      {
        id: 13,
        title: 'Quantum Computing',
        code: 'CS-QC-313',
        status: 'Enrollment Closed',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Computer Science',
        description: 'Introduction to quantum computing and quantum algorithms.',
        learningObjectives: [
          'Understand quantum mechanics principles',
          'Design quantum algorithms',
          'Implement quantum circuits',
          'Analyze quantum complexity'
        ],
        instructor: {
          initials: 'RG',
          name: 'Prof. Dr. Rachel Green',
          title: 'Professor of Quantum Computing',
          office: 'M201',
          email: 'r.green@space-university.edu',
        },
        schedules: [
          {
            day: 'Wednesday',
            times: ['14:00-15:30'],
          }
        ],
        room: 'Building M, Room 201',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 0,
          total: 15,
        },
        professor: 'Prof. Dr. Rachel Green',
        schedule: 'Wed 14:00-15:30',
        available: false
      },
      {
        id: 14,
        title: 'Numerical Methods',
        code: 'MATH-NM-314',
        status: 'Enrollment Closed',
        credits: 6,
        semester: 'Winter 2024/25',
        department: 'Mathematics',
        description: 'Numerical techniques for solving mathematical problems.',
        learningObjectives: [
          'Implement numerical algorithms',
          'Analyze numerical stability',
          'Solve differential equations',
          'Apply optimization methods'
        ],
        instructor: {
          initials: 'DH',
          name: 'Prof. Dr. Daniel Harris',
          title: 'Professor of Numerical Analysis',
          office: 'N101',
          email: 'd.harris@space-university.edu',
        },
        schedules: [
          {
            day: 'Tuesday',
            times: ['16:00-17:30'],
          }
        ],
        room: 'Building N, Room 101',
        mapImage: '/images/uni_plan.png',
        enrollment: {
          remaining: 0,
          total: 25,
        },
        professor: 'Prof. Dr. Daniel Harris',
        schedule: 'Tue 16:00-17:30',
        available: false
      }
    ],
    enrollments: JSON.parse(localStorage.getItem('enrollments')) || []
  }),
  
  getters: {
    getCourseById: (state) => (id) => {
      return state.courses.find(course => course.id === parseInt(id))
    },

    isUserEnrolled: (state) => (userId, courseId) => {
      return state.enrollments.some(
        enrollment => enrollment.userId === userId && enrollment.courseId === courseId
      )
    },
    
    getUserCourses: (state) => (userId) => {
      const userEnrollments = state.enrollments.filter(e => e.userId === userId)
      return userEnrollments.map(enrollment => 
        state.courses.find(course => course.id === enrollment.courseId)
      ).filter(Boolean)
    },
  
    getCoursesForTimeSlot: (state) => (day, time) => {
      return state.courses.filter(course => {
        const [courseDay, courseTime] = course.schedule.split(' ')
        return courseDay === day && courseTime === time
      })
    }
  },
  
  actions: {
    enrollCourse(userId, courseId) {
      if (!userId) {
        throw new Error('Must be logged in to enroll')
      }
  
      const course = this.courses.find(c => c.id === courseId)
      if (!course) {
        throw new Error('Course not found')
      }
  
      if (this.enrollments.some(e => e.userId === userId && e.courseId === courseId)) {
        throw new Error('Already enrolled in this course')
      }
  
      if (course.enrollment.remaining <= 0) {
        throw new Error('Course is full')
      }
  
      const enrollment = {
        id: Date.now(),
        userId,
        courseId,
        enrolledAt: new Date().toISOString()
      }
  
      // Update course remaining spots
      const courseIndex = this.courses.findIndex(c => c.id === courseId)
      if (courseIndex !== -1) {
        this.courses[courseIndex].enrollment.remaining--
      }
  
      // Add enrollment
      this.enrollments.push(enrollment)
      localStorage.setItem('enrollments', JSON.stringify(this.enrollments))
  
      return enrollment
    },
  
    unenrollCourse(userId, courseId) {
      const enrollmentIndex = this.enrollments.findIndex(
        e => e.userId === userId && e.courseId === courseId
      )
  
      if (enrollmentIndex === -1) {
        throw new Error('Not enrolled in this course')
      }
  
      // Remove enrollment
      this.enrollments.splice(enrollmentIndex, 1)
  
      // Restore course spot
      const courseIndex = this.courses.findIndex(c => c.id === courseId)
      if (courseIndex !== -1) {
        this.courses[courseIndex].enrollment.remaining++
      }
  
      localStorage.setItem('enrollments', JSON.stringify(this.enrollments))
    }
  }
})
