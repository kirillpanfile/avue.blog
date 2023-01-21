import { defineStore } from 'pinia'
import { readonly } from 'vue'
import { IUserRegister } from '~~/services/models/IUser'
import authService from '~~/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const user = readonly(ref(null))

  const registerUser = async function (data: IUserRegister): Promise<void> {
    try {
      await authService.register(data)
    } catch (error) {
      console.log(error)
    }
  }

  const validateUserCode = async function (code: string): Promise<void> {
    try {
      await authService.validateUserCode(code)
    } catch (error) {
      console.log(error)
    }
  }

  return { registerUser, validateUserCode }
})
