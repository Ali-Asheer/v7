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
  const theInfo2 = firstInfo.count;
  const theInfo3 = firstInfo.results.homeworld;
  let text = '';

  for (let i = 0; i < theInfo2; i++) {
    text =
      '\n' +
      '\n' +
      firstInfo.results[i].name +
      '\n' +
      '=============' +
      '\n' +
      '( information om ' +
      firstInfo.results[i].name +
      ' hemplanet )' +
      '\n';
    displayWho.innerText = '';
    getInformation1(firstInfo.results[i].homeworld, text);
  }
}

async function getInformation1(link, text) {
  const baseUrl1 = link;
  const settings = { method: 'GET' };
  const response1 = await fetch(baseUrl1, settings);
  const data1 = await response1.json();
  const planetInfo = data1;
  let text1 = '';

  for (let [x1, x2] of Object.entries(planetInfo)) {
    text1 += x1 + ' : ' + x2 + '\n';
  }

  text += text1;
  displayWho.innerText += text;
}
