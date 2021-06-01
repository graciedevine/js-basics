const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'They have fluffy stripey tails!';

const redText = document.createElement('p');
redText.style.color = 'red';
redText.classList.add('redText');
redText.textContent = "Hey, I'm red!";

const blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.classList.add('blueText');
blueText.textContent = "I'm a blue h3!"

const blackPink = document.createElement('div');
blackPink.style.backgroundColor = 'pink';
blackPink.style.border = '1px solid black';
blackPink.style.width = 'auto';
blackPink.style.height = '100px';

const inDiv = document.createElement('h1');
inDiv.classList.add('inDiv');
inDiv.textContent = "I'm in a div!";

const meToo = document.createElement('p');
meToo.classList.add('meToo');
meToo.textContent = 'Me too!';

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(blackPink);
blackPink.appendChild(inDiv);
blackPink.appendChild(meToo);