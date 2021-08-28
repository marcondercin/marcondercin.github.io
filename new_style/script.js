let arrow1 = document.getElementById('arrow1');
let arrow2 = document.getElementById('arrow2');
let arrow3 = document.getElementById('arrow3');
let arrow4 = document.getElementById('arrow4');
let project1 = document.getElementById('project-1');
let project2 = document.getElementById('project-2');
let project3 = document.getElementById('project-3');
let project4 = document.getElementById('project-4');

project1.addEventListener('click', () => {displayProject(arrow1, '#project-1-content')});
project2.addEventListener('click', () => {displayProject(arrow2, '#project-2-content')});
project3.addEventListener('click', () => {displayProject(arrow3, '#project-3-content')});
project4.addEventListener('click', () => {displayProject(arrow4, '#project-4-content')});

function displayProject(arrow, id) {
    if (arrow.textContent === '>') {
        arrow.textContent = '∨';
        arrow.style.fontWeight = 'bold';
        document.querySelector(id).style.display = 'block';
    }
    else {
        arrow.textContent = '>';
        arrow.style.fontWeight = 'normal';
        document.querySelector(id).style.display = 'none';
    }
};

