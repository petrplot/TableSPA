import axios from "axios";

const URL = 'http://localhost:3001/api'

//создаем шаблон запросов
const _api = axios.create({
    withCredentials: true,
    baseURL: URL,
  });

export default _api