import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'


const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";

console.log(checkForName);

const getData = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// send data to server
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const requestData = async () => {
    const response = await fetch('/data');
    return response.json();
  }
  
function performAction(e) {
  const getFeelings = document.getElementById("feelings").value;

  getData(baseURL, getZip, key)
  .then(res => {
    const newData = {
      temp: Math.floor(res.main.temp) + '°F', 
      date: newDate,
      main: res.weather['0'].main,
      feeling: getFeelings
    }
    return newData
  })
  .then(res => {
    postData('/', res)
  })
  .then(createJournalEntry)
  resetTextValue('zip');
  resetTextValue('feelings');
}

const resetTextValue = (id) => {
  document.getElementById(`${id}`).value = "";
};


const createJournalEntry = async () => {

  const userEntry = await fetchData('/data');
  console.log(userEntry[userEntry.length - 1].feeling)

};







export {
  checkForName,
  handleSubmit
}