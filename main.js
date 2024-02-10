let btnSkills = document.getElementById('btn-skills');
let btnProjects = document.getElementById('btn-projects');
let btnAwards = document.getElementById('btn-awards');

btnSkills.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('skills').style.display='block';
    document.getElementById('awards').style.display='none';
    document.getElementById('projects').style.display='none';
    
});
btnProjects.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('skills').style.display='none';
    document.getElementById('awards').style.display='none';
    document.getElementById('projects').style.display='block';
});
btnAwards.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('skills').style.display='none';
    document.getElementById('awards').style.display='block';
    document.getElementById('projects').style.display='none';
});


