<script>
document.addEventListener("DOMContentLoaded", function() {
const profilePic = document.querySelector('.profile-picture');
if (profilePic) {
profilePic.addEventListener('mouseover', function() {
this.style.transform = 'scale(1.1)';
this.style.transition = 'transform 0.3s ease-in-out';
});

profilePic.addEventListener('mouseout', function() {
this.style.transform = 'scale(1)';
});
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});
});
</script>