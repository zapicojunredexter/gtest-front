const build = 'dev' && 'prod';
const config = {
    dev: {
        API_URL: 'http://localhost:5000/gtest-1553088239725/us-central1/gtestAPI',
    },
    prod: {
        API_URL: 'https://us-central1-gtest-1553088239725.cloudfunctions.net/gtestAPI'
    }
};

export const {API_URL} = config[build];
// export const API_URL = 'https://us-central1-gtest-1553088239725.cloudfunctions.net/gtestAPI';
// export const API_URL = 'http://localhost:5000/gtest-1553088239725/us-central1/gtestAPI';