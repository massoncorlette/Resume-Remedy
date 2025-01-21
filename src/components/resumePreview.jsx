import squareadd from '../assets/squareadd.svg';
import editpencil from '../assets/editPencil.svg';
import backarrow from '../assets/backarrow.svg'
import { useEffect, useState } from 'react';

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
export function UserHistory({ updateInfo, updateWork, userWork, userInfo, userEducation, updateEducation }) {

  const [activeHistoryPanelIndex, setActiveHistory] = useState(0);

  const [activeWorkPanelIndex, setActiveWork] = useState(0);

  const [activeEducationPanelIndex, setActiveEducation] = useState(0);


  return (
    <div id="userHistoryContainer">
      <UserHistoryPanels header="Professional Experience" 
      isActive={activeHistoryPanelIndex === 1}
      onShow={() => setActiveHistory(1)} >
      <div className="experienceInputContainer">
        <textarea className="experienceInput" spellCheck="false" maxLength="400" placeholder='400 Max Characters'
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
         <UserWorkPanels onShow={() => setActiveWork(2)} isActive={false} index={1} userWork={userWork}/>
         <UserWorkPanels onShow={() => setActiveWork(2)} isActive={false} index={2} userWork={userWork}/>
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
      <div id='userEducationContainer'>
      {activeEducationPanelIndex === 0 && (
        <>
         <UserEducationPanels onShow={() => setActiveEducation(1)} isActive={false} index={0} userEducation={userEducation}/>
         <UserEducationPanels onShow={() => setActiveEducation(2)} isActive={false} index={1} userEducation={userEducation}/>
        </>
      )}
      {activeEducationPanelIndex === 1 && (
        <UserEducationPanels onShow={() => setActiveEducation(1)} onBack={() => setActiveEducation(0)} isActive={true} index={0} userEducation={userEducation} updateEducation={updateEducation} />
      )}
      {activeEducationPanelIndex === 2 && (
        <UserEducationPanels onShow={() => setActiveEducation(2)} onBack={() => setActiveEducation(0)} isActive={true} index={1} userEducation={userEducation} updateEducation={updateEducation}/>
      )}     
      
      </div></UserHistoryPanels>
    </div>
  );
};


export function UserSkills({userSkills,index, updateSkills,onShow}) {

  return (
    <div id="userSkillsContainer">
      <div id="userSkillsInner">
        <div className='pencilBtn' id='skillBtnContainer'>
          <div id='addSkill'>Add a skill</div>
          <div>
            <button onClick={onShow} id="buttonalt">
              <img src={squareadd} className='editIcons' />
            </button>
          </div>
        </div> 
      </div>
    </div>


  )


}

