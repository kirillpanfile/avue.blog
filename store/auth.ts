import { defineStore } from 'pinia'
import { IUserRegister } from '~~/services/models/IUser'
import authService from '~~/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const registerUser = async (data: IUserRegister) => {
    try {
      await authService.register(data)
      //   ...
    } catch (error) {
      console.log(error)
    }
  }

  return { registerUser }
})
