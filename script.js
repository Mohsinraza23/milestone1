// Function to toggle visibility of the skills section
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleSkillsButton.addEventListener('click', function () {
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
});
// Function to save resume changes
var saveResumeButton = document.getElementById('save-resume');
var nameElement = document.getElementById('name');
var contactElement = document.getElementById('contact');
var educationList = document.getElementById('education-list');
var skillsList = document.getElementById('skills-list');
var workExperienceList = document.getElementById('work-experience-list');
saveResumeButton.addEventListener('click', function () {
    // Save editable content to localStorage
    localStorage.setItem('resumeName', nameElement.innerText);
    localStorage.setItem('resumeContact', contactElement.innerText);
    localStorage.setItem('resumeEducation', educationList.innerHTML);
    localStorage.setItem('resumeSkills', skillsList.innerHTML);
    localStorage.setItem('resumeWorkExperience', workExperienceList.innerHTML);
    alert('Resume saved successfully!');
});
// Function to load saved resume data on page load
window.addEventListener('DOMContentLoaded', function () {
    var savedName = localStorage.getItem('resumeName');
    var savedContact = localStorage.getItem('resumeContact');
    var savedEducation = localStorage.getItem('resumeEducation');
    var savedSkills = localStorage.getItem('resumeSkills');
    var savedWorkExperience = localStorage.getItem('resumeWorkExperience');
    if (savedName)
        nameElement.innerText = savedName;
    if (savedContact)
        contactElement.innerText = savedContact;
    if (savedEducation)
        educationList.innerHTML = savedEducation;
    if (savedSkills)
        skillsList.innerHTML = savedSkills;
    if (savedWorkExperience)
        workExperienceList.innerHTML = savedWorkExperience;
});
