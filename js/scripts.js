console.log('Hello from js/scripts.js!');
const customName = document.getElementById('customname');
const customAge = document.getElementById('customage');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob 40 years old, saw the whole thing, but was not surprised — :insertx: was 300 dollars, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(customAge.value !== '') {
    const age = customAge.value;
    newStory = newStory.replace('40',age);
  }

  if(document.getElementById("eu").checked) {
    const currency = Math.round(300*0.0714286) + ' euro';
    const temperature =  Math.round((94-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('300 dollars',currency);
    newStory = newStory.replace('94 fahrenheit',temperature);
  }

  if(document.getElementById("jp").checked) {
    const currency = Math.round(300*0.0714286) + ' yen';
    const temperature =  Math.round((94-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('300 dollars',currency);
    newStory = newStory.replace('94 fahrenheit',temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
