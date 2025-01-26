import { useState } from 'react'
import './styles/App.css'
import { UserInfo, ResumePreview, UserHistory, UserSkills } from './components/resumePreview';
import logo from './assets/check.png'
import html2pdf from "html2pdf.js";

function App() {
  const [userInfo, setUser] = useState({firstName: "Olivia", lastName: "Bennett", phoneNumber: "(702) 456-7890", email: "exampleemail@sbcglobal.net", location: "89 Birch Lane, Las Vegas, NV",
    title: "Student", summary: "A recent graduate with a degree in Computer Science, passionate about leveraging software capabilities to create impactful solutions in business and personal life. Skilled in JavaScript, React, and Node.js, with hands-on experience through projects and internships. I am known for adaptability, quick learning, and strong work ethic.",
  });

  //handler function for user info
  const updateInfo = (value, propType) => {

    const changeUser = {...userInfo, [propType]:value};

    setUser(changeUser);
  };

  const [userWork, setWork] = useState([
      {
        set: true,
        company: "Google",
        job: "Chief Executive Officer",
        startdate: "March 1, 2004",
        enddate: "October 15, 2019",
        worksummary: "Oversaw global operations and strategy, driving major product innovations, and managing a diverse team across various departments. Spearheaded initiatives that led to Google's expansion into new markets and technologies."
      },
      {
        set: true,
        company: "Applebee's",
        job: "Kitchen Manager",
        startdate: "January 10, 2016",
        enddate: "July 30, 2021",
        worksummary: "Managed kitchen staff, ensured adherence to safety and quality standards, and implemented seasonal menu updates. Coordinated with the front-of-house team to improve the overall dining experience and customer satisfaction."
      },
      {
        set: true,
        company: "Facebook",
        job: "Lead UI Designer",
        startdate: "July 5, 2010",
        enddate: "December 12, 2016",
        worksummary: "Led the design and implementation of user interfaces for Facebook's main app and its features. Worked closely with engineers and product managers to ensure a seamless user experience across both mobile and desktop platforms."
      }
  ]);

  //handler for user history
  const updateWork = (index, value, propType) => {
    const newWork = userWork.map((work, i) => {
      if (i === index) {
        return { ...work, [propType]: value };
      }
      return work;
    });
    setWork(newWork);
  };

  const [userEducation, setEducation] = useState([
    {major:"Computer Science",school:"Harvard University",location:"Massachusetts Hall, MA",graduationdate: "May 2016" },
    {major:"Web Development",school:"Odin Project",location:"www.odinproject.com",graduationdate: "September 2022"}
  ])


  const updateEducation = (index, value, propType) => {
    const newEducation = userEducation.map((education, i) => {
      if (i === index) {
        return { ...education, [propType]: value };
      }
      return education;
    });
    setEducation(newEducation);
  };

  const [userSkills, setSkills] = useState([
    "LeaderShip", "Time Management", "Javascript", "React", "Deployment", 
  ])

  function printResume() {
    const element = document.getElementById('resumeMarginContainer');
    const options = {
      margin: 0, 
      filename: 'myresumeremedy.pdf', 
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 }, 
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save(); 
  }

  function pageReload() {
    window.location.reload();
  }

  return (

    <>
      <div id="editorContainer">
        <div id="logotxtContainer">
          <p id="title">Resume Remedy.</p>
          <div id="logoContainer">
            <img src={logo} id='logopng'></img>
          </div>
        </div>
        <div id="controlsContainer">
          <div id='controlsResetBtnContainer'>
            <button id='resetBtn' onClick={pageReload} >Reset Resume</button>
          </div>
          <div id='controlsPrintBtnContainer'>
            <button id='printBtn' onClick={printResume} >Save Resume</button>
          </div>
        </div>

        <UserInfo updateInfo={updateInfo} userData={userInfo}/>
        <UserHistory updateInfo={updateInfo} updateWork={updateWork}
        userWork={userWork} userInfo={userInfo} userEducation={userEducation}
        updateEducation={updateEducation}/>
        <UserSkills userSkills={userSkills} setSkills={setSkills} />
      </div>
      <div id="resumeContainer">
        <ResumePreview userInfo={userInfo} userWork={userWork} userEducation={userEducation}/>
      </div>
    </>
  )
  
};



export default App
