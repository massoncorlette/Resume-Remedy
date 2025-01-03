import { useState } from 'react'
import './styles/App.css'
import { UserInfo, ResumePreview } from './components/resumePreview';

function App() {
  const [userData, setUser] = useState({firstName: "Masson", lastName: "Corlette", phoneNumber: "69", email: "asdfasdf" });

  //handler function
  const userPropHandler = (value, propType) => {

    const changeUser = {...userData, [propType]:value};

    setUser(changeUser);
  }

  return (
    <>
      <div id="editorContainer">
        <div id="logoContainer">
          <p id="title"> {userData.firstName} </p>
        </div>
        <UserInfo userPropHandler={userPropHandler} userData={userData}/>
        <div id="userHistoryContainer">

        </div>
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
