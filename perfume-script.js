// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
const nav = document.querySelector(".nav")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
const animateElements = document.querySelectorAll(".note-card, .collection-item, .story-content")
animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  observer.observe(el)
})

// Form submission handler
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)

    // Here you would typically send the data to a server
    console.log("Form submitted with data:", Object.fromEntries(formData))

    // Show success message (you can customize this)
    alert("Thank you for your interest in SYLVA! We will contact you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Parallax effect for hero image
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroImage = document.querySelector(".perfume-bottle")

  if (heroImage && scrolled < window.innerHeight) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`
  }
})

// Add to cart functionality (placeholder)
const addToCartButtons = document.querySelectorAll(".collection-item .btn-small")
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const item = e.target.closest(".collection-item")
    const itemName = item.querySelector("h3").textContent
    const itemPrice = item.querySelector(".collection-price").textContent

    console.log(`Added to cart: ${itemName} - ${itemPrice}`)

    // Visual feedback
    const originalText = button.textContent
    button.textContent = "Added!"
    button.style.background = "var(--color-wood)"

    setTimeout(() => {
      button.textContent = originalText
      button.style.background = ""
    }, 2000)
  })
})

// Preload images for better performance
window.addEventListener("load", () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded")
    } else {
      img.addEventListener("load", () => {
        img.classList.add("loaded")
      })
    }
  })
})
