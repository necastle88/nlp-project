import "@babel/polyfill";
import { fetchData } from '../src/client/js/helpers/fetchData';

const fetchDataURL = 'http://localhost:8081/data' 

test('the data is ', async () => {
  const data = await fetchData(fetchDataURL);
  expect(data).toBeUndefined();
});