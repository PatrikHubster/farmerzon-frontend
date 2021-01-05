import { RESTDataSource } from 'apollo-datasource-rest';

class AuthenticationLogic extends RESTDataSource {
    constructor(props) {
        super(props);
        this.baseUrl = this.props.AUTH_SERVER;
      }
    
      async getMovie(id) {
        return this.get(`movies/${id}`);
      }
    
      async getMostViewedMovies(limit = 10) {
        const data = await this.get('movies', {
          per_page: limit,
          order_by: 'most_viewed',
        });
        return data.results;
      }
}

export default AuthenticationLogic;