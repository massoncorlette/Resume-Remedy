import { useState } from 'react'
import './styles/App.css'
import { UserInfo, ResumePreview, UserHistory } from './components/resumePreview';

function App() {
  const [userData, setUser] = useState({firstName: "Olivia", lastName: "Bennett", phoneNumber: "(702) 456-7890", email: "exampleemail@sbcglobal.net", location: "89 Birch Lane, Las Vegas, NV" });

  //handler function
  const userPropHandler = (value, propType) => {

    const changeUser = {...userData, [propType]:value};

    setUser(changeUser);
  }

  return (
    <>
      <div id="editorContainer">
        <div id="logoContainer">
          <p id="title">Resume Remedy.</p>
        </div>
        <UserInfo userPropHandler={userPropHandler} userData={userData}/>
        <UserHistory />
      </div>
      <div id="resumeContainer">
        <div id="controlsContainer">
        </div>
        <ResumePreview userData={userData}/>
      </div>
    </>
  )
}

export default App
