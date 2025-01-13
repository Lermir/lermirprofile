// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Simple Scroll Reveal
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.project-card').forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (cardPosition < windowHeight - 100) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = `all 0.5s ease ${(index + 1) * 0.2}s`;
      }
    });
  });
  

// Fungsi untuk scroll kiri
scrollLeftButton.addEventListener('click', () => {
  scrollAmount -= 320; // Menentukan berapa banyak yang digeser
  if (scrollAmount < 0) scrollAmount = 0; // Tidak bisa scroll lebih jauh ke kiri
  projectGrid.style.transform = `translateX(-${scrollAmount}px)`;
});

// Fungsi untuk scroll kanan
scrollRightButton.addEventListener('click', () => {
  scrollAmount += 320; // Menentukan berapa banyak yang digeser
  if (scrollAmount > projectGrid.scrollWidth - projectGrid.clientWidth) {
    scrollAmount = projectGrid.scrollWidth - projectGrid.clientWidth; // Membatasi scroll ke kanan
  }
  projectGrid.style.transform = `translateX(-${scrollAmount}px)`;
});
function openModal(projectId) {
  // Set modal content based on project ID
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');

  // Dummy content for each project with image, title, and description
  const projectData = {
      1: {
          title: "Membuat Web Company Profile", 
          description: "Ini adalah foto saat saya dan teman saya mengerjakan web company profile dari customer.", 
          image: "img/company profile.png"
      },
      2: {
          title: "Membuat Desain Menggunakan Adobe", 
          description: "Ini adalah Foto saat Saya membuat desain baju.", 
          image: "img/desain.png"
      },
      3: {
          title: "Membuat Code Scanning Dalam Foto", 
          description: "Ini adalah Foto Saat saya membuat script scanning device saat melihat file foto. disini saya menggunakan bahasa Python.", 
          image: "img/scanning.png"
      },
      4: {
          title: "Membuat Script Convert MP4-MP3", 
          description: "Ini adalah Foto saat Saya membuat script untuk menconvert link video youtube ke mp3 yang bisa di download di dalam bot discord, disini saya menggunakan bahasa pemograman Python.", 
          image: "img/music.png"
      },
      5: {
          title: "Membuat Web Restoran PHP", 
          description: "Ini adalah Foto saat saya membuat web restaurant menggunakan PHP saat ukk di SMK.", 
          image: "img/restoran php.png"
      }
  };

  const project = projectData[projectId];
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalImage.src = project.image;

  // Display the modal
  const modal = document.getElementById('projectModal');
  modal.style.display = "block";

  // Apply blur to the background and disable scrolling
  document.body.style.overflow = "hidden"; // Disable scrolling
  const projectsSection = document.getElementById('projects');
  projectsSection.style.filter = "blur(5px)"; // Apply blur effect
}

function closeModal() {
  // Hide the modal
  const modal = document.getElementById('projectModal');
  modal.style.display = "none";

  // Remove blur effect and re-enable scrolling
  document.body.style.overflow = "auto"; // Re-enable scrolling
  const projectsSection = document.getElementById('projects');
  projectsSection.style.filter = "none"; // Remove blur effect
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
      closeModal();
  }
}