const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// mtheod 3
const btne = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});