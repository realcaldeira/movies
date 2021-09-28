import axios from 'axios';

//?api_key=4e356fa46ae59e66d56e2d54a86dd636&language=pt-BR&page=1

export const key = '4e356fa46ae59e66d56e2d54a86dd636';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api;