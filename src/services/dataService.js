const data = require('src/services/Convert/convertToJSON.js');

const fetchData = async () => {
  try {
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { fetchData };
