console.log('Hello from js/scripts.js!');
const customName = document.getElementById('customname');
const customNamE = document.getElementById('customnamE');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'Sarah and Tina went to California for their winter holiday. One day, they decided to go for a walk at night. The streets were full of life, but it was 35 fahrenheit outside. They spotted a little cafe nearby, so they rushed in to get something warm. The cafe was empty, it was just them and a cashier lady. They ordered :inserta: and :insertb:. The total was 30 dollars, it was a little pricy for just two drinks. At the handoff, they got 3drinks. Now everything make sense, there was a hot chocolate included in their order. So they asked the lady for a refund. She insisted and told them that :insertc: that came with them ordered it. Her answer shooked them but even more so when that lady started to stare at them with a creepy smile on her face...';
let insertA = ['an americano','a latte','classic tea'];
let insertB = ['a cappuccino','herbal tea','a mocha'];
let insertC = ['the twins','a little girl','a little boy'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let aItem = randomValueFromArray(insertA);
  let bItem = randomValueFromArray(insertB);
  let cItem = randomValueFromArray(insertC);

  newStory = newStory.replace(':inserta:',aItem);
  newStory = newStory.replace(':insertb:',bItem);
  newStory = newStory.replace(':insertc:',cItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Sarah',name);
  }

  if(customName.value !== '') {
    const name = customNamE.value;
    newStory = newStory.replace('Tina',name);
  }

  if(document.getElementById("jp").checked) {
    document.body.className += ' jp';
  }

  if(document.getElementById("jp").checked) {
    const currency = Math.round(30*104.567) + ' yen';
    const temperature =  Math.round((35-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('30 dollars',currency);
    newStory = newStory.replace('35 fahrenheit',temperature);
    newStory = newStory.replace('California','Tokyo');
  }

  if(document.getElementById("eng").checked) {
    document.body.className += ' eng';
  }

  if(document.getElementById("eng").checked) {
    const currency = Math.round(30*0.771905) + ' pounds';
    const temperature =  Math.round((35-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('30 dollars',currency);
    newStory = newStory.replace('35 fahrenheit',temperature);
    newStory = newStory.replace('California','London');
  }

  if(document.getElementById("fr").checked) {
    document.body.className += ' fr';
  }

  if(document.getElementById("fr").checked) {
    const currency = Math.round(30*0.858390) + ' euros';
    const temperature =  Math.round((35-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('30 dollars',currency);
    newStory = newStory.replace('35 fahrenheit',temperature);
    newStory = newStory.replace('California','Paris');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}

$(document).ready(function() {
  $('.randomize').click(function () {

    if($('.randomize').is('click')){

      $('.reset').hide();
    }

    else {
      $('.reset').show();
    }
  });
});

function refreshPage(){
  window.location.reload();
}