function UserWorkPanels({isActive,onShow,onBack,index,userWork,updateWork}) {


  return (

    <>
      {isActive ? (
        <div className="activeworkPanel">
          <div className='activeWorkPanelInformationContainer'>
            <div className='activeworkPanelTop'>
              <div id="companyName">
                <input onChange={(event) => {updateWork(index,event.target.value,"company")}}
                className='workInput' value={userWork[index].company} placeholder='Company'></input>
              </div>
              <div id="jobTitle">
                <input onChange={(event) => {updateWork(index,event.target.value,"job")}}
                className='workInput' value={userWork[index].job} placeholder='Job Title'></input>
              </div>
              <div id="jobDate">
                <input onChange={(event) => {updateWork(index,event.target.value,"startdate")}}
                className='workInput' value={userWork[index].startdate} placeholder='Start Date'></input>
              </div>           
            </div>
            <div className='activeworkPanelBottom'>
              <div className='jobSummaryContainer'>
                <textarea onChange={(event) => {updateWork(index,event.target.value,"worksummary")}}
                className='jobSummary' maxLength="300" placeholder='300 Max Characters'></textarea>
              </div>
            </div>
          </div>
          <div className='activeWorkPanelSubmitContainer'>
            <div className='controlsButtons'>
              <button onClick={onBack} id="backbtn">
                <img src={backarrow} className="userIcons" ></img>
              </button>
            </div>
              
          </div>
        </div>
      ) : (
        <div className="nonactiveworkPanel">
          <div className='workInfoPreviewTxt'>
            {userWork[index].job}
          </div>
          <div className='pencilBtn' >
            <button onClick={onShow}>
              <img src={editpencil} className='editIcons' />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

function UserEducationPanels({isActive,onShow,onBack,index,userEducation,updateEducation}) {

  return (
    <>
          {isActive ? (
        <div className="activeeducationPanel">
            <div className='activeeducationPanelTop'>
              <div id="major">
                <input onChange={(event) => {updateEducation(index,event.target.value,"company")}}
                className='educationInput' value={userEducation[index].company} placeholder='Major/Certificate'></input>
              </div>
              <div id="school">
                <input onChange={(event) => {updateEducation(index,event.target.value,"job")}}
                className='educationInput' value={userEducation[index].job} placeholder='School/Course'></input>
              </div>
              <div id="location">
                <input onChange={(event) => {updateE(index,event.target.value,"location")}}
                className='educationInput' value={userEducation[index].startdate} placeholder='Location/Site'></input>
              </div>
              <div id="graduation">
                <input onChange={(event) => {updateE(index,event.target.value,"graduationdate")}}
                className='educationInput' value={userEducation[index].startdate} placeholder='Graduation Date/Completion Date'></input>
              </div>         
            </div>
            <div className='activeEducationPanelSubmitContainer'>
              <div className='controlsButtons'>
                <button onClick={onBack} id="backbtn">
                  <img src={backarrow} className="userIcons" ></img>
                </button>
              </div>
          </div> 
        </div>
      ) : (
        <div className="nonactiveeducationPanel">
          <div className='educationInfoPreviewTxt'>
            {userEducation[index].school}
          </div>
          <div className='pencilBtn'>
            <button onClick={onShow}>
              <img src={editpencil} className='editIcons' />
            </button>
          </div>
        </div>
      )}
    
    
    
    </>
  )



}

function UserHistoryPanels({ header,isActive, onShow, children}) {

  return (

    <>
      {isActive ? (
        <div className="activePanel">{children}</div>
      ) : (
        <div className="nonActivePanel">
          <div className='userHistoryHeaders'>{header}</div>
          <div className='pencilBtn'>
            <button onClick={onShow}>
              <img src={squareadd} className="editIcons" alt="Add Icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};


//add btn element will pass true to onAdd
//this component will be nested in ResumePreview
function WorkHistoryPanels({userWork,index}) {


  return (
    <>
      <div className='historyPanelContainer'>
        <div className='workHistoryTopContainer'>
          <div className='workHistoryTopRight'>
            <div id='companyTxt'>
              {userWork[index].company}
            </div>
              {userWork[index].job}
            <div>
          </div>
          </div>
          <div className='workHistoryTopLeft'>
            <div> {userWork[index].startdate} {" - "} {userWork[index].enddate}</div>
          </div>
        <div>

          </div>
        </div>
        <div className='workHistoryBottomContainer'>
          {userWork[index].worksummary}
        </div>
      </div>
    </>
  );
};

export function ResumePreview({userInfo, userWork, userEducation}) {


  return (
    <div id="resumePreviewContainer">
      <div id="resumeMarginContainer">
        <div id="resumeHeaderContainer">
          <div id="headerName"> {userInfo.firstName} {userInfo.lastName} </div>
          <div id="titleName" >{userInfo.title}</div>
          <div id="contactInfo">
            <div id="phoneNumber"> {userInfo.phoneNumber} </div>
            <div id="email"> {userInfo.email} </div>
            <div id="location"> {userInfo.location} </div>
          </div>
        </div>
        <div id="resumeSummaryContainer">
           <div className='resumeHeaders'>Personal Summary</div>
           <div id="resumeSummary">{userInfo.summary}</div>
        </div>
        <div id="resumeWorkContainer">
          <div className='resumeHeaders'>Work Experience</div>
          <div className='jobHistoryContainer'>
            <WorkHistoryPanels userWork={userWork} index={0} />
            <WorkHistoryPanels userWork={userWork} index={1} />
            <WorkHistoryPanels userWork={userWork} index={2} />
          </div>
        </div>
        <div id="resumeEducationContainer">
          <div className='resumeHeaders'>Education</div>
          <div id='educationHistoryContainer'>
            <div className='educationPanelContainer'>
              <div className='schoolContainer'>
                <div className='major'>
                  <b>{userEducation[0].major}</b>
                </div>
                <div className='school'>
                  {userEducation[0].school}
                </div>   
              </div>
              <div className='locationContainer'>
                <div className='location'>
                  {userEducation[0].location}
                </div>
                <div className='graduationDate'>
                  <i>{userEducation[0].graduationdate}</i>
                </div>
              </div>
            </div>

            <div className='educationPanelContainer'>
            <div className='schoolContainer'>
                <div className='major'>
                  <b>{userEducation[1].major}</b>
                </div>
                <div className='school'>
                  {userEducation[1].school}
                </div>   
              </div>
              <div className='locationContainer'>
                <div className='location'>
                  {userEducation[1].location}
                </div>
                <div className='graduationDate'>
                  <i>{userEducation[1].graduationdate}</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="resumeSkillsContainer">
          <div className='resumeHeaders'>Skills</div>
        </div>
      </div>
    </div>
  );
}

