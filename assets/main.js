// ── PLUMB5 REAL ESTATE PLATFORM — INTERACTIVE CONTROLS ──

document.addEventListener('DOMContentLoaded', () => {

  // 1. FAQ ACCORDION ENGINE
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other items
        faqItems.forEach(inner => inner.classList.remove('active'));
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 2. VIDEO DEMO POPUP CONTROLLER (WITH LOCAL VIDEO)
  const videoThumb = document.getElementById('videoThumb');
  const videoModal = document.getElementById('videoModal');
  const closeVideo = document.getElementById('closeVideo');
  const localVideoPlayer = document.getElementById('localVideoPlayer');

  if (videoThumb && videoModal) {
    videoThumb.addEventListener('click', () => {
      videoModal.classList.add('open');
      if (localVideoPlayer) {
        localVideoPlayer.play();
      }
    });
  }

  const handleClose = () => {
    if (videoModal) {
      videoModal.classList.remove('open');
    }
    if (localVideoPlayer) {
      // Pause local video when modal is closed
      localVideoPlayer.pause();
    }
  };

  if (closeVideo) {
    closeVideo.addEventListener('click', handleClose);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        handleClose();
      }
    });
  }

  // 3. NUMERICAL METRIC COUNTING ENGINE
  const animateCounter = (el) => {
    const target = parseInt(el.textContent, 10);
    if (isNaN(target)) return;

    let current = 0;
    const duration = 1800; // ms
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const timer = setInterval(() => {
      current += Math.ceil(target / (duration / stepTime));
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, stepTime);
  };

  // Intersection Observer for metrics
  if ('IntersectionObserver' in window) {
    const metricsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Select any matching counters within section
          entry.target.querySelectorAll('.mb-val, .metric-val').forEach(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const observerTargets = document.querySelectorAll('.metric-box, .metric-row');
    observerTargets.forEach(target => metricsObserver.observe(target));
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.mb-val, .metric-val').forEach(animateCounter);
  }

  // 4. ANIMATION REVEAL ON SCROLL ENGINE
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .reveal').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // Older browsers fallback
    document.querySelectorAll('.fade-up, .reveal').forEach(el => {
      el.classList.add('visible');
    });
  }

});

// 5. STANDARD LEAD FORM DISPATCH ACTION (LOCAL FEEDBACK INTEGRATION)
function handleFormSubmission(event) {
  event.preventDefault();

  const form = document.getElementById('standaloneLeadForm');
  const successBox = document.getElementById('inlineSuccessMsg');

  if (form && successBox) {
    // Hide form with beautiful transition
    form.style.opacity = '0';
    setTimeout(() => {
      form.style.display = 'none';
      successBox.style.display = 'block';
      successBox.style.opacity = '0';
      successBox.style.transform = 'scale(0.95)';

      // Animate success box entry
      setTimeout(() => {
        successBox.style.transition = 'all 0.4s ease';
        successBox.style.opacity = '1';
        successBox.style.transform = 'scale(1)';
      }, 50);
    }, 300);
  }
}

// 6. GLOBAL EXPOSURE FOR FAQ COMPATIBILITY
function toggleFaq() {
  // Safe fallback wrapper mapping direct onclick actions
}
