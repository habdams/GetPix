import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7yFnKp7LSWkMwdMB06LeWV2mU3cWk0KmT1DAe6-Ry6U'
    }


});