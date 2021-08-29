
// Loop through project list, as long as each project has the proper html attributes.
let projects = document.querySelectorAll('#projects > h3');

for (let i = 0; i < projects.length; i++) {
    let arrow = 'arrow' + (i+1).toString();
    projects[i].addEventListener('click', () => {
        displayProject(
            document.getElementById(arrow),
            '#' + projects[i].id + '-content'
            )
    })
}

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

