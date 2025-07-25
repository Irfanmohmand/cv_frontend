import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import e1 from "../images/e1.png"
import e2 from "../images/e2.png"
import e3 from "../images/e3.png"
import e4 from "../images/e4.png"
import f1 from "../images/f1.png"
import f2 from "../images/f2.png"
import f3 from "../images/f3.png"
import f4 from "../images/f4.png"
import axios from "axios";
import { toast } from "react-hot-toast"


gsap.registerPlugin(ScrollTrigger);

function Home() {
  const stepsRef = useRef([]);
  const boxesRef = useRef([]);


  const [name, setName] = useState("Irfan");
  const [email, setEmail] = useState("irfanmohmand987");
  const [message, setMessage] = useState("Message");


  // submit user details form 
  const handleForm = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/userdetails`, {
        name,
        email,
        message
      }, {
        withCredentials: true
      });

      const data = response.data;

      toast.success("Your message has been sent. Thanks!")
      console.log("Response", data);

    } catch (error) {
      console.log("Error in user details submitting.", error.message);

    }
  }

  const skillsData = [
    {
      title: "Frontend",
      color: "text-cyan-400",
      skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "HTML5 / CSS3 / JS"],
      direction: "left"
    },
    {
      title: "Animation",
      skills: ["GSAP", "Framer Motion", "Lottie", "ScrollTrigger", "CSS Transitions"],
      color: "text-yellow-400",
      direction: "right"
    },
    {
      title: "Backend",
      color: "text-pink-400",
      skills: ["Node.js", "Express.js", "REST APIs", "Mongoose"],
      direction: "right"
    },
    {
      title: "Database & Tools",
      color: "text-yellow-400",
      skills: ["MongoDB", "Cloudinary", "Stripe API", "JWT / Cookies"],
      direction: "left"
    },
    {
      title: "Other Skills",
      color: "text-green-400",
      skills: ["Git & GitHub", "Responsive Design", "Third-party APIs", "Deployment (Render / Vercel)"],
      direction: "right"
    }
  ];


  useEffect(() => {
    stepsRef.current.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 80, rotateX: -10, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'bottom 10%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
            markers: false,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      const direction = skillsData[index].direction === "left" ? -100 : 100;

      // Set initial off-screen position
      gsap.set(box, { opacity: 0, x: direction });

      ScrollTrigger.create({
        trigger: box,
        start: "top 85%",
        end: "bottom 10%",
        onEnter: () => {
          gsap.to(box, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          // Return to original entrance direction
          gsap.to(box, {
            opacity: 0,
            x: direction,
            duration: 1,
            ease: "power3.in",
          });
        },
      });
    });
  }, []);



  const projects = [
    {
      title: "Personal Course Selling App",
      description: "I made this mern stack web application for my personal course selling app.",
      github: "https://github.com/Irfanmohmand/new-course-selling-app",
      images: [e1, e2, e3, e4],
    },
    {
      title: "Shop Nest E-commerce Web App",
      description: "I made this mern stack e-commerce app for my final year project.",
      github: "https://github.com/Irfanmohmand/shop-nest",
      images: [f1, f2, f3, f4],
    },
    {
      title: "More On updating",
      description: "More On updating",
      github: "More On updating",
      images: ["More On updating"],
    },

    {
      title: "More On updating",
      description: "More On updating",
      github: "More On updating",
      images: ["More On updating"],
    },

    // Add more projects here
  ];

  const [fullImage, setFullImage] = useState(null);

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Creative Studio',
      duration: 'Jan 2023 - Present',
      description: 'Built responsive websites using React.js, Tailwind CSS, and Next.js. Focused on performance and mobile-first design.'
    },
    {
      title: 'Backend Developer',
      company: 'Tech Solutions',
      duration: 'Jul 2022 - Dec 2022',
      description: 'Created RESTful APIs with Node.js and Express. Integrated MongoDB for database management.'
    },
    {
      title: 'Web Design Intern',
      company: 'Designify',
      duration: 'Mar 2022 - Jun 2022',
      description: 'Assisted in UI/UX design, prototyping using Figma, and converting designs into HTML/CSS.'
    }
  ];

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="w-full min-h-screen bg-zinc-900 px-4 py-20 flex items-center justify-center"
      >
        <div className="w-full max-w-6xl grid lg:grid-cols-2 grid-cols-1 items-center gap-12">

          {/* Left - Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-zinc-800 w-full rounded-xl shadow-2xl p-6 flex flex-col items-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
            />
            <h3
              style={{ fontFamily: 'Caprasimo, serif' }}
              className="mt-4 font-medium text-lg text-zinc-300 text-center"
            >
              Irfan Ullah Mohmand
            </h3>
            <p className="text-center font-semibold text-zinc-400">
              MERN Stack Web Developer
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600 transition">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:irfanmohmand987@gmail.com" className="text-pink-400 hover:text-pink-600 transition">
                <MdEmail size={22} />
              </a>
              <a href="tel:+923465979993" className="text-green-400 hover:text-green-600 transition">
                <FaPhoneAlt size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right - Intro Text */}
          <motion.div
            className="p-6 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              style={{ fontFamily: 'Caprasimo, serif' }}
              className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 animate-pulse"
            >
              Code. Design. Deliver.
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                Irfan Ullah Mohmand
              </span>
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              MERN stack developer crafting beautiful UIs, building smart backends,
              and blending AI to deliver intelligent, responsive, and scalable
              digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='w-full min-h-screen bg-zinc-900 text-white py-20 px-4 flex flex-col items-center'>
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: 'Caprasimo, serif' }}
            className='text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 animate-pulse'
          >
            About
          </motion.h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1400px]">
          {[
            {
              title: 'Step 1: Introduction',
              desc: 'I’m a full-stack web developer specializing in the MERN stack. I create seamless, scalable, and visually appealing web apps.',
            },
            {
              title: 'Step 2: Technical Skills',
              desc: 'MongoDB, Express.js, React.js, Node.js, Redux Toolkit, Tailwind CSS, REST APIs, GitHub, Cloudinary, and Stripe.',
            },
            {
              title: 'Step 3: What I Build',
              desc: 'From eCommerce platforms and admin dashboards to responsive portfolios — I solve real-world problems with code.',
            },
            {
              title: 'Step 4: Core Values',
              desc: 'Clean code, performance, and user-first design are the principles I code by.',
            },
            {
              title: 'Step 5: AI Integration',
              desc: 'I use AI tools and APIs to automate workflows and personalize user experiences.',
            },
            {
              title: 'Step 6: Soft Skills',
              desc: 'Lifelong learner, effective communicator, and passionate about team collaboration.',
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="p-6 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.03] hover:border-pink-500 hover:shadow-pink-500/30 group relative overflow-hidden"
            >
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative z-10">
                <h2
                  className='text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent'
                  style={{ fontFamily: 'Winky Rough, sans-serif' }}
                >
                  {item.title}
                </h2>
                <p className='text-zinc-300 font-medium'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full min-h-screen bg-zinc-900 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: 'Caprasimo, serif' }}
            className='text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 animate-pulse'
          >
            Skills
          </motion.h1>

          <p className="text-lg md:text-xl text-zinc-300 mt-4 mb-10">
            I’m a Full Stack Developer passionate about building fast, scalable, and visually appealing web apps.
            I work mainly with the MERN stack, and I love exploring modern technologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillsData.map((box, index) => (
              <div
                key={index}
                ref={el => boxesRef.current[index] = el}
                className="bg-zinc-800 p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                <h3 className={`font-bold text-2xl mb-3 ${box.color}`}>{box.title}</h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  {box.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* projects section */}
      <section id="projects" className="w-full bg-zinc-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Caprasimo, serif' }}
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-1 p-2">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img} // ✅ Use dynamic image
                      alt={`project-img-${i}`}
                      onClick={() => setFullImage(img)} // ✅ Show clicked image
                      className="w-[90%] mx-4 h-28 object-cover rounded-xl cursor-pointer hover:scale-105 transition duration-300"
                    />
                  ))}

                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-sm transition"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fullscreen Image Popup */}
          {fullImage && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
              onClick={() => setFullImage(null)}
            >
              <img
                src={fullImage}
                alt="full"
                className="max-w-4xl w-full max-h-[90vh] rounded-xl shadow-lg border border-white"
              />
            </div>
          )}
        </div>
      </section>


      {/* experience section */}
      <section id="experience" className="w-full bg-zinc-900 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Caprasimo, serif' }}
          >
            Experience
          </motion.h2>

          <div className="relative border-l-4 border-cyan-500 pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[0.65rem] top-2 bg-cyan-500 w-4 h-4 rounded-full border-4 border-zinc-900" />
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400">{exp.title}</h3>
                <p className="text-sm text-zinc-400 mb-1">{exp.company} — <span>{exp.duration}</span></p>
                <p className="text-zinc-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact page */}
      <section id="contact" className="w-full bg-zinc-900 text-white py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Caprasimo, serif' }}
          >
            Contact Me
          </h2>

          <motion.p
            className="text-zinc-300 mb-10 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Got a question, opportunity, or just want to connect? Drop me a message and I’ll get back to you as soon as possible.
          </motion.p>

          <motion.form
            onSubmit={handleForm}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name='name'
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name='email'
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name='message'
              placeholder="Your Message"
              rows="6"
              className="md:col-span-2 p-3 rounded-lg bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="md:col-span-2 w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
            >
              🚀 Send Message
            </button>
          </motion.form>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="mailto:youremail@example.com" className="hover:text-pink-400 transition-colors duration-200">📧 irfanmohmand987@gmail.com</a>
            <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors duration-200">📞 +92 3465979993</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors duration-200">🔗 LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors duration-200">💻 GitHub</a>
          </motion.div>
        </motion.div>
      </section>


    </>
  );
}

export default Home;
