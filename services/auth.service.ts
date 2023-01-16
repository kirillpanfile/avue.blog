import ApiClient from './main'
import { IUserRegister } from './models/IUser'

class AuthService extends ApiClient {
  public async register(data: IUserRegister) {
    const response = await this.post<IUserRegister>('/users/', data)
    return response
  }
}

export default new AuthService()
