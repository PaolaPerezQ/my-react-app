const data = require('src/services/Convert/convertToJSON.js');

const fetchData = async () => {
  try {
    // Utiliza el objeto JSON local en lugar de hacer una solicitud HTTP
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { fetchData };
