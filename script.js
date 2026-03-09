// =============================================
// PORTFOLIO - SCRIPT.JS
// Typewriter, Filter, Carousel, Cursor, Scroll
// =============================================
// Save scroll position before page unloads
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollY', window.scrollY);
});

// Scroll Indicator visibility toggle
window.addEventListener('scroll', () => {
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    if (window.scrollY > 50) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {

  // --- THEME TOGGLE ---
  const themeToggle = document.getElementById('themeToggle');

  const applyTheme = (dark) => {
    document.body.classList.toggle('dark', dark);
  };

  // Load saved preference
  applyTheme(localStorage.getItem('theme') === 'dark');

  themeToggle?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // --- 0. SKELETON LOADER ---
  // Scroll the skeleton itself to where the user was before reload
  const savedScrollY = parseInt(sessionStorage.getItem('scrollY') || '0', 10);
  const loader = document.getElementById('skeletonLoader');
  if (loader && savedScrollY > 0) {
    loader.scrollTop = savedScrollY;
  }

  // --- 0. SKELETON LOADER ---
  const hideSkeleton = () => {
    const loader = document.getElementById('skeletonLoader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }
  };

  if (document.readyState === 'complete') {
    setTimeout(hideSkeleton, 500); // Add a tiny delay so the animation is visible briefly
  } else {
    window.addEventListener('load', () => setTimeout(hideSkeleton, 500));
    // Fallback in case load takes too long
    setTimeout(hideSkeleton, 5000); 
  }

  // --- PROJECT DATA ---
  const projects = [
    {
      title: "Trip Pilot",
      category: "Travel",
      description: "Trip Pilot is a comprehensive travel planning platform designed to simplify trip planning and make travel more organized and enjoyable. It provides users with tools to discover destinations, plan itineraries, manage bookings, and track expenses, all in one convenient location.",
      color: "linear-gradient(135deg, #2563eb, #06b6d4)",
      tags: ["OM", "Nodejs", "Expense Tracking"],
      language: "OM",
      image: "images/trippilot.png",
      github: "https://github.com/hari786-master/Trip-Pilot",
      link: "https://trip-pilot-8080.zcodecorp.in/"
    },
    {
      title: "Eventive",
      category: "Event Management",
      description: "A centralized event management platform designed to streamline scheduling, speaker coordination, booth management, sponsor handling, and expense tracking.",
      color: "linear-gradient(135deg, #059669, #14b8a6)",
      tags: ["Java", "Mysql", "Log4j2", "Backend"],
      language: "Java",
      image: "images/event.png",
      github: "https://github.com/hari786-master/EventManagmentSystemWithDatabase-Log"
    },
    {
      title: "Data Structures",
      category: "Algorithm Implementation",
      description: "Oh My HashMap & Oh My HashSet are custom implementations of core data structures built from scratch in Java. Using these algorithms, I developed a Library Management System to efficiently manage books, users, and borrowing records without relying on built-in collections.",
      color: "linear-gradient(135deg, #dc2626, #f59e0b)",
      tags: ["Java", "HashMap", "HashSet", "Algorithm"],
      language: "Java",
      image: "images/dsa.png",
      github: "https://github.com/hari786-master/Java-DSA"
    },
    {
      title: "Task Management System",
      category: "Task Management System",
      description: "A web-based task management system that helps users organize, track, and manage their daily tasks efficiently. Built with Node.js and EJS, it features a responsive interface for creating, updating, and monitoring tasks in a simple and user-friendly way.",
      color: "linear-gradient(135deg, #dc2626, #f59e0b)",
      tags: ["EJS", "CSS","Nodejs", "Responsive"],
      language: "Nodejs",
      image: "images/task.png",
      github: "https://github.com/hari786-master/Task-Management-Node",
      link: "https://task-manager-node-lemon.vercel.app"
    },
    {
      title: "Rock-Paper-Scissors",
      category: "Game",
      description: "A real-time multiplayer Rock-Paper-Scissors game built with Node.js and WebSockets. Players can join rooms, challenge opponents, and play instantly with live updates and score tracking.",
      color: "linear-gradient(135deg, #2563eb, #06b6d4)",
      tags: ["Web-Socket", "Nodejs", "Realtime"],
      language: "Nodejs",
      image: "images/rock.png",
      github: "https://github.com/hari786-master/Rock-Paper-Scissors",
      link: "https://rock-paper-scissors-8vp6.onrender.com/"
    },
    {
      title: "The Planets",
      category: "Planetary System",
      description: "A visually stunning planetary system explorer built with EJS, CSS, and JavaScript. Users can explore detailed information about each planet, view high-quality images, and learn about their unique characteristics.",
      color: "linear-gradient(135deg, #2563eb, #06b6d4)",
      tags: ["EJS", "CSS","Nodejs","Responsive"],
      language: "Nodejs",
      image: "images/the-planets.png",
      github: "https://github.com/hari786-master/The-Planet",
      link: "https://the-planet-weld.vercel.app/earth"
    },
    {
      title: "Digital Tool Kit",
      category: "Web Application",
      description: "A powerful all-in-one digital toolkit that helps users complete everyday online tasks quickly with simple, efficient, and user-friendly tools.",
      color: "linear-gradient(135deg, #2563eb, #06b6d4)",
      tags: ["HTML", "CSS","Javascript", "Responsive"],
      language: "Javascript",
      image: "images/toolkit.png",
      github: "https://github.com/hari786-master/Digital-Tool-Kit",
      link: "https://hari786-master.github.io/Digital-Tool-Kit/"
    },
    {
      title: "Bank Application",
      category: "Financial System",
      description: "A digital banking system designed to handle account management, money transfers, and transaction tracking efficiently and securely.",
      color: "linear-gradient(135deg, #ca4f17, #9facb9)",
      tags: ["HTML", "CSS","OOP JavaScript"],
      language: "Javascript",
      image: "images/bank.png",
      github: "https://github.com/hari786-master/Bank",
      link: "https://hari786-master.github.io/Bank/"
    },
    {
      title: "Digital Gallery",
      category: "Gallery",
      description: "A digital gallery built with HTML, CSS, and JavaScript, featuring a modern and responsive design.",
      color: "linear-gradient(135deg, #4f46e5, #7c3aed)",
      tags: ["HTML", "CSS", "Javascript","Responsive"],
      language: "Javascript",
      image: "images/gallery.png",
      github: "https://github.com/hari786-master/Gallery",
      link: "https://hari786-master.github.io/Gallery/"
    },
    {
      title: "Redmagic",
      category: "E-Commerce",
      description: "Redmagic is a static e-commerce platform built with HTML and CSS, featuring a modern, responsive design and smooth animations. It showcases a curated selection of products with detailed descriptions, interactive elements, and a seamless user experience.",
      color: "linear-gradient(135deg, #9facb9, #ca4f17)",
      tags: ["HTML", "CSS", "Responsive", "Redesign"],
      language: "Html",
      image: "images/redmagic.jpg",
      github: "https://github.com/hari786-master/Redmagic",
      link: "https://hari786-master.github.io/REDMAGIC/"
    },
    {
      title: "Fylo",
      category: "Portfolio Site",
      description: "Fylo is a static page built with HTML and CSS, featuring a modern and responsive design.",
      color: "linear-gradient(135deg, #ec4899, #f43f5e)",
      tags: ["HTML", "CSS", "Responsive", "Redesign"],
      language: "Html",
      image: "images/fylo.png",
      github: "https://github.com/hari786-master/Fylo",
      link: "https://hari786-master.github.io/fylo/"
    },
    {
      title: "BRAIN OUT",
      category: "Interactive Game",
      description: "Brain Out is a popular puzzle game that challenges players with tricky and unconventional questions. The game features a wide range of levels, each with unique brain teasers that require creative thinking and lateral problem-solving skills. With its intuitive interface and engaging gameplay, Brain Out provides a fun and mentally stimulating experience for players of all ages.",
      color: "linear-gradient(135deg, #84cc16, #16a34a)",
      tags: ["Scratch", "Puzzle", "Creative", "Fun"],
      language: "Scratch",
      image: "images/brainout.png",
      link: "https://scratch.mit.edu/projects/1192191626"
    },
    {
      title: "The Great Banana Chase",
      category: "Game",
      description: "A fun and fast-paced game where a cat collects bananas while trying to escape from a chasing dragon. Players must move quickly, gather as many bananas as possible, and avoid getting caught in this exciting adventure.",
      color: "linear-gradient(135deg, #eab308, #f97316)",
      tags:  ["Scratch","Game", "Animation"],
      language: "Scratch",
      image: "images/banana.png",
      link: "https://scratch.mit.edu/projects/1182922719"
    },
    {
      title: "Intractive Drawing Pad",
      category: "Interactive Game",
      description: "An interactive drawing pad that lets users create colorful drawings using simple controls. Built with Scratch, it encourages creativity by allowing users to draw, experiment with shapes, and explore basic interactive programming concepts.",
      color: "linear-gradient(135deg, #eab308, #f97316)",
      tags:  ["Scratch","Drawing", "Interactive", "Creative"],
      language: "Scratch",
      image: "images/drawingpad.png",
      link: "https://scratch.mit.edu/projects/1188582822"
    },
  ];
  
  // --- 1. TYPEWRITER EFFECT ---
  const roles = ['DEVELOPER', 'Coder', 'Tech Builder', 'Platform Developer'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterEl = document.getElementById('typewriter');

  function typeWriter() {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000); // Pause at full text
        return;
      }
      setTimeout(typeWriter, 100);
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeWriter, 400); // Pause before next word
        return;
      }
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  // --- 3. SCROLL PROGRESS ---
  // const scrollProgress = document.getElementById('scrollProgress');

  // window.addEventListener('scroll', () => {
  //   const scrollTop = window.scrollY;
  //   const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  //   const progress = (scrollTop / docHeight) * 100;
  //   scrollProgress.style.width = progress + '%';
  // });

  // --- 4. FAB (Floating Action Button) ---
  const fab = document.getElementById('fab');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }
  });

  fab.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- 5. MOBILE NAV ---
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  menuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));

  window.closeMobileNav = () => mobileNav.classList.remove('open');

  // --- 6. SCROLL ANIMATIONS (Intersection Observer) ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(el => scrollObserver.observe(el));

  // --- 7. PROJECT RENDERING & FILTERING ---
  const grid = document.getElementById('projectsGrid');
  let activeFilter = 'All';

  function renderProjects(filter) {
    const filtered = filter === 'All' ? projects : projects.filter(p => p.language === filter);

    // Animate out existing cards
    const existing = grid.querySelectorAll('.project-card');
    existing.forEach(card => card.classList.add('hiding'));

    setTimeout(() => {
      grid.innerHTML = '';

      filtered.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${i * 0.08}s`;

        const githubLink = project.github ? `href="${project.github}" target="_blank"` : 'href="#"';
        const projectLink = project.link ? `href="${project.link}" target="_blank"` : 'href="#"';

        const viewProjectBtn = project.language === 'Java' || !project.link ? '' : `
              <a ${projectLink} class="project-action-btn" aria-label="View project" title="View Project" style="display: flex; align-items: center; justify-content: center;">
                <svg class="animated-link-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>`;
        const githubBtn = project.github ? `
              <a ${githubLink} class="project-action-btn" aria-label="View code" style="display: flex; align-items: center; justify-content: center;">
                <svg aria-hidden="true" focusable="false" class="octicon octicon-mark-github" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path></svg>
              </a>` : '';

        const maxLength = 100;
        let descHtml = project.description;
        if (project.description.length > maxLength) {
          const shortDesc = project.description.substring(0, maxLength) + '...';
          descHtml = `
            <span class="desc-short">${shortDesc} <span class="read-more-btn" style="color: #ca4f17; cursor: pointer; font-size: 0.85em; font-weight: 600; white-space: nowrap;">Read More</span></span>
            <span class="desc-full" style="display: none;">${project.description} <span class="read-less-btn" style="color: #ca4f17; cursor: pointer; font-size: 0.85em; font-weight: 600; white-space: nowrap;">Read Less</span></span>
          `;
        }

        card.innerHTML = `
          <div class="project-thumbnail">
            <img src="${project.image}" alt="${project.title}" class="project-thumbnail-img">
            <div class="project-thumbnail-overlay"></div>
          </div>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <div class="project-body">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${descHtml}</p>
            <div class="project-actions">
              ${viewProjectBtn}
             ${githubBtn}
          </div>
        `;

        grid.appendChild(card);
      });
    }, existing.length > 0 ? 300 : 0);
  }

  // Initial render
  renderProjects('All');

  // Handle "Read More" / "Read Less" delegator
  grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-more-btn')) {
      const p = e.target.closest('.project-desc');
      p.querySelector('.desc-short').style.display = 'none';
      p.querySelector('.desc-full').style.display = 'inline';
    } else if (e.target.classList.contains('read-less-btn')) {
      const p = e.target.closest('.project-desc');
      p.querySelector('.desc-full').style.display = 'none';
      p.querySelector('.desc-short').style.display = 'inline';
    }
  });

  // Filter tab clicks
  const filterTabs = document.getElementById('filterTabs');
  const filterIndicator = document.getElementById('filterIndicator');

  function updateFilterIndicator(btn) {
    if (!filterIndicator || !btn) return;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = btn;
    filterIndicator.style.width = `${offsetWidth}px`;
    filterIndicator.style.height = `${offsetHeight}px`;
    filterIndicator.style.transform = `translate3d(${offsetLeft}px, ${offsetTop}px, 0)`;
  }

  // Initial indicator position (small delay to ensure layout is ready)
  setTimeout(() => {
    const activeBtn = filterTabs?.querySelector('.filter-btn.active');
    if (activeBtn) updateFilterIndicator(activeBtn);
  }, 200);

  filterTabs?.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;
    if (filter === activeFilter) return;

    activeFilter = filter;
    filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateFilterIndicator(btn);
    renderProjects(filter);
  });

  window.addEventListener('resize', () => {
    const activeBtn = filterTabs?.querySelector('.filter-btn.active');
    if (activeBtn) updateFilterIndicator(activeBtn);
  });



  // --- 8. TECH CAROUSEL ---
  const techSlides = document.querySelectorAll('.tech-slide');
  const techDots = document.querySelectorAll('#techDots .dot');
  let currentTech = 0;
  let techTimer;

  function showTechSlide(index) {
    techSlides.forEach((slide, i) => {
      slide.classList.remove('active', 'exit');
      if (i === currentTech && i !== index) {
        slide.classList.add('exit');
      }
    });
    techDots.forEach(d => d.classList.remove('active'));

    setTimeout(() => {
      currentTech = index;
      techSlides[currentTech].classList.add('active');
      techDots[currentTech].classList.add('active');
    }, 50);
  }

  function nextTechSlide() {
    showTechSlide((currentTech + 1) % techSlides.length);
  }

  function startTechCarousel() {
    techTimer = setInterval(nextTechSlide, 5000);
  }

  const techCarousel = document.getElementById('techCarousel');
  if (techCarousel) {
    techCarousel.addEventListener('mouseenter', () => clearInterval(techTimer));
    techCarousel.addEventListener('mouseleave', () => startTechCarousel());
  }

  if (techDots.length > 0) {
    techDots.forEach(dot => {
      dot.addEventListener('click', () => {
        clearInterval(techTimer);
        showTechSlide(parseInt(dot.dataset.index));
        startTechCarousel();
      });
    });

    startTechCarousel();
  }

  // --- 9. SMOOTH SCROLL FOR NAV LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = 100;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- 9.5 ACTIVE NAV LINK ON SCROLL ---
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const navObserverOptions = {
    root: null,
    // Triggers when the section crosses the middle of the screen vertically
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });

        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => {
    navObserver.observe(section);
  });

  // --- 10. 3D TILT ON PROJECT CARDS ---
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.project-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - cardCenterX) / rect.width;
      const deltaY = (e.clientY - cardCenterY) / rect.height;

      // Only apply if mouse is near the card
      if (Math.abs(deltaX) < 1.5 && Math.abs(deltaY) < 1.5) {
        const rotateX = deltaY * -4;
        const rotateY = deltaX * 4;
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
  });

  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.transform = '';
    });
  });

  // --- 11. PARALLAX ON SCROLL ---
  const heroBlur1 = document.querySelector('.hero-blur-1');
  const heroBlur2 = document.querySelector('.hero-blur-2');
  const photoContainer = document.querySelector('.photo-container');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      const parallax1 = scrollY * 0.15;
      const parallax2 = scrollY * -0.1;
      if (heroBlur1) heroBlur1.style.transform = `translateY(${parallax1}px)`;
      if (heroBlur2) heroBlur2.style.transform = `translateY(${parallax2}px)`;
      if (photoContainer) photoContainer.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
  });

  // --- 12. COUNTER ANIMATION FOR BADGES ---
  const badges = document.querySelectorAll('.floating-badge');
  badges.forEach(badge => {
    const text = badge.textContent;
    const match = text.match(/(\d+)\+/);
    if (match) {
      const targetNum = parseInt(match[1]);
      let currentNum = 0;
      const increment = Math.ceil(targetNum / 30);

      const counter = setInterval(() => {
        currentNum += increment;
        if (currentNum >= targetNum) {
          currentNum = targetNum;
          clearInterval(counter);
        }
        badge.textContent = text.replace(/\d+\+/, currentNum + '+');
      }, 50);
    }
  });


  // --- 14. CONTACT FORM HANDLER ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.form-submit');
    const formData = new FormData(contactForm);

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        formSuccess.textContent = '✅ ' + data.message;
        formSuccess.style.color = '#059669';
        formSuccess.classList.add('show');
        contactForm.reset();
      } else {
        formSuccess.textContent = '❌ ' + data.message;
        formSuccess.style.color = '#dc2626';
        formSuccess.classList.add('show');
      }
    } catch (error) {
      console.log(error);
      formSuccess.textContent = '❌ Something went wrong!';
      formSuccess.style.color = '#dc2626';
      formSuccess.classList.add('show');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 4000);
    }
  });

});
