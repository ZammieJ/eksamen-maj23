// Scroll spy menu //
document.addEventListener('DOMContentLoaded', function() {
    var scrollSpyMenuItems = document.querySelectorAll('.scroll-spy-menu li a');

    // Add click event listeners to the scroll spy menu items
    scrollSpyMenuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = item.getAttribute('href').substring(1); // Remove the leading '#'
            scrollToSection(targetId);
        });
    });

    // Function to scroll to a section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});