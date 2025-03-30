// src/components/ResumePreview.js
import React from 'react';

const ResumePreview = ({ formData }) => {
  return (
    <div>
      <h2>{formData.name}</h2>
      <p>Email: {formData.email} | Phone: {formData.phone}</p>
      <p>{formData.summary}</p>

      <h3>Education</h3>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.school}</h4>
          <p>{edu.degree}, {edu.dates}</p>
          <p>{edu.description}</p>
        </div>
      ))}

      <h3>Experience</h3>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <h4>{exp.title}, {exp.company}</h4>
          <p>{exp.dates}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h3>Skills</h3>
      <p>{formData.skills}</p>
    </div>
  );
};

export default ResumePreview;