document.getElementById('toggle-experience').addEventListener('click', function() {
    const experienceSection = document.getElementById('experience');
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
        this.textContent = 'Hide Experience';
    } else {
        experienceSection.style.display = 'none';
        this.textContent = 'Show Experience';
    }
});
