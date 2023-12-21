import axios from 'axios';
 
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
    'Client-ID o9lDrIy6UiUPnjYJg7I_RRpW9T7D_BQMYR6aKIm_EVE'
  }
})