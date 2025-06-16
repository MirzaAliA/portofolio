import { useState } from 'react'
import { List, InstagramLogo, LinkedinLogo, WhatsappLogo, GithubLogo, ArrowFatUp, ArrowFatLineUp } from "@phosphor-icons/react"
import './App.css'
import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const listSkills = [
  {
    skill: "Fullstack"
  },
  {
    skill: "HTML"
  },
  {
    skill: "CSS"
  },
  {
    skill: "JavaScript"
  },
  {
    skill: "TypeScript"
  },
  {
    skill: "ReactJs"
  },
  {
    skill: "NodeJs"
  },
  {
    skill: "ExpressJs"
  },
  {
    skill: "GIT"
  },
  {
    skill: "Github"
  },
  {
    skill: "Responsive Design"
  }
]

export default function App() {

  const [skills, setSkills] = useState(listSkills);

  return (
    <>
      <Navbar />
      <BackToTopButton />
      <Header />
      <AboutMe skills={skills} />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  )
}

function Navbar() {

  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <nav className="navbar fixed-top" id="navbar">
      <div className="logo">
        <a href="#header">
          <img src="/logo-mirza.png" alt="" />
        </a>
      </div>
      <div className="menu-icon" onClick={() => { setMenuIcon(!menuIcon) }}>
        <List size={32} />
      </div>
      <ul className={menuIcon ? "" : "hidden"}>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/11Wv-Onp-MHMoqf00y3kapEb8ihumEV9r/view?usp=drive_link">Resume</a>
        </li>
      </ul>
    </nav>
  )
}

function Header() {
  return (
    <section className="header" id="header">
      <div className="main-container">
        <section className="hero">
          <div className="hero-left">
            <h3 className="pre-title">MY NAME IS..</h3>
            <h1 className="hero-name">Mirza Ali Abhipraya</h1>
            <p className="hero-desc">A full-stack web developer who embarks on an endless journey of learning and growth, forging his path toward greatness.</p>
          </div>
          <div className="hero-right">
            <img src="/hero.svg" alt="" />
          </div>
        </section>
      </div>
    </section>
  )
}

function AboutMe({ skills }) {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me-title">
        <h1 className="pre-title">About Me</h1>
        <h3 className="section-title about-me-title">Here you will find more
          information about me, what I do, and my current skills mostly in
          terms of programming and technology</h3>
      </div>
      <div className="about-me-main-container">
        <div className="about-me-left">
          <h2>Get To Know Me</h2>
          <p>My Name is Mirza Ali Abhipraya, a fresh graduate of Computer Engineering from Diponegoro University with over three months of internship experience and extensive project involvement. A dedicated and diligent individual with hands-on experience in various projects.</p>
          <p> Proficient in both front-end and back-end web development using JavaScript. Highly passionate about technology, particularly in software development and product innovation.</p>
        </div>
        <div className="about-me-right">
          <h2>My Skills</h2>
          <ul className="skill-grid">
            {skills.map((skill) => (
              <Skill skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Skill({ skill }) {

  return (
    <li className="skill">{skill.skill}</li>
  )
}

function Portofolio() {
  return (
    <section className="portofolio" id="portofolio">
      <div className="portofolio-title">
        <h3 className="pre-title">Portofolio</h3>
        <h1 className="section-title portofolio-title">My Case Study</h1>
      </div>
      <div className="portofolio-main-container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="swiper-review"
          slidesPerGroup={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            540: {
              slidesPerView: 1.5,
              spaceBetween: 30
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 40
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 40
            },
          }}
        >
          <SwiperSlide>
            <a href="https://saverentalsemarang.vercel.app/">
              <div className="portofolio-grid-item">
                <img className="image-portofolio" src="/SaveRental.png" alt="" />
                <h2>Save Rental Semarang</h2>
                <p>Website branding for Save Rental Motor Semarang</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://charity-animals.vercel.app/">
              <div className="portofolio-grid-item">
                <img className="image-portofolio" src="/CharityAnimals.png" alt="" />
                <h2>Charity Animals</h2>
                <p>Re-create "isa-charity.webflow.io" website.</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://portfolio-simple-e-commerce.vercel.app/">
              <div className="portofolio-grid-item">
                <img className="image-portofolio" src="/ecommerce.png" alt="" />
                <h2>Simple E-Commerce</h2>
                <p>E-commerce platform</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/MirzaAliA/ews_tanah_longsor">
              <div className="portofolio-grid-item">
                <img className="image-portofolio" src="/logo-fix.png" alt="" />
                <h2>Lawas-TJ</h2>
                <p>Web-based Early Warning System application for landslide in Tinjomoyo</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/MirzaAliA/cerpenku_id">
              <div className="portofolio-grid-item">
                <img className="image-portofolio" src="/cerpenku.png" alt="" />
                <h2>Cerpenku.id</h2>
                <p>Restful API Development for cerpen posts with following system</p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h1 className="pre-title">Contact</h1>
        <h3 className="section-title contact-title">Feel free to Contact me through email, phone or by submitting the form below and I will get back to you as soon as possible</h3>
      </div>
      <div className="contact-forms">
        <form action="">
          <label htmlFor="fullname">Name</label>
          <input className="contact-text" type="text" id="fullname" placeholder="John Doe" />
          <label htmlFor="email">Email</label>
          <input className="contact-text" type="text" id="email" placeholder="johndoe@gmail.com" />
          <label htmlFor="message">Message</label>
          <input className="contact-text" type="text" id="message" placeholder='Your message here...' />
          <input className="contact-submit" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container-top">
        <div className="footer-title">
          <h6>About</h6>
          <p className="text-justify">A dedicated and diligent individual with hands-on experience in various projects. Proficient in both front-end and back-end web development using JavaScript. Highly passionate about technology, particularly in software development and product innovation.</p>
        </div>

        <div className="footer-contact">
          <h6>Contact Me</h6>
          <ul className="footer-contact">
            <li className="gmail">mirzaaliabhipraya@gmail.com</li>
            <li>(+62) 85747524052</li>
          </ul>
        </div>

        <div className="footer-quick">
          <h6>Quick Links</h6>
          <ul className="footer-quick">
            <li><a href="#navbar">Home</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#portofolio">Portofolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1FDrHZQT1WZxO5LvJme1-7RJtZdHx7vSE/view?usp=drive_link">Resume</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-container-bottom">
        <div className="footer-copyright">
          <p className="copyright-text">Created by
            <a href="#"> Mirza Ali Abhipraya</a>.
          </p>
        </div>

        <div className="footer-social">
          <ul className="social-icons">
            <a href="https://github.com/MirzaAliA"><GithubLogo size={32} /></a>
            <a href="https://instagram.com/mirzalbpr"><InstagramLogo size={32} /></a>
            <a href="https://linkedin.com/in/mirza-ali-abhipraya"><LinkedinLogo size={32} /></a>
            <a href="https://wa.me/6285747524052"><WhatsappLogo size={32} /></a>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function BackToTopButton() {

  const [isScrollY, setIsScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrollY(true)
      } else {
        setIsScrollY(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <a className={isScrollY ? "backtotopactive" : "backtotop"} href="#header">
      <ArrowFatLineUp size={32} />
    </a>
  )
}


