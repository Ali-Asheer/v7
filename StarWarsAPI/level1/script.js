const helpMeButton = document.querySelector('#help-me-button')
const displayWho = document.querySelector('.display-who')
helpMeButton.addEventListener('click', getInformation)

async function getInformation() {
  const baseUrl = 'https://swapi.dev/api/people/10/'
  const settings = {
    method: 'GET'  
   }
  const response = await fetch(baseUrl, settings)
  const data = await response.json()
  const firstInfo = data
  const theInfo = firstInfo.name
  let text = "";
   for (let [x1, x2] of Object.entries(firstInfo)) {
     text += (x1 + " : " + x2 + '\n')
   }
  displayWho.innerText = (text)
}
