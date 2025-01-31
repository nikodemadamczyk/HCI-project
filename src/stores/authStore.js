// src/stores/authStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)
  const users = ref(JSON.parse(localStorage.getItem('users')) || [])

  const isAuthenticated = computed(() => !!user.value)

  const register = async (userData) => {
    // Sprawdź czy użytkownik już istnieje
    const existingUser = users.value.find(u => u.email === userData.email)
    if (existingUser) {
      throw new Error('User with this email already exists')
    }

    // Stwórz nowego użytkownika
    const newUser = {
      id: Date.now(),
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password // W prawdziwej aplikacji należy zahashować hasło!
    }

    // Dodaj do listy użytkowników
    users.value.push(newUser)
    localStorage.setItem('users', JSON.stringify(users.value))

    return newUser
  }

  const login = async (credentials) => {
    const foundUser = users.value.find(
      u => u.email === credentials.email && u.password === credentials.password
    )

    if (!foundUser) {
      throw new Error('Invalid email or password')
    }

    // Zapisz zalogowanego użytkownika
    const loggedUser = {
      id: foundUser.id,
      email: foundUser.email,
      fullName: foundUser.fullName
    }
    
    user.value = loggedUser
    localStorage.setItem('user', JSON.stringify(loggedUser))

    return loggedUser
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  return {
    user,
    isAuthenticated,
    register,
    login,
    logout
  }
})