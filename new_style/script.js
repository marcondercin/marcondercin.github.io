let arrow1 = document.getElementById('arrow1');
let arrow2 = document.getElementById('arrow2');
let project1 = document.getElementById('project-1');
let project2 = document.getElementById('project-2');


project1.addEventListener('click', () => {displayProject(arrow1, '#project-1-content')});
project2.addEventListener('click', () => {displayProject(arrow2, '#project-2-content')});

function displayProject(arrow, id) {
    if (arrow.textContent === '>') {
        arrow.textContent = '∨';
        arrow.style.fontWeight = 'bold';
        let children = document.querySelector(id);
        children.style.display = 'block';
    }
    else {
        arrow.textContent = '>';
        arrow.style.fontWeight = 'normal';
        let children = document.querySelector(id);
        children.style.display = 'none';
    }
};