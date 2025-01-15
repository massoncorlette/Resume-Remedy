import squareadd from '../assets/squareadd.svg';
import editpencil from '../assets/editPencil.svg';
import backarrow from '../assets/backarrow.svg'
import { useState } from 'react';

export function UserInfo({ updateInfo,userData}) {


  return (
    <div id="userInfoContainer">
      <div id="firstName" className="infoInput">
        <label htmlFor="firstName">First Name</label>
        <input name="firstName"
        type="text"
        value={userData.firstName}
        onChange={(event) => updateInfo(event.target.value, "firstName")}></input>
      </div>
      <div id="lastName" className="infoInput" onChange={(event)=> userPropHandler(event.target.value, "firstName")}>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName"
        type="text"
        value={userData.lastName}
        onChange={(event) => updateInfo(event.target.value, "lastName")}></input>
      </div>
      <div id="phoneNumber" className="infoInput">
        <label htmlFor="phoneNumber">Contact Number</label>
        <input name="phoneNumber"
        type="text"
        value={userData.phoneNumber}
        onChange={(event) => updateInfo(event.target.value, "phoneNumber")}></input>
      </div>
      <div id="email" className="infoInput" >
        <label htmlFor="email">Email</label>
        <input name="email" placeholder='exampleemail@sbcglobal.net'
        type="text"
        value={userData.email}
        onChange={(event) => updateInfo(event.target.value, "email")}></input>
      </div>
      <div id="location" className="infoInput">
        <label htmlFor="location">Location</label>
        <input name="location" placeholder='Address / City / State'
        type="text"
        value={userData.location}
        onChange={(event) => updateInfo(event.target.value, "location")}></input>
      </div>
      <div className="infoInput">
        <label htmlFor="title">Title</label>
        <input name="title" placeholder='Student / Filmmaker / Window Washer ect.'
        type="text"
        value={userData.title}
        onChange={(event) => updateInfo(event.target.value, "title")}></input>
      </div>
    </div>
  );
};

//parent to WorkHistory component
export function UserHistory({ updateInfo, updateWork, userWork, userInfo }) {

  const [activeHistoryPanelIndex, setActiveHistory] = useState(0);

  const [activeWorkPanelIndex, setActiveWork] = useState(0);


  return (
    <div id="userHistoryContainer">
      <UserHistoryPanels header="Professional Experience" 
      isActive={activeHistoryPanelIndex === 1}
      onShow={() => setActiveHistory(1)} >
      <div className="experienceInputContainer">
        <textarea className="experienceInput" spellCheck="false" maxLength="360" placeholder='360 Max Characters'
        type="text"
        value={userInfo.summary}
        onChange={(event) => updateInfo(event.target.value, "summary")}></textarea>
      </div></UserHistoryPanels>

      <UserHistoryPanels header="Work Experience" 
      isActive={activeHistoryPanelIndex === 2}
      onShow={() => setActiveHistory(2)} >
      <div id="userWorkContainer">
      {activeWorkPanelIndex === 0 && (
        <>
         <UserWorkPanels onShow={() => setActiveWork(1)} isActive={false} index={0} userWork={userWork}/>
         <UserWorkPanels onShow={() => setActiveWork(2)} isActive={false} />
         <UserWorkPanels onShow={() => setActiveWork(2)} isActive={false} />
        </>
      )}
      {activeWorkPanelIndex === 1 && (
        <UserWorkPanels onShow={() => setActiveWork(1)} onBack={() => setActiveWork(0)} isActive={true} index={0} userWork={userWork} updateWork={updateWork} />
      )}
      {activeWorkPanelIndex === 2 && (
        <UserWorkPanels onShow={() => setActiveWork(2)} onBack={() => setActiveWork(0)} isActive={true} index={1} userWork={userWork} updateWork={updateWork}/>
      )}
      {activeWorkPanelIndex === 3 && (
        <UserWorkPanels onShow={() => setActiveWork(3)} onBack={() => setActiveWork(0)} isActive={true} index={2} userWork={userWork} updateWork={updateWork}/>
      )}
      </div></UserHistoryPanels>

       <UserHistoryPanels header="Education" 
      isActive={activeHistoryPanelIndex === 3}
      onShow={() => setActiveHistory(3)} >
      <div>Test</div></UserHistoryPanels>
    </div>
  );
};

function UserWorkPanels({isActive,onShow,onBack,index,userWork,updateWork}) {


  return (

    <>
      {isActive ? (
        <div className="activeworkPanel">
          <div className='activeWorkPanelInformationContainer'>
            <div className='activeworkPanelTop'>
              <div id="companyName">
                <input onChange={(event) => {updateWork(index,event.target.value,"company")}}
                className='workInput' value={userWork[index].company}></input>
              </div>
              <div id="jobTitle">
                <input className='workInput'></input>
              </div>
              <div id="jobDate">
                <input className='workInput'></input>
              </div>           
            </div>
            <div className='activeworkPanelBottom'>
              <div className='jobSummaryContainer'>
                <textarea className='jobSummary'></textarea>
              </div>
            </div>
          </div>
          <div className='activeWorkPanelSubmitContainer'>
            <div className='controlsButtons'>
              <button onClick={onBack} id="backbtn">
                <img src={backarrow} className="userIcons" ></img>
              </button>
            </div>
            <div className='addworkBtnContainer'>
              <button className='addworkBtn'>
                Add Work +
              </button>
            </div>
              
          </div>
        </div>
      ) : (
        <div className="nonactiveworkPanel">
          <div className='workInfoPreviewContainer'>
            Put Company Text
          </div>
          <div>
            <button onClick={onShow}>
              <img src={editpencil} className='editIcons' />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

function UserHistoryPanels({ header,isActive, onShow, children}) {

  return (

    <>
      {isActive ? (
        <div className="activePanel">{children}</div>
      ) : (
        <div className="nonActivePanel">
          <div className='userHistoryHeaders'>{header}</div>
          <button onClick={onShow}>
              <img src={squareadd} className="userIcons" alt="Add Icon" />
            </button>
        </div>
      )}
    </>
  );
};


//add btn element will pass true to onAdd
//this component will be nested in ResumePreview
function WorkHistoryPanels({onAdd,userWork}) {


  return (
    <>
      {onAdd ? (
        <div className='jobHistoryContainers'>
          <div className='jobCompany'>
            { userWork.company }
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export function ResumePreview({userData}) {


  return (
    <div id="resumePreviewContainer">
      <div id="resumeMarginContainer">
        <div id="resumeHeaderContainer">
          <div id="headerName"> {userData.firstName} {userData.lastName} </div>
          <div id="titleName" >{userData.title}</div>
          <div id="contactInfo">
            <div id="phoneNumber"> {userData.phoneNumber} </div>
            <div id="email"> {userData.email} </div>
            <div id="location"> {userData.location} </div>
          </div>
        </div>
        <div id="resumeSummaryContainer">
           <div className='resumeHeaders'>Personal Summary</div>
           <div id="resumeSummary">{userData.summary}</div>
        </div>
        <div id="resumeWorkContainer">
          <div className='resumeHeaders'>Work Experience</div>
          <div>

          </div>
        </div>
        <div id="resumeEducationContainer">
          <div className='resumeHeaders'>Education</div>

        </div>
        <div id="resumeSkillsContainer">
          <div className='resumeHeaders'>Skills</div>
        </div>
      </div>
    </div>
  );
}

