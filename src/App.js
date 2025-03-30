// src/App.js
import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import html2pdf from 'html2pdf.js';

const App = () => {
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

  const updateFormData = (newFormData) => {
    setFormData(newFormData);
  };

    const generatePDF = () => {
        const element = document.getElementById('resume-preview'); // ID of the preview div
        const opt = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).save();
    };

  return (
    <div className="app-container">
      <h1>Resume Builder</h1>
      <ResumeForm onUpdate={updateFormData} />
      <div id="resume-preview">
        <ResumePreview formData={formData} />
      </div>
        <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default App;