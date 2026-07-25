// Owais Manzoor Portfolio Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypingEffect();
  initNavbarScroll();
  initProjectFiltering();
  initSkillsTabs();
  initModalEvents();
  initMobileMenu();
  initLocationSelector();
  initOrderForm();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
    });
  });
}

/* Particle Canvas Background */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.8 + 0.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 242, 254, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* Typing Effect for Hero Subtitle */
function initTypingEffect() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const roles = [
    "Founder & Lead Engineer @ MON Labs",
    "Cryptography & Cybersecurity Specialist",
    "Full-Stack & Mobile App Developer",
    "Enterprise ERP Software Architect",
    "Master of Science in IT (MSc IT)",
    "DSA, DAA, OS & Machine Learning Specialist",
    "Certified Systems & Hardware Specialist"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* Navbar Scroll Shadow & Blur */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* Skills Category Tabs */
function initSkillsTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.category;

      skillCards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Project Category Filtering */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Project Modal Data & Interactivity */
const projectDetailsData = {
  nursery: {
    title: "PomoVerse E-Nursery (Full-Stack Production App)",
    tech: "React 19, Express 5, PostgreSQL, Redis, Cloudinary, Framer Motion, Tailwind v4",
    liveWeb: "https://pomoverse0-nine.vercel.app/",
    github: "https://github.com/Bhatowais/PomoVerse_Frontend.git",
    summary: `Engineered a full-stack, production-ready e-commerce web application featuring real-time product catalogs, cart state management, and sub-20ms query speeds.`,
    highlights: [
      "Built high-throughput Express 5 REST API connected to PostgreSQL with connection pooling.",
      "Integrated Redis caching layer to achieve sub-20ms query resolution for product catalogs.",
      "Implemented secure JWT authentication, password salting with Bcrypt, and Cloudinary media upload pipelines.",
      "Styled using Tailwind CSS v4 and Framer Motion micro-interactions."
    ]
  },
  novelty: {
    title: "Novelty Arts Emporium (E-Commerce Web, Monorepo ERP & Mobile Ledger)",
    tech: "React Native, Expo (EAS), Node.js, TypeScript, PostgreSQL (pg-pool), Express",
    liveCommerce: "https://novelty-arts-emporium-pads.vercel.app/",
    liveWeb: "https://novelty-arts-emporium-pads.vercel.app/#/",
    liveMobile: "https://expo.dev/accounts/bhatowais419s-team/projects/dev-owais/builds/2ce4cfb5-1224-457c-a19d-b71e3142ee81",
    github: "https://github.com/Bhatowais454/Novelty-Arts-Emporium.git",
    summary: `Comprehensive enterprise suite featuring an E-Commerce Web Storefront, real-time billing/inventory ERP, and double-entry ledger accounting with cross-platform React Native Expo mobile build.`,
    highlights: [
      "Full Monorepo architecture hosting Node/TypeScript API backend, Web Storefront, and React Native (Expo) mobile client.",
      "Live E-Commerce Web Application allowing customers to browse raw-wool, yarn, and textile product catalogs.",
      "Transactional double-entry accounting ledger schemas with audit trails built on PostgreSQL.",
      "Native mobile application build published on Expo Application Services (EAS) with offline sync."
    ]
  },
  dapp: {
    title: "University Web3 Academic Credentials DApp",
    tech: "Solidity, Hardhat 3, Ethers.js, ERC-721, OpenZeppelin, Firebase, React",
    github: "https://github.com/Bhatowais454/Eductational-Dapp.git",
    summary: `Decentralized academic credential platform issuing tamper-proof student degrees as soulbound/ERC-721 NFTs.`,
    highlights: [
      "Smart contracts written in Solidity 0.8.20 using OpenZeppelin ERC-721 Enumerable extensions.",
      "Automated testing suite written with Hardhat and Mocha/Chai.",
      "Deployed to Ethereum Sepolia testnet using Hardhat Ignition modules.",
      "Integrated Web3Auth and IPFS metadata indexing for secure credential validation."
    ]
  }
};

function initModalEvents() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.modal-close');

  if (!modalOverlay || !closeBtn) return;

  document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.dataset.project;
      const data = projectDetailsData[projectId];

      if (data) {
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-tech').textContent = data.tech;
        document.getElementById('modal-summary').textContent = data.summary;

        const highlightsList = document.getElementById('modal-highlights');
        highlightsList.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');

        const webBtn = document.getElementById('modal-live-web');
        const mobileBtn = document.getElementById('modal-live-mobile');
        const githubBtn = document.getElementById('modal-github');

        if (data.liveWeb) {
          webBtn.style.display = 'inline-flex';
          webBtn.href = data.liveWeb;
        } else {
          webBtn.style.display = 'none';
        }

        if (data.liveMobile) {
          mobileBtn.style.display = 'inline-flex';
          mobileBtn.href = data.liveMobile;
        } else {
          mobileBtn.style.display = 'none';
        }

        if (data.github) {
          githubBtn.style.display = 'inline-flex';
          githubBtn.href = data.github;
        } else {
          githubBtn.style.display = 'none';
        }

        modalOverlay.classList.add('active');
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
}

/* Country to Dynamic State Selector */
const countryStateData = {
  "India": [
    "Jammu & Kashmir", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", 
    "Telangana", "Uttar Pradesh", "West Bengal", "Gujarat", "Punjab", 
    "Haryana", "Kerala", "Rajasthan", "Bihar", "Madhya Pradesh", "Other State"
  ],
  "United States": [
    "California", "New York", "Texas", "Florida", "Illinois", 
    "Washington", "Massachusetts", "Georgia", "North Carolina", "Other State"
  ],
  "United Kingdom": [
    "England", "Scotland", "Wales", "Northern Ireland"
  ],
  "United Arab Emirates": [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"
  ],
  "Canada": [
    "Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Nova Scotia", "Other Province"
  ],
  "Australia": [
    "New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania"
  ],
  "Saudi Arabia": [
    "Riyadh", "Makkah", "Eastern Province", "Madinah", "Asir"
  ],
  "Other": [
    "Select State / Region"
  ]
};

function initLocationSelector() {
  const countrySelect = document.getElementById('client-country');
  const stateSelect = document.getElementById('client-state');

  if (!countrySelect || !stateSelect) return;

  function updateStates() {
    const selectedCountry = countrySelect.value;
    const states = countryStateData[selectedCountry] || countryStateData["Other"];

    stateSelect.innerHTML = states.map(st => `<option value="${st}">${st}</option>`).join('');
  }

  countrySelect.addEventListener('change', updateStates);
  updateStates();
}

/* Custom Software Order Form Handler with WhatsApp Integration */
function initOrderForm() {
  const form = document.getElementById('mon-order-form');
  const statusMsg = document.getElementById('form-status-msg');

  if (!form || !statusMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const email = document.getElementById('client-email').value;
    const company = document.getElementById('client-company').value;
    const service = document.getElementById('client-service').value;
    const country = document.getElementById('client-country').value;
    const state = document.getElementById('client-state').value;
    const district = document.getElementById('client-district').value;
    const city = document.getElementById('client-city').value;
    const pincode = document.getElementById('client-pincode').value;
    const address = document.getElementById('client-address').value;
    const message = document.getElementById('client-message').value;

    // Build formatted WhatsApp message text
    const whatsappText = 
`🚀 *NEW PROJECT ORDER REQUEST - MON LABS*

👤 *Client Name:* ${name}
📞 *Phone:* ${phone}
✉️ *Email:* ${email}
🏢 *Company / School:* ${company}
💼 *Service Required:* ${service}

📍 *LOCATION DETAILS:*
• Country: ${country}
• State: ${state}
• District: ${district}
• City: ${city}
• PIN Code: ${pincode}
• Address: ${address}

📝 *PROJECT REQUIREMENTS:*
${message}`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappNumber = "919070505419";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;

    statusMsg.style.display = 'block';
    statusMsg.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981; padding: 1.5rem; border-radius: 12px; font-weight: 600; text-align: center;">
        🎉 Thank you, ${name}! Your MON Labs project order inquiry has been compiled.<br>
        <p style="margin: 0.5rem 0 1rem 0; font-weight: 400; font-size: 0.9rem; color: #e2e8f0;">Opening WhatsApp to send order details directly to Owais Manzoor (+91 9070505419)...</p>
        <a href="${whatsappUrl}" target="_blank" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-size: 0.95rem; background: #25D366; color: #fff; border: none; font-weight: 700; box-shadow: 0 0 20px rgba(37, 211, 102, 0.4);">
          💬 Send Directly via WhatsApp (+91 9070505419)
        </a>
      </div>
    `;

    // Automatically trigger opening WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    form.reset();
    initLocationSelector();
  });
}

function copyContactEmail() {
  const email = "bhatowais419@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email address copied to clipboard: " + email);
  });
}
