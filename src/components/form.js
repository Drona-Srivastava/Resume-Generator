import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../styles/form.css";

export default function ResumeForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        college: "",
        cgpa: "",
        experience: [{ organization: "", startDate: "", endDate: "", ongoing: false }],
        skills: [],
        contact: { phone: "", email: "", linkedin: "" },
      });
    
      const [skillInput, setSkillInput] = useState("");
      const [skillLevel, setSkillLevel] = useState("Beginner");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleAddSkill = () => {
        if (skillInput.trim() === "") return;
        setFormData({
          ...formData,
          skills: [...formData.skills, { name: skillInput, level: skillLevel }],
        });
        setSkillInput(""); // Reset input
      };
    
      const handleRemoveSkill = (index) => {
        const updatedSkills = [...formData.skills];
        updatedSkills.splice(index, 1);
        setFormData({ ...formData, skills: updatedSkills });
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

        {/* Education */}
        <h3 className="form-subtitle">Education </h3>
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

        {/* Social */}
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
        <h3 className="form-subtitle">Experience (Max 2) </h3>
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
        {/* Skills Section */}
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
          <button type="button" onClick={handleAddSkill} className="form-button">
            Add Skill
          </button>
        </div>

        {/* Display Added Skills */}
        <ul className="skills-list">
          {formData.skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill.name}  <strong>{skill.level}</strong>
              <button onClick={() => handleRemoveSkill(index)} className="remove-skill">
                Delete Skill
              </button>
            </li>
          ))}
        </ul>
        {/* Experience */}
        <h3 className="form-subtitle">Projects (Max 2) </h3>
        <input
          type="text"
          name="project1"
          placeholder="Project Name"
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          type="text"
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
          type="text"
          name="description2"
          placeholder="Project Description"
          onChange={handleChange}
          className="form-input"
        />
        <button className="form-button" onClick={()=> navigate("/template")}>
          Generate Resume</button>
      </div>
    </>
  );
}
