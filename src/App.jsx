import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="editorContainer">
        <div id="logoContainer">
          <p> Resumely </p>
        </div>
        <div id="editorSettingsContainer">
          
        </div>
      </div>
      <div id="resumeContainer">
        <div id="controlsContainer">

        </div>
        <div id="resumePreviewContainer">

        </div>
      </div>
    </>
  )
}

export default App
