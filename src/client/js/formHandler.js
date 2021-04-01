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


function handleSubmit(event) {
  event.preventDefault();
  postData('/data');
  // check what text was put into the form field
  let formText = document.getElementById('form__user-input').value
  

  
}

export { handleSubmit }
