/* ==========================================================
   SAGAR GADANI PHOTOGRAPHY — SCRIPT
   ========================================================== */

/* ---- EDIT YOUR CONTACT DETAILS HERE (ONLY PLACE NEEDED) ---- */
const SITE_CONFIG = {
  businessName: "Dreams click production",
  instagram: "https://www.instagram.com/click_by_dsp?igsh=M2p0YmFvZTU1OWY3",
  whatsapp: "https://wa.me/919998847232",   // replace X's with your number, no spaces or +
  phone: "tel:+919998847232"                 // replace X's with your number
};

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Apply SITE_CONFIG to buttons/links ---------- */
  const whatsappBtn = document.getElementById("whatsappBtn");
  const callBtn = document.getElementById("callBtn");
  const footerWhatsapp = document.getElementById("footerWhatsapp");
  const instaFollowBtn = document.getElementById("instaFollowBtn");
  const footerInsta = document.getElementById("footerInsta");

  if (whatsappBtn) whatsappBtn.href = SITE_CONFIG.whatsapp;
  if (footerWhatsapp) footerWhatsapp.href = SITE_CONFIG.whatsapp;
  if (callBtn) callBtn.href = SITE_CONFIG.phone;
  if (instaFollowBtn) instaFollowBtn.href = SITE_CONFIG.instagram;
  if (footerInsta) footerInsta.href = SITE_CONFIG.instagram;

  /* ---------- Sticky header ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");

  hamburger.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
      document.body.style.overflow = "";
    });
  });

  /* ---------- Scroll reveal animations ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  /* ---------- Lightbox gallery ---------- */
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item img"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.alt = galleryItems[currentIndex].alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.alt = galleryItems[currentIndex].alt;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.alt = galleryItems[currentIndex].alt;
  }

  galleryItems.forEach((img, index) => {
    img.parentElement.addEventListener("click", () => openLightbox(index));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", showNext);
  lightboxPrev.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  /* ---------- Basic touch swipe support for lightbox ---------- */
  let touchStartX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  lightbox.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? showPrev() : showNext();
    }
  });

  /* ---------- Instagram post carousel (10 slides per post) ---------- */
  /*
     ================================================================
     HOW TO CHANGE THE CAROUSEL IMAGES
     ================================================================
     Each block below (POST 1, POST 2, ...) is one Instagram grid tile.
     Just type your own image filenames inside the [ ] brackets,
     in the order you want them to appear when swiping.

     Your image files must be placed inside: assets/images/

     You can have as few or as many photos per post as you want —
     just add or remove lines inside the brackets.
  */
  const POST_IMAGES = {
    1: [
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg"
    ],
    2: [
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg"
    ],
    3: [
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg"
    ],
    4: [
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg",
      "/photo-1519225421980-715cb0215aed.jpeg"
    ],
    5: [
      "assets/images/post5-1.jpg",
      "assets/images/post5-2.jpg",
      "assets/images/post5-3.jpg",
      "assets/images/post5-4.jpg",
      "assets/images/post5-5.jpg",
      "assets/images/post5-6.jpg",
      "assets/images/post5-7.jpg",
      "assets/images/post5-8.jpg",
      "assets/images/post5-9.jpg",
      "assets/images/post5-10.jpg"
    ],
    6: [
      "assets/images/post6-1.jpg",
      "assets/images/post6-2.jpg",
      "assets/images/post6-3.jpg",
      "assets/images/post6-4.jpg",
      "assets/images/post6-5.jpg",
      "assets/images/post6-6.jpg",
      "assets/images/post6-7.jpg",
      "assets/images/post6-8.jpg",
      "assets/images/post6-9.jpg",
      "assets/images/post6-10.jpg"
    ],
    7: [
      "assets/images/post7-1.jpg",
      "assets/images/post7-2.jpg",
      "assets/images/post7-3.jpg",
      "assets/images/post7-4.jpg",
      "assets/images/post7-5.jpg",
      "assets/images/post7-6.jpg",
      "assets/images/post7-7.jpg",
      "assets/images/post7-8.jpg",
      "assets/images/post7-9.jpg",
      "assets/images/post7-10.jpg"
    ],
    8: [
      "assets/images/post8-1.jpg",
      "assets/images/post8-2.jpg",
      "assets/images/post8-3.jpg",
      "assets/images/post8-4.jpg",
      "assets/images/post8-5.jpg",
      "assets/images/post8-6.jpg",
      "assets/images/post8-7.jpg",
      "assets/images/post8-8.jpg",
      "assets/images/post8-9.jpg",
      "assets/images/post8-10.jpg"
    ]
  };

  function getPostSlides(postId) {
    return POST_IMAGES[postId] || [];
  }

  const instaModal = document.getElementById("instaModal");
  const instaModalClose = document.getElementById("instaModalClose");
  const instaTrack = document.getElementById("instaTrack");
  const instaDots = document.getElementById("instaDots");
  const instaCounter = document.getElementById("instaCounter");
  const instaPrevBtn = document.getElementById("instaPrev");
  const instaNextBtn = document.getElementById("instaNext");

  let currentSlide = 0;
  let currentSlides = [];

  function renderCarousel() {
    instaTrack.innerHTML = currentSlides
      .map((src, i) => `<img src="${src}" alt="Slide ${i + 1}" loading="lazy">`)
      .join("");
    instaDots.innerHTML = currentSlides
      .map((_, i) => `<span data-dot="${i}"></span>`)
      .join("");
    updateCarousel();
  }

  function updateCarousel() {
    instaTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    instaCounter.textContent = `${currentSlide + 1} / ${currentSlides.length}`;
    instaDots.querySelectorAll("span").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function openInstaPost(postId) {
    currentSlides = getPostSlides(postId);
    currentSlide = 0;
    renderCarousel();
    instaModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeInstaPost() {
    instaModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function nextSlide() {
    if (currentSlide < currentSlides.length - 1) {
      currentSlide++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }

  document.querySelectorAll(".insta-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const postId = item.getAttribute("data-post");
      openInstaPost(postId);
    });
  });

  instaModalClose.addEventListener("click", closeInstaPost);
  instaNextBtn.addEventListener("click", nextSlide);
  instaPrevBtn.addEventListener("click", prevSlide);

  instaModal.addEventListener("click", (e) => {
    if (e.target === instaModal) closeInstaPost();
  });

  instaDots.addEventListener("click", (e) => {
    const dot = e.target.closest("[data-dot]");
    if (!dot) return;
    currentSlide = parseInt(dot.getAttribute("data-dot"), 10);
    updateCarousel();
  });

  document.addEventListener("keydown", (e) => {
    if (!instaModal.classList.contains("active")) return;
    if (e.key === "Escape") closeInstaPost();
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  /* Swipe support for the carousel */
  let instaTouchStartX = 0;
  instaTrack.addEventListener("touchstart", (e) => {
    instaTouchStartX = e.changedTouches[0].screenX;
  });
  instaTrack.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - instaTouchStartX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? prevSlide() : nextSlide();
    }
  });

});
