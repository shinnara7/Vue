import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://api.thetpainghtut.com/api/v1',
  timeout: 1000,
  headers: {'Accept': 'application/json'}
});

export default{
	getPosts(){
		return apiClient.get('/posts')
	},
	getTags(){
		return apiClient.get('/tags')
	}
}