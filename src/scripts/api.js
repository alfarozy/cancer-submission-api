// TODO: Silakan sesuaikan BASE URL dari endpoint Anda
// const BASE_URL = 'http://34.128.118.122:3000';
const BASE_URL = 'http://127.0.0.1:3000';

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    console.log(json);
    return json;
  }
}
