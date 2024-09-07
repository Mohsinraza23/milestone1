// Function to toggle visibility of the skills section
const toggleSkillsButton = document.getElementById('toggle-skills')!;
const skillsSection = document.getElementById('skills')!;

toggleSkillsButton.addEventListener('click', () => {
  skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
});

// Function to save resume changes
const saveResumeButton = document.getElementById('save-resume')!;

const nameElement = document.getElementById('name')!;
const contactElement = document.getElementById('contact')!;
const educationList = document.getElementById('education-list')!;
const skillsList = document.getElementById('skills-list')!;
const workExperienceList = document.getElementById('work-experience-list')!;

saveResumeButton.addEventListener('click', () => {
  // Save editable content to localStorage
  localStorage.setItem('resumeName', nameElement.innerText);
  localStorage.setItem('resumeContact', contactElement.innerText);
  localStorage.setItem('resumeEducation', educationList.innerHTML);
  localStorage.setItem('resumeSkills', skillsList.innerHTML);
  localStorage.setItem('resumeWorkExperience', workExperienceList.innerHTML);

  alert('Resume saved successfully!');
});

// Function to load saved resume data on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('resumeName');
  const savedContact = localStorage.getItem('resumeContact');
  const savedEducation = localStorage.getItem('resumeEducation');
  const savedSkills = localStorage.getItem('resumeSkills');
  const savedWorkExperience = localStorage.getItem('resumeWorkExperience');

  if (savedName) nameElement.innerText = savedName;
  if (savedContact) contactElement.innerText = savedContact;
  if (savedEducation) educationList.innerHTML = savedEducation;
  if (savedSkills) skillsList.innerHTML = savedSkills;
  if (savedWorkExperience) workExperienceList.innerHTML = savedWorkExperience;
});
