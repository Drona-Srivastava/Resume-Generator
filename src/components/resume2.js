import "../styles/resume2.css";
import { useNavigate, useLocation } from "react-router-dom";
import Phone_img from "../images/phone.png";
import Email_img from "../images/email.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Resume = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};

  const downloadPDF = () => {
    const resumeElement = document.querySelector(".res2_resume");
    if (resumeElement) {
      // Temporarily remove the border
      const originalBorder = resumeElement.style.border;
      resumeElement.style.border = "none";

      html2canvas(resumeElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        const fileName = formData?.name
          ? `${formData.name}_resume.pdf`
          : "resume.pdf";
        pdf.save(fileName);

        // Restore the original border
        resumeElement.style.border = originalBorder;
      });
    }
  };

  if (!formData) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  } else {
    return (
      <div className="res2_resume1_page">
        <div className="button_container2">
          <button className="res2_download_button" onClick={downloadPDF}>
            Download as PDF
          </button>
        </div>
        <div className="res2_resume">
          <header className="res2_resume-header">
            <div className="res2_left">
              <h1 id="res2_name" style={{ textTransform: "uppercase" }}>
                {formData.name ? (
                  <>
                    <span style={{ fontWeight: 300 }}>
                      {formData.name.split(" ")[0]}
                    </span>{" "}
                    <span style={{ fontWeight: 600 }}>
                      {formData.name.split(" ").slice(1).join(" ")}
                    </span>
                  </>
                ) : (
                  "Your Name"
                )}
              </h1>
              <hr id="res2_hr1"></hr>
              <h2 id="res2_role" style={{ textTransform: "uppercase" }}>
                {formData.role_applying || "Your Role"}
              </h2>
            </div>
            <div className="res2_right">
              <div className="res2_contact-info">
                <p>
                  {formData.contact.phone || "1234567890"}{" "}
                  <img
                    src={Phone_img}
                    alt="Phone"
                    style={{ width: "26px", position: "relative", top: "4px" }}
                  />
                </p>
                <p>
                  {formData.contact.email || "your.email@example.com"}{" "}
                  <img
                    src={Email_img}
                    alt="Email"
                    style={{ width: "26px", position: "relative", top: "4px" }}
                  />
                </p>
              </div>
            </div>
          </header>
          <hr id="res2_hr2"></hr>
          <section className="res2_summary">
            <h3 id="res2_sum">SUMMARY</h3>
            <hr className="res2_section-hr" />
            <p id="res2_sum_p">
              Highly motivated and professional Executive Secretary with over 7
              years of experience providing high-level support to senior
              executives. Proficient in managing calendars, organizing meetings
              and events, handling confidential documents, and communicating
              with internal and external stakeholders. Possess exceptional
              communication and interpersonal skills with a proven ability to
              work independently and as part of a team.
            </p>
          </section>
          <div className="res2_main" style={{ display: "flex" }}>
            <div className="res2_leftmain" style={{ flex: 1, paddingRight: "20px", borderRight: "2px solid #ccc" }}>
              <section className="res2_education">
                <h3 id="res2_edu">EDUCATION</h3>
                <hr className="res2_section-hr" />
                <p>
                  <strong>{formData.education.school || "School Name"}</strong>{" "}
                  <ul id="res2_edu_ul">
                    <li>Marks:{" "} {formData.education.marks || "N/A"}</li>
                  </ul>
                  <strong>{formData.education.college || "College Name"}</strong> - {formData.education.degree || "Degree"}
                  <ul id="res2_edu_ul">
                    <li>CGPA: {formData.education.cgpa || "N/A"} </li>
                    <li>Graduation Year: {formData.education.gradyr || "N/A"}</li>
                  </ul>
                </p>
              </section>
              <section className="res2_projects">
                <h3 id="res2_projects">PROJECTS</h3>
                <hr className="res2_section-hr" />
                <ul>
                  {formData.projects && formData.projects.length > 0
                    ? formData.projects.map((project, index) => (
                        <li key={index}>
                          <strong>{project.name || "Project Name"}</strong> - {project.description || "Project Description"}
                        </li>
                      ))
                    : [
                        { name: "Project A", description: "Description A" },
                        { name: "Project B", description: "Description B" },
                      ].map((defaultProject, index) => (
                        <li key={index}>
                          <strong>{defaultProject.name}</strong> - {defaultProject.description}
                        </li>
                      ))}
                </ul>
              </section>
              <section className="res2_skills">
                <h3 id="res2_skills">SKILLS</h3>
                <hr className="res2_section-hr" />
                <ul>
                  {formData.skills.length > 0
                    ? formData.skills.map((skill, index) => (
                        <li key={index}>
                          {skill.name} - {skill.level}
                        </li>
                      ))
                    : [
                        "Prototyping Tools",
                        "Interaction Design",
                        "Accessibility",
                      ].map((defaultSkill, index) => (
                        <li key={index}>{defaultSkill}</li>
                      ))}
                </ul>
              </section>
            </div>
            <div className="res2_rightmain" style={{ flex: 1, paddingLeft: "20px" }}>
              <section className="res2_experience">
                <h3>EXPERIENCE</h3>
                <hr className="res2_section-hr" />
                {formData.experience.map((exp, index) => (
                  <div id="res2_prof_div" key={index}>
                    <strong>{exp.organization || "Organization Name"}</strong>
                    <span style={{ marginLeft: "20px" }}>
                      <strong>({exp.startDate || "Start Date"} - {exp.endDate || "End Date"})</strong>
                    </span>
                    <br />
                    Role: {exp.role || "Role"}
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Resume;
