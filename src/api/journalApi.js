import axios from 'axios';

const journalApi = axios.create({
  baseURL: "https://vue-journal-app-4adab-default-rtdb.firebaseio.com"
})


export default journalApi