import ApiClient from './main'
import { IUserRegister } from './models/IUser'

class AuthService extends ApiClient {
  public async register(data: IUserRegister) {
    const response = await this.post<IUserRegister>('/accounts/users/', data)
    return response
  }

  public async validateUserCode(code: string) {
    const response = await this.post(`/accounts/profile/activate-profile/`, {
      code,
    })
    return response
  }
}

export default new AuthService()
