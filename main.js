let btnSkills = document.getElementById('btn-skills');
let btnProjects = document.getElementById('btn-projects');
let btnAwards = document.getElementById('btn-awards');
let btnAboutMe = document.getElementById('btn-about-me'); // Add this line to get the "About Me" button
let aboutMeContent = document.getElementById('about-me-content'); // Add this line to get the "About Me" content

btnSkills.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('skills').style.display = 'block';
    document.getElementById('awards').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    aboutMeContent.style.display = 'none'; // Hide the "About Me" content when switching to other sections
});

btnProjects.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('skills').style.display = 'none';
    document.getElementById('awards').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    aboutMeContent.style.display = 'none'; // Hide the "About Me" content when switching to other sections
});

btnAwards.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('skills').style.display = 'none';
    document.getElementById('awards').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    aboutMeContent.style.display = 'none'; // Hide the "About Me" content when switching to other sections
});

// Event listener for the "About Me" button
btnAboutMe.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('skills').style.display = 'none';
    document.getElementById('awards').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    aboutMeContent.style.display = 'block'; // Display the "About Me" content when the button is clicked
});
