import { fetchData } from './helpers/fetchData';
import { postData } from './helpers/postData';
import { resetTextValue } from './helpers/resetForm';

async function handleSubmit (event) {
  event.preventDefault();
  // check what text was put into the form field
  let formText = document.getElementById('form__user-input').value;
  await postData('/data', {formText});
  fetchData('/data')
  .then((res, rej) => {
    if(res.sentence_list === undefined) {
      const modifiedData = {
        subjectivity: 'N/A',
        confidence: 'N/A',
        agreement: 'N/A',
        sentence_list: 'Enter text in the textbox to recieve results'
      }
      return modifiedData
    } else {
      const modifiedData = {
        subjectivity: res.subjectivity,
        confidence: res.confidence,
        agreement: res.agreement,
        sentence_list: res.sentence_list[0].text.toString()
      }
      return modifiedData
    }
})
.then(res => {
  resetTextValue('form__user-input');
  const textTitles = ['Subjectivity', 'Confidence' , 'Agreement', 'Sentence'];
  const textList = [res.subjectivity, res.subjectivity, res.confidence, res.sentence_list];
  const getSectionResultsID = document.getElementById('section_results');

  textTitles.forEach((element, idx) => {
    const newParagraph = document.createElement('p');
    const getHeadingText = textList[idx];
    return getSectionResultsID.insertAdjacentElement('beforeend', newParagraph).append(`${element}: ${getHeadingText}`); 
  });
})
}

export { handleSubmit }
