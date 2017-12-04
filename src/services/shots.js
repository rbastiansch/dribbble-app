import axios from 'axios';

const accessToken = '96810bdceb6e5925b54a15a31f08cdca7ae7e1424298a755e25aaa9dbe4f2323';

const shots = {
  getShots() {
    return axios.get(`https://api.dribbble.com/v1/shots?access_token=${accessToken}`);
  },

  getShot(id) {
    return axios.get(`https://api.dribbble.com/v1/shots/${id}?access_token=${accessToken}`);
  }
}

export default shots;