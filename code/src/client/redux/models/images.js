import axios from 'axios';

export default {
  state: {
    imgs: [],
    selectedImage: ''
  },
  reducers: {
    setImages(state, data) {
      return {
        ...state,
        imgs: data
      };
    },
    setSelection(state, data) {
        return {
            ...state,
            selectedImage: data 
        }
    }
  },
  effects: dispatch => ({
    async fetchAll() {
      try {
        const result = await axios.get('https://picsum.photos/v2/list');
        const images = result.status === 200 ? result.data : [];
        this.setImages(images);
      } catch (e) {
        throw new Error('Could not fetch images');
      }
    },

    async setSelectedImage(image) {
        this.setSelection(image);
    }
  })
};
