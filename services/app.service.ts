import ApiClient from './main'

class AppService extends ApiClient {
  public async getArticle() {
    try {
      const response = await this.get(`/todos/1`, {
        params: { _limit: 10 },
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new AppService()
