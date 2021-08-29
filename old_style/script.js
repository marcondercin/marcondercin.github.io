let stripTwo = document.getElementById('project-strip-2');
let button = document.getElementById('more-projects');

stripTwo.style.display = 'none';

button.addEventListener('click', () => {
    if (button.innerHTML == 'See more') {
        stripTwo.style.display = 'flex';
        button.innerHTML = 'See less';
    }
    else if (button.innerHTML == 'See less') {
        stripTwo.style.display = 'none';
        button.innerHTML = 'See more';
    }
});

