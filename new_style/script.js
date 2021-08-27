let arrow1 = document.getElementById('arrow1');
let arrow2 = document.getElementById('arrow2');
let project1 = document.getElementById('project-1');
let project2 = document.getElementById('project-2');


project1.addEventListener('click', () => {
    displayProject('#project-1-content');
});


function displayProject(id) {
    if (arrow1.textContent === '>') {
        arrow1.textContent = '∨';
        arrow1.style.fontWeight = 'bold';
        let children = document.querySelector(id);
        children.style.display = 'block';
    }
    else {
        arrow1.textContent = '>';
        arrow1.style.fontWeight = 'normal';
        let children = document.querySelector(id);
        children.style.display = 'none';
    }
};