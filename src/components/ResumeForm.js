// src/components/ResumeForm.js
import React, { useState } from 'react';

const ResumeForm = ({ onUpdate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        summary: '',
        education: [{ school: '', degree: '', dates: '', description: '' }],
        experience: [{ title: '', company: '', dates: '', description: '' }],
        skills: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        onUpdate({ ...formData, [name]: value }); // Update parent component
    };

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = [...formData.education];
        updatedEducation[index][name] = value;
        setFormData(prevFormData => ({ ...prevFormData, education: updatedEducation }));
        onUpdate({ ...formData, education: updatedEducation }); // Update parent
    };

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = [...formData.experience];
        updatedExperience[index][name] = value;
        setFormData(prevFormData => ({ ...prevFormData, experience: updatedExperience }));
        onUpdate({ ...formData, experience: updatedExperience }); // Update parent
    };

    const addEducation = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            education: [...prevFormData.education, { school: '', degree: '', dates: '', description: '' }]
        }));
        onUpdate({
            ...formData,
            education: [...formData.education, { school: '', degree: '', dates: '', description: '' }]
        }); // Update parent
    };

    const addExperience = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            experience: [...prevFormData.experience, { title: '', company: '', dates: '', description: '' }]
        }));
        onUpdate({
            ...formData,
            experience: [...formData.experience, { title: '', company: '', dates: '', description: '' }]
        }); // Update parent
    };

    return (
        <form>
            <h2>Personal Information</h2>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {/* Other Personal Information Fields */}

            <h2>Summary</h2>
            <label>Summary:</label>
            <textarea name="summary" value={formData.summary} onChange={handleChange} />

            <h2>Education</h2>
            {formData.education.map((edu, index) => (
                <div key={index}>
                    <label>School:</label>
                    <input type="text" name="school" value={edu.school} onChange={(e) => handleEducationChange(index, e)} />
                    <label>Degree:</label>
                    <input type="text" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
                    {/* Other Education Fields */}
                </div>
            ))}
            <button type="button" onClick={addEducation}>Add Education</button>

            <h2>Experience</h2>
            {formData.experience.map((exp, index) => (
                <div key={index}>
                    <label>Title:</label>
                    <input type="text" name="title" value={exp.title} onChange={(e) => handleExperienceChange(index, e)} />
                    <label>Company:</label>
                    <input type="text" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
                    {/* Other Experience Fields */}
                </div>
            ))}
            <button type="button" onClick={addExperience}>Add Experience</button>

            <h2>Skills</h2>
            <label>Skills (comma-separated):</label>
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
        </form>
    );
};

export default ResumeForm;