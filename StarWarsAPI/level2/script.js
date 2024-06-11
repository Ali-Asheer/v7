const helpMeButton = document.querySelector('#help-me-button');
const displayWho = document.querySelector('.results');
helpMeButton.addEventListener('click', getInformation);

async function getInformation() {
  const inputWho = document.querySelector('#input-Who');
  const baseUrl = 'https://swapi.dev/api/people/?search=' + inputWho.value;
  const settings = { method: 'GET' };
  const response = await fetch(baseUrl, settings);
  const data = await response.json();
  const firstInfo = data;
  const theInfo1 = firstInfo.results;
  const theInfo2 = firstInfo.count;
 
  let text = '';
  for (let i = 0; i < theInfo2; i++) {
    for (let [x1, x2] of Object.entries(theInfo1[i])) {
      text += x1 + ' : ' + x2 + '\n';
    }
    text += '\n'+'---------------------------------------------------\n\n'
  }
  displayWho.innerText = text+'Found: '+theInfo2
}

