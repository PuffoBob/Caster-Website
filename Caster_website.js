  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");

    // Fade-in for all major sections
    setTimeout(() => {
      const sections = document.querySelectorAll(".fade-section");
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add("visible");
        }, index * 150); // stagger animation
      });
    }, 300);

  });
  

  const track = document.querySelector(".logo-track");
  const carousel = document.querySelector(".logo-carousel");

  let position = 0;
  let speed = 0.4;          // base speed
  let targetSpeed = speed;

  function animate() {
    position -= speed;

    const resetPoint = track.scrollWidth / 2;

    if (Math.abs(position) >= resetPoint) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  carousel.addEventListener("mouseenter", () => {
    targetSpeed = 0.08;     // slow on hover
  });

  carousel.addEventListener("mouseleave", () => {
    targetSpeed = 0.4;      // normal speed
  });

  function smoothSpeed() {
    speed += (targetSpeed - speed) * 0.08;
    requestAnimationFrame(smoothSpeed);
  }

  smoothSpeed();
  animate();
