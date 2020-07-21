import axios from 'axios';

export default {
  state: {
    data: []
  },
  reducers: {
    setData(state, data) {
      return {
        ...state,
        data: data
      };
    },
    updateList(state, data) {
      return {
          ...state,
          data: data 
      }
  }
  },
  effects: dispatch => ({
    async fetchAll() {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/comments');
        const data = result.status === 200 ? result.data : [];
        this.setData(data);
      } catch (e) {
        throw new Error('Could not fetch data');
      }
    },

    async updateList(data) {
      this.updateData(data);
    }
  })
};
