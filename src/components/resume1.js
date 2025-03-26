import "../styles/resume1.css";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { formData } = location.state || {};

  const downloadPDF = () => {
    const resumeElement = document.querySelector(".resume1_container");
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

        const fileName = formData?.name ? `${formData.name}_resume.pdf` : "resume.pdf";
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
      <div className="resume1_page">
        <div className="button_container">
          <button className="download_button" onClick={downloadPDF}>
            Download as PDF
          </button>
        </div>
        <div className="resume1_container">
          <h1 id="name" style={{ textTransform: "uppercase" }}>
            {formData.name || "Your Name"}
          </h1>
          <h2 id="role" style={{ textTransform: "uppercase" }}>
            {formData.role_applying || "Your Role"}
          </h2>
          <p className="info_p">
            {formData.contact.email || "your.email@example.com"} |{" "}
            {formData.contact.phone || "123-456-7890"} |{" "}
            {formData.contact.linkedin || "linkedin.com/in/yourprofile"} |{" "}
            {formData.contact.github || "github.com/yourusername"}
          </p>

          <section>
            <h3 id="summary">Summary</h3>
            <p id="sum_p">
              {formData.summary ||
                "UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams. Skilled in leveraging state-of-the-art tools and methodologies to streamline processes and elevate user satisfaction"}
            </p>
          </section>

          <section>
            <h3 id="technical">Technical Skills</h3>
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

          <section>
            <h3 id="prof">Professional Experience</h3>
            {formData.experience.map((exp, index) => (
              <div id="prof_div" key={index}>
                <strong>{exp.organization || "Organization Name"}</strong>
                <span style={{ marginLeft: "20px" }}>
                  <strong>({exp.startDate || "Start Date"} - {exp.endDate || "End Date"})</strong>
                </span>
                <br />
                Role: {exp.role || "Role"}
              </div>
            ))}
          </section>

          <section>
            <h3 id="edu">Education</h3>
            <p>
              <strong>School:</strong>{" "}
              {formData.education.school || "School Name"} 
              <ul id="edu_ul">
                <li>Marks:{" "} {formData.education.marks || "N/A"}</li>
              </ul>
              <strong>College: </strong>
              {formData.education.college || "College Name"}
              <ul id="edu_ul">
                <li>CGPA: {formData.education.cgpa || "N/A"} </li>
                <li>Graduation Year: {formData.education.gradyr || "N/A"}</li>
              </ul>
            </p>
          </section>

          <section>
            <h3 id="proj">Projects</h3>
            {formData.projects.map((project, index) => (
              <div id="proj_div" key={index}>
                <strong>{project.name || "Project Name"}</strong>:{" "}
                {project.description || "Project Description"}
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
};

export default Resume1;
