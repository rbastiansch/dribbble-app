import axios from 'axios';

const accessToken = '4b01a3ebb34e8dee92e77e627aa50587428bbd87b2fb7787b79d4798f23a1661';

const shots = {
  getShots() {
    return axios.get(`https://api.dribbble.com/v1/shots?access_token=${accessToken}`);
  }
}

export default shots;