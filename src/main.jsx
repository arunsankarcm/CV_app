import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInfoForm from './components/general.jsx'
import EducationForm from './components/education.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfoForm />
    <EducationForm />
  </React.StrictMode>
)
