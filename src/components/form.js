import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

export default function ResumeForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    role_applying: "",
    summary: "",
    contact: { phone: "", email: "", linkedin: "", github: "" },
    education: {
      school: "",
      marks: "",
      college: "",
      course: "",
      cgpa: "",
      gradyr: "",
    },
    experience: [
      { organization: "", startDate: "", endDate: "", role: "" },
      { organization: "", startDate: "", endDate: "", role: "" },
    ],
    skills: [],
    projects: [
      { name: "", description: "" },
      { name: "", description: "" },
    ],
    achievements: [], // ✅ new
  });

  const print = () => {
    console.log("Form Data:", formData);
  };

  const [skillInput, setSkillInput] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");
  const [achievementInput, setAchievementInput] = useState(""); // ✅ new

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name in prev) {
        return { ...prev, [name]: value };
      } else if (name in prev.contact) {
        return { ...prev, contact: { ...prev.contact, [name]: value } };
      } else if (name in prev.education) {
        return { ...prev, education: { ...prev.education, [name]: value } };
      } else if (name.match(/^(organization|startDate|endDate|role)[12]$/)) {
        const index = name.endsWith("1") ? 0 : 1;
        const updatedExperience = [...prev.experience];
        updatedExperience[index][name.replace(/[12]/, "")] = value;
        return { ...prev, experience: updatedExperience };
      } else if (name.match(/^(project|description)[12]$/)) {
        const index = name.endsWith("1") ? 0 : 1;
        const updatedProjects = [...prev.projects];
        if (name.startsWith("project")) {
          updatedProjects[index].name = value;
        } else {
          updatedProjects[index].description = value;
        }
        return { ...prev, projects: updatedProjects };
      }

      return prev;
    });
  };

  const handleAddSkill = () => {
    if (skillInput.trim() === "") return;
    setFormData({
      ...formData,
      skills: [...formData.skills, { name: skillInput, level: skillLevel }],
    });
    setSkillInput("");
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({ ...formData, skills: updatedSkills });
  };

  // ✅ Achievement handlers
  const handleAddAchievement = () => {
    if (achievementInput.trim() === "") return;
    setFormData({
      ...formData,
      achievements: [...formData.achievements, achievementInput],
    });
    setAchievementInput("");
  };

  const handleRemoveAchievement = (index) => {
    const updated = [...formData.achievements];
    updated.splice(index, 1);
    setFormData({ ...formData, achievements: updated });
  };

  return (
    <>
      <h2 className="form-title">Resume Generator</h2>
      <div className="form-container">
        {/* Personal Info */}
        <h3 className="form-subtitle">Personal Information</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="role_applying"
          placeholder="Role or Job Title"
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="summary"
          placeholder="Short summary about yourself"
          onChange={handleChange}
          className="form-input"
        />

        {/* Education */}
        <h3 className="form-subtitle">Education</h3>
        <input
          type="text"
          name="school"
          placeholder="Senior Secondary (XII) School"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="marks"
          placeholder="Percentage"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="college"
          placeholder="College Name"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="cgpa"
          placeholder="CGPA"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="gradyr"
          placeholder="Graduation Year or Ongoing"
          onChange={handleChange}
          className="form-input"
        />

        {/* Socials */}
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="github"
          placeholder="Github Profile"
          onChange={handleChange}
          className="form-input"
        />

        {/* Experience */}
        <h3 className="form-subtitle">Experience (Max 2)</h3>
        <input
          type="text"
          name="organization1"
          placeholder="Organization"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="startDate1"
          placeholder="Start Date"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="endDate1"
          placeholder="End Date or Ongoing"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="role1"
          placeholder="Role in the job"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="organization2"
          placeholder="Organization"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="startDate2"
          placeholder="Start Date"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="endDate2"
          placeholder="End Date or Ongoing"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="role2"
          placeholder="Role in the job"
          onChange={handleChange}
          className="form-input"
        />

        {/* Skills */}
        <h3 className="form-subtitle">Skills</h3>
        <div className="skills-input-container">
          <input
            type="text"
            placeholder="Enter a skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value.toUpperCase())}
            className="form-input-skill form-input"
          />
          <select
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            className="form-select"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Experienced">Experienced</option>
          </select>
          <button
            type="button"
            onClick={handleAddSkill}
            className="form-button"
          >
            Add Skill
          </button>
        </div>

        <ul className="skills-list">
          {formData.skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill.name} <strong>{skill.level}</strong>
              <button
                onClick={() => handleRemoveSkill(index)}
                className="remove-skill"
              >
                Delete Skill
              </button>
            </li>
          ))}
        </ul>

        {/* ✅ Achievements */}
        <h3 className="form-subtitle">Achievements</h3>
        <div className="skills-input-container">
          <input
            type="text"
            placeholder="Enter an achievement"
            value={achievementInput}
            onChange={(e) => setAchievementInput(e.target.value)}
            className="form-input"
          />
          <button
            type="button"
            onClick={handleAddAchievement}
            className="form-button"
          >
            Add Achievement
          </button>
        </div>

        <ul className="skills-list">
          {formData.achievements.map((item, index) => (
            <li key={index} className="skill-item">
              {item}
              <button
                onClick={() => handleRemoveAchievement(index)}
                className="remove-skill"
              >
                Delete Achievement
              </button>
            </li>
          ))}
        </ul>

        {/* Projects */}
        <h3 className="form-subtitle">Projects (Max 2)</h3>
        <input
          type="text"
          name="project1"
          placeholder="Project Name"
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="description1"
          placeholder="Project Description"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="project2"
          placeholder="Project Name"
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="description2"
          placeholder="Project Description"
          onChange={handleChange}
          className="form-input"
        />

        {/* Buttons */}
        <button
          className="form-button"
          onClick={() => navigate("/template", { state: { formData } })}
        >
          Generate Resume
        </button>
        {/* <button className="form-button" onClick={print}>
          Print Info
        </button> */}
      </div>
    </>
  );
}
