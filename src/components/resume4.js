import React, { useRef, useEffect, useState } from "react";
import "../styles/resume4.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Import useLocation

// Helper component for section titles with circled first letter
const SectionTitle = ({ title }) => {
  if (!title || title.length === 0) return null;

  const firstLetter = title.charAt(0);
  const restOfTitle = title.slice(1);

  return (
    <h3 className="section_title">
      <span className="first_letter_circle">{firstLetter}</span>
      {restOfTitle}
    </h3>
  );
};

// Main Resume Component
const Resume4 = () => {
  const location = useLocation(); // Use useLocation to access state
  const formData = location.state?.formData; // Get formData from state

  // Ref for the main resume container (for PDF export)
  const resumeRef = useRef(null);
  // Ref for the body container where columns and visual elements reside
  const resumeBodyRef = useRef(null);

  // Refs for each section to calculate their positions
  const contactSectionRef = useRef(null);
  const educationSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const languagesSectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const workSectionRef = useRef(null);

  // State to store the calculated positions { top: number, side: 'left' | 'right' }
  const [linePositions, setLinePositions] = useState([]);

  // Effect hook to calculate line positions when the component mounts or formData changes
  useEffect(() => {
    const calculatePositions = () => {
      if (!resumeBodyRef.current) return;
      const newPositions = [];
      const getPosition = (ref, side) => {
        if (ref.current && resumeBodyRef.current) {
          const sectionRect = ref.current.getBoundingClientRect();
          const bodyRect = resumeBodyRef.current.getBoundingClientRect();
          let top = Math.round(sectionRect.bottom - bodyRect.top - 1);
          if (top >= 0) return { top, side };
        }
        return null;
      };

      if (contactSectionRef.current && profileSectionRef.current) {
        const contactPos = getPosition(contactSectionRef, 'left');
        const profilePos = getPosition(profileSectionRef, 'right');
        if (contactPos && profilePos) {
          const commonTop = Math.max(contactPos.top, profilePos.top) + 25;
          newPositions.push({ top: commonTop, side: 'left' });
          newPositions.push({ top: commonTop, side: 'right' });
        }
      }
      // Education
      if (educationSectionRef.current) {
        const eduPos = getPosition(educationSectionRef, 'left');
        if (eduPos) newPositions.push({ top: eduPos.top + 25, side: 'left' });
      }
      // Skills
      if (skillsSectionRef.current) {
        const skillsPos = getPosition(skillsSectionRef, 'left');
        if (skillsPos) newPositions.push({ top: skillsPos.top + 25, side: 'left' });
      }
      setLinePositions(newPositions);
    };

    const timerId = setTimeout(calculatePositions, 100);
    window.addEventListener('resize', calculatePositions);
    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', calculatePositions);
    };
  }, [formData]);

  // PDF Download Function
  const downloadPDF = () => {
    const resumeElement = resumeRef.current;
    if (!resumeElement) return;
    const visualElements = resumeElement.querySelector('.visual_elements');
    const origDisplay = visualElements?.style.display;
    if (visualElements) visualElements.style.display = 'none';

    html2canvas(resumeElement, { scale: 2, useCORS: true, logging: false })
      .then((canvas) => {
        if (visualElements) visualElements.style.display = origDisplay;
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        const pageHeight = pdf.internal.pageSize.getHeight();
        if (pdfHeight > pageHeight) console.warn("Resume content might exceed single A4 page height.");
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        const fileName = data?.name ? `${data.name.replace(/\s+/g, '_')}_resume.pdf` : "resume.pdf";
        pdf.save(fileName);
      })
      .catch(err => {
        console.error("Error generating PDF:", err);
        if (visualElements) visualElements.style.display = origDisplay;
      });
  };

  // Default data structure if formData is not provided
  const defaultData = {
    name: "RICHARD SANCHEZ",
    role_applying: "Marketing Manager",
    contact: { phone: "+123-456-7890", email: "hello@reallygreatsite.com", linkedin: "linkedin.com/in/richard_sanchez", github: "github.com/richardsanchez" },
    education: {
      college: "BORCELLE UNIVERSITY",
      cgpa: "3.8 / 4.0",
      gradyr: "2030",
      school: "BORCELLE UNIVERSITY",
      marks: "3.8 / 4.0"
    },
    skills: [{ name: "Project Management", level: "Experienced" }, { name: "Public Relations", level: "Intermediate" }, { name: "Teamwork", level: "Experienced" }],
    languages: ["English", "Hindi"],
    summary: "Experienced and results-driven Marketing Manager with a proven track record in developing and executing successful marketing strategies...",
    experience: [
      { organization: "Borcelle Studio", startDate: "2030", endDate: "PRESENT", role: "Marketing Manager & Specialist", description: "Led the development and implementation of comprehensive marketing strategies..." },
      { organization: "Fauget Studio", startDate: "2025", endDate: "2029", role: "Marketing Manager & Specialist", description: "Conducted market research and oversaw the creation of engaging content..." }
    ],
    projects: [
      { name: "Project Alpha", description: "Developed a responsive web application using React..." },
      { name: "Campaign Beta", description: "Led a social media campaign that increased engagement by 40%..." }
    ]
  };

  // Process and format the form data
  const processFormData = (rawData) => {
    if (!rawData) return defaultData;

    // Create a new formatted data object
    const processed = {
      name: rawData.name || defaultData.name,
      role_applying: rawData.role_applying || defaultData.role_applying,
      summary: rawData.summary || defaultData.summary,
      contact: {
        phone: rawData.contact?.phone || defaultData.contact.phone,
        email: rawData.contact?.email || defaultData.contact.email,
        linkedin: rawData.contact?.linkedin || rawData.linkedin || defaultData.contact.linkedin,
        github: rawData.contact?.github || rawData.github || defaultData.contact.github
      },
      education: {
        // College data
        college: rawData.education?.college || defaultData.education.college,
        cgpa: rawData.education?.cgpa || defaultData.education.cgpa,
        gradyr: rawData.education?.gradyr || defaultData.education.gradyr,
        // School data
        school: rawData.education?.school || defaultData.education.school,
        marks: rawData.education?.marks || defaultData.education.marks
      },
      skills: rawData.skills?.length ? rawData.skills : defaultData.skills,
      languages: ["English", "Hindi"], // Default languages
      experience: rawData.experience?.length ?
        rawData.experience.filter(exp => exp.organization) : defaultData.experience,
      projects: rawData.projects?.length ?
        rawData.projects.filter(proj => proj.name) : defaultData.projects
    };

    return processed;
  };

  // Merge provided formData with defaults
  const data = processFormData(formData);

  return (
    <div className="resume4_page">
      <div className="button_container">
        <button className="download_button" onClick={downloadPDF}>Download as PDF</button>
      </div>
      <div className="resume4_container" ref={resumeRef}>
        <div className="resume4_header">
          <div className="header_line_left"></div>
          <div className="header_circle_left"></div>
          <div className="header_line_right"></div>
          <div className="header_circle_right"></div>
          <h1 className="resume4_name">{data.name.toUpperCase()}</h1>
          <h2 className="resume4_role">{data.role_applying}</h2>
        </div>

        <div className="resume4_body" ref={resumeBodyRef}>
          <div className="resume4_left">
            <section className="contact_section" ref={contactSectionRef}>
              <SectionTitle title="CO N T A C T" />
              <div className="contact_item"><FaPhone className="contact_icon" /><span className="contact_text">{data.contact.phone}</span></div>
              <div className="contact_item"><FaEnvelope className="contact_icon" /><span className="contact_text">{data.contact.email}</span></div>
              <div className="contact_item"><FaLinkedin className="contact_icon" /><span className="contact_text">{data.contact.linkedin}</span></div>
              <div className="contact_item"><FaGithub className="contact_icon" /><span className="contact_text">{data.contact.github}</span></div>
            </section>

            <section className="education_section" ref={educationSectionRef}>
              <SectionTitle title="ED U C A T I O N" />
              {/* College Education */}
              <div>
                <p className="edu_duration">{data.experience[0]?.startDate || "2025"} - {data.education.gradyr || "2030"}</p>
                <p className="edu_institution">{data.education.college}</p>
                <p className="edu_details">• Master of Business Management</p>
              </div>
              {/* School Education */}
              <div>
                <p className="edu_duration">{data.experience[1]?.startDate || "2020"} - {data.experience[0]?.startDate || "2024"}</p>
                <p className="edu_institution">{data.education.school}</p>
                <p className="edu_details">• Bachelor of Business Management</p>
                <p className="edu_details">• GPA: {data.education.marks || data.education.cgpa}</p>
              </div>
            </section>

            <section className="skills_section" ref={skillsSectionRef}>
              <SectionTitle title="SK I L L S" />
              <ul>
                {data.skills.map((skill, idx) => (
                  <li key={idx}>{skill.name}</li>
                ))}
              </ul>
            </section>

            <section className="languages_section" ref={languagesSectionRef}>
              <SectionTitle title="LA N G U A G E S" />
              <ul>
                {data.languages.map((lang, idx) => (
                  <li key={idx}>{lang}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="resume4_right">
            <section className="profile_section" ref={profileSectionRef}>
              <SectionTitle title="PR O F I L E  S U M M A R Y" />
              <p>{data.summary}</p>
            </section>

            <section className="work_section" ref={workSectionRef}>
              <SectionTitle title="WO R K E X P E R I E N C E" />
              {data.experience.map((exp, idx) => (
                exp.organization && (
                  <div className="work_entry" key={idx}>
                    <div className="work_header">
                      <strong>{exp.organization}</strong>
                      <span>{exp.startDate} - {exp.endDate || "PRESENT"}</span>
                    </div>
                    <p className="work_role">{exp.role}</p>
                    {exp.description && (
                      <ul>
                        {exp.description.split('\n').map((item, i) => (
                          item.trim() ? <li key={i}>{item}</li> : null
                        ))}
                      </ul>
                    )}
                  </div>
                )
              ))}

              {/* Projects Section */}
              {data.projects && data.projects.length > 0 && (
                <div className="projects_section">
                  <SectionTitle title="PR O J E C T S" />
                  {data.projects.map((proj, idx) => (
                    proj.name && (
                      <div className="project_entry" key={idx}>
                        <p className="project_name"><strong>{proj.name}</strong></p>
                        <p className="project_description">{proj.description}</p>
                      </div>
                    )
                  ))}
                </div>
              )}
            </section>
          </div>

          {resumeBodyRef.current && (
            <div className="visual_elements">
              <div className="vertical_divider"></div>
              {linePositions.map((pos, index) => {
                const isLeft = pos.side === 'left';
                const lineStyle = { top: `${pos.top}px`, left: isLeft ? '0%' : '35%', width: isLeft ? '35%' : '65%' };
                return (
                  <div key={index} className="horizontal_divider" style={lineStyle}>
                    {isLeft && <div className="intersection_circle"></div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume4;