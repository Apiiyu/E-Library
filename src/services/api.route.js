class ApiRoute {
    constructor() {
        this.login = '/auth/local'
        this.register = '/auth/local/register'
        this.books = '/books'
        this.employee = '/employees'
    }
}

export default new ApiRoute()