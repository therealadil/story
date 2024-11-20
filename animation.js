document.addEventListener('DOMContentLoaded', function() {
    const verses = document.querySelectorAll('.verse');
    
    verses.forEach((verse, index) => {
        // Add animation with delay for each verse
        verse.style.animation = `fadeIn 1.5s ease-in forwards ${index * 0.8}s`;
    });
});
