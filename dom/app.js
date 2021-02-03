document.getElementById('bear-photo');

document.getElementById('main');

document.getElementsByTagName('li');

document.getElementsByTagName('h1');

const inputs = document.getElementsByTagName('input');
//get all inputs
inputs[0];
inputs.pop(); //DOES NOT WORK!

document.getElementsByClassName('special');

const specials = document.getElementsByClassName('special');
for (let el of specials) {
  console.log(el);
}

const arr = [...specials];
arr.pop(); //this works!
