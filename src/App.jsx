import { useState } from 'react'
import './styles/App.css'
import { UserInfo, ResumePreview } from './components/resumePreview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="editorContainer">
        <div id="logoContainer">
          <p id="title"> Resume Remedy </p>
        </div>
        <UserInfo />
        <div id="userHistoryContainer">

        </div>
      </div>
      <div id="resumeContainer">
        <div id="controlsContainer">
        </div>
      <ResumePreview />
      </div>
    </>
  )
}

export default App
