import React from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import '../styles/resume4.css';

const ResumeTemplate = () => {
  const location = useLocation();
  const formData = location.state?.formData;




const sampleData = {
  name: "AARAV SHARMA",
  contact: {
    email: "aarav.sharma@email.com",
    phone: "9876543210",
    linkedin: "https://linkedin.com/in/aaravsharma",
    github: "https://github.com/aaravsharma"
  },
  summary:
    "Dedicated and detail-oriented computer science student with a keen interest in full-stack development, cloud computing, and AI-based systems. Proven ability to work on collaborative projects and deliver scalable software solutions.",
  education: {
    college: "Greenfield Institute of Technology",
    course: "B.Tech, Computer Science and Engineering",
    gradyr: "2020 - 2024",
    cgpa: "8.8",
    school: "St. Xavier's Senior Secondary School",
    marks: "93"
  },
  skills: [
    { name: "FRONT-END DEVELOPMENT", level: "Intermediate" },
    { name: "CLOUD COMPUTING", level: "Beginner" },
    { name: "DATABASE MANAGEMENT", level: "Experienced" },
    { name: "AI/ML", level: "Intermediate" }
  ],
  achievements: [
    "Built a MERN stack project deployed on Heroku.",
    "Implemented RESTful APIs using Node.js and Express.",
    "Created predictive ML models using scikit-learn.",
    "Deployed web apps using AWS EC2 and S3.",
    "Optimized SQL queries for faster data retrieval."
  ],
  projects: [
    {
      name: "Smart Attendance System",
      description: "A face recognition-based attendance tracking system developed with Python and OpenCV.",
      details: [
        "Used Haar cascade and deep learning models for recognition",
        "Integrated with SQLite for database management",
        "Deployed desktop version with Tkinter interface"
      ]
    },
    {
      name: "E-Commerce Web App",
      description: "A dynamic e-commerce site built using React, Node.js, and MongoDB.",
      details: [
        "User authentication using JWT",
        "Integrated Razorpay for payment gateway",
        "Admin panel for inventory management"
      ]
    }
  ],
  experience: [
    {
      role: "Software Intern",
      organization: "InnovaTech Pvt. Ltd.",
      startDate: "June 2023",
      endDate: "Sept 2023",
      description: "Worked on building internal dashboards and API services.",
      achievements: [
        "Developed frontend components using React",
        "Created REST APIs with Express.js",
        "Participated in daily Scrum and sprint planning"
      ]
    }
  ]
};

  
  const data = formData.name ? formData : sampleData;

  const downloadPDF = () => {
    const resumeElement = document.querySelector(".resume-container");
    if (resumeElement) {
      html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        const fileName = data?.name
          ? `${data.name.replace(/\s+/g, '_')}_resume.pdf`
          : "resume.pdf";
        pdf.save(fileName);
      });
    }
  };



  return (
    <div className="resume-page">
      <div className="button-container">
        <button className="download-button" onClick={downloadPDF}>
          Download as PDF
        </button>
      </div>

      <div className="resume-container">
        {/* Header */}
        <div className="header">
          <h1 className="name">{data.name}</h1>
          <div className="contact-info">
            {data.contact?.email && (
              <div className="contact-item">✉ {data.contact.email}</div>
            )}
            {data.contact?.phone && (
              <div className="contact-item">☎ {data.contact.phone}</div>
            )}
            {data.contact?.linkedin && (
              <div className="contact-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="contact-icon" />
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            )}
            {data.contact?.github && (
              <div className="contact-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contact-icon" />
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="summary-section">
            <h2 className="section-title">PROFILE SUMMARY</h2>
            <p className="summary-text">{data.summary}</p>
          </div>
        )}

        {/* Main Content */}
        <div className="two-column-layout">
          {/* Left Column */}
          <div className="left-column">
            {/* Education */}
            <div className="section">
              <h2 className="section-title">EDUCATION</h2>
              <hr className="horizontal" />
              <div className="education-item">
                <strong>{data.education.college}</strong>
                <br></br>
                <div className="course">B.Tech,  </div>
                <div className="course">{data.education.course}</div>
                <div className="education-period">{data.education.gradyr}</div>
                <div className="education-gpa"><strong>CGPA:</strong> {data.education.cgpa}</div>
              </div>
              <div className="education-item">
                <strong>{data.education.school}</strong>
                <div className="senior">Senior Secondary</div>
                <div><strong>Percentage:</strong> {data.education.marks}%</div>
              </div>
            </div>

            {/* Skills */}
            <div className="section">
              <h2 className="section-title">SKILLS</h2>
              <hr className="horizontal" />
              <div className="skills-container">
                {data.skills?.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-category">{skill.name}:</div>
                    <div className={`skill-level level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Under Skills */}
            {data.achievements?.length > 0 && (
              <div className="section">
                <h2 className="section-title">ACHIEVEMENTS</h2>
                <hr className="horizontal" />
                <ul className="achievement">
                  {data.achievements?.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Experience */}
            {data.experience?.length > 0 && (
              <div className="section">
                <h2 className="section-title">EXPERIENCE</h2>
                <hr className="horizontal" />
                {data.experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                  
                    <div className="experience-company">{exp.organization}</div>
                    <div className="experience-title">{exp.role}</div>
                    <div className="experience-period">{exp.startDate} - {exp.endDate}</div>
                    <p className="experience-description">{exp.description}</p>
                    <ul className="experience-achievements">
                      {exp.achievements?.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {data.projects?.length > 0 && (
              <div className="section">
                <h2 className="section-title">PROJECTS</h2>
                <hr className="horizontal" />
                {data.projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-name">{project.name}</div>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-details">
                      {project.details?.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-text">
            Available for internships and collaborative projects from May 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;