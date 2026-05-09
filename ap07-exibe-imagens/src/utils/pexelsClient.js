import axios from 'axios';

const pexelsClient = axios.create({

    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: 'jdlYOBT47z4ynKsCDg11I04zyr3ZfmFwLP2ZJ7AXZdhucG1tqhfNdjac'
    }
})

export default pexelsClient;