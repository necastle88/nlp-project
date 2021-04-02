const fetchData = async (url) => {
  try {
      const request = await fetch(url);
      const data = await request.json()
      console.log(data);
      if (!request.ok) {
          console.log('an error has occured');
      } return data;
  }
  catch (error) {
      console.log("error", error);
  }
}  

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

const resetTextValue = (id) => {
  document.getElementById(`${id}`).value = "";
};

async function handleSubmit (event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById('form__user-input').value;
  await postData('/data', {formText});
  fetchData('/data')
  .then((res, rej) => {
  const modifiedData = {
    subjectivity: res.subjectivity,
    confidence: res.confidence,
    agreement: res.agreement,
    sentence_list: res.sentence_list[0].text.toString()
  }
  return modifiedData
})
.then(res => {
  resetTextValue('form__user-input');
  console.log(res) // create elements
  if(JSON.stringify(res) === '{}') {
    document.getElementById('results').innerHTML = "loading...";
  } document.getElementById('results').innerHTML = res.sentence_list;
})
}

export { handleSubmit }
