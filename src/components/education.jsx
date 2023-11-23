import React, { useState } from 'react';
import '../styles/education.css';

const EducationForm = () => {
  const [school, setSchool] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleStudyTitleChange = (e) => {
    setStudyTitle(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <div className='education-container'>
      <h2>Educational Experience</h2>
      {submitted ? (
        <div>
          <p>School Name: {school}</p>
          <p>Title of Study: {studyTitle}</p>
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>School Name:</label>
            <input type="text" value={school} onChange={handleSchoolChange} />
          </div>
          <div>
            <label>Title of Study:</label>
            <input type="text" value={studyTitle} onChange={handleStudyTitleChange} />
          </div>
          <div>
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div>
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EducationForm;
