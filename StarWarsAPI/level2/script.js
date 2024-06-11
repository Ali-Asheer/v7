//console.log('Hello world')

// Plocka ut element ur DOM
// Skriv funktion som skickar request
// uppdatera med svaret när det kommer 

const helpMeButton = document.querySelector('#help-me-button');
const displayWho = document.querySelector('.results');
helpMeButton.addEventListener('click', getInformation);

async function getInformation() {
  const inputWho = document.querySelector('#input-Who');
  //console.log(inputWho.value)
  const baseUrl = 'https://swapi.dev/api/people/?search=' + inputWho.value;
  const settings = { method: 'GET' };
  const response = await fetch(baseUrl, settings);
  const data = await response.json();
  const firstInfo = data;
  const theInfo1 = firstInfo.results;
  const theInfo2 = firstInfo.count;
  // console.log(theInfo1[0])

  let text = '';
  for (let i = 0; i < theInfo2; i++) {
    for (let [x1, x2] of Object.entries(theInfo1[i])) {
      text += x1 + ' : ' + x2 + '\n';
    }
    text += '\n'+'---------------------------------------------------\n\n'
  }
  displayWho.innerText = text+'Found: '+theInfo2
}

/*

// JavaScript - se upp! Det finns flera fel i koden
// Om du är tvungen att ta hjälp av Aizo, be om en ledtråd först, i stället för lösningen.
const chuckOutput = document.querySelector('.chuck-output')
const chuckButton = document.querySelector('#get-joke')
const chuckIcon = document.querySelector('#chuck-icon')
console.log('Kom ihåg att du kan använda console.log för felsökning!')

// console.log('Är chuckButton null?', chuckButton)
chuckButton.addEventListener('click', getChuckJoke)

async function getChuckJoke() {
  const baseUrl = 'https://api.chucknorris.io/jokes/random'
    const response = await fetch(baseUrl)
  const data = await response.json()  // realisera löftet (Promise)
  console.log('Är data bättre?', data)
    const joke = data.value
    chuckOutput.innerText = joke
  // chuckIcon.src = data.icon_url  <- bildfunktionen verkar vara offline
}
*/
// const object = {
// 	property1: 123,
// 	property2: true
// }
// object.property1

// const variabel = null
// variabel.property1



// {
//   "name": "Obi-Wan Kenobi",
//   "height": "182",
//   "mass": "77",
//   "hair_color": "auburn, white",
//   "skin_color": "fair",
//   "eye_color": "blue-gray",
//   "birth_year": "57BBY",
//   "gender": "male",
//   "homeworld": "https://swapi.dev/api/planets/20/",
//   "films": [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/2/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/4/",
//       "https://swapi.dev/api/films/5/",
//       "https://swapi.dev/api/films/6/"
//   ],
//   "species": [],
//   "vehicles": [
//       "https://swapi.dev/api/vehicles/38/"
//   ],
//   "starships": [
//       "https://swapi.dev/api/starships/48/",
//       "https://swapi.dev/api/starships/59/",
//       "https://swapi.dev/api/starships/64/",
//       "https://swapi.dev/api/starships/65/",
//       "https://swapi.dev/api/starships/74/"
//   ],
//   "created": "2014-12-10T16:16:29.192000Z",
//   "edited": "2014-12-20T21:17:50.325000Z",
//   "url": "https://swapi.dev/api/people/10/"
// }