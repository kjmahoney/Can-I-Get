import 'babel-polyfill';

async function getWord() {
  const wordArray = await fetch('https://pure-anchorage-27433.herokuapp.com/nouns');
  const wordJson = await wordArray.json();
  const randomIndex = Math.floor(Math.random() * wordJson.length);
  const randomWord = wordJson[randomIndex].word;
  return randomWord;
}

export default getWord;
