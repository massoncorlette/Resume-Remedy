import squareadd from '../assets/squareadd.svg';
import { useState } from 'react'

export function UserInfo({userPropHandler,userData}) {


  return (
    <div id="userInfoContainer">
      <div id="firstName" className="infoInput">
        <label htmlFor="firstName">First Name</label>
        <input name="firstName"
        type="text"
        value={userData.firstName}
        onChange={(event) => userPropHandler(event.target.value, "firstName")}></input>
      </div>
      <div id="lastName" className="infoInput">
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName"
        type="text"
        value={userData.lastName}
        onChange={(event) => userPropHandler(event.target.value, "lastName")}></input>
      </div>
      <div id="phoneNumber" className="infoInput">
        <label htmlFor="phoneNumber">Contact Number</label>
        <input name="phoneNumber"
        type="text"
        value={userData.phoneNumber}
        onChange={(event) => userPropHandler(event.target.value, "phoneNumber")}></input>
      </div>
      <div id="email" className="infoInput" >
        <label htmlFor="email">Email</label>
        <input name="email" placeholder='exampleemail@sbcglobal.net'
        type="text"
        value={userData.email}
        onChange={(event) => userPropHandler(event.target.value, "email")}></input>
      </div>
      <div id="location" className="infoInput">
        <label htmlFor="location">Location</label>
        <input name="location" placeholder='Address / City / State'
        type="text"
        value={userData.location}
        onChange={(event) => userPropHandler(event.target.value, "location")}></input>
      </div>
      <div className="infoInput">
        <label htmlFor="title">Title</label>
        <input name="title" placeholder='Student / Filmmaker / Window Washer ect.'
        type="text"
        value={userData.title}
        onChange={(event) => userPropHandler(event.target.value, "title")}></input>
      </div>
    </div>
  );
};

//nest WorkHistory components in workhistory section
//parent to WorkHistory component
export function UserHistory({ userPropHandler, userData }) {

  //for UserHistory panels, activeIndex Flex 2 property added
  const [activeIndex, setActiveIndex] = useState(0);

  const [userWork, setWork] = useState(
    {set:true ,company:"Google", job:"Senior Engineer", startdate:"August 15, 1997", enddate: "September 12, 2012"},
    {set:true, company:"AppleBees", job:"Cook", startdate:"August 15, 1997", enddate: "September 12, 2012"},
    {set:true, company:"Facebook", job:"UI Designer", startdate:"August 15, 1997", enddate: "September 12, 2012"}
  )

  //setWork according to passed index number from child component ?
  //pass in new object(newWork) for new userWork obj based upon index
  const updateWork = (index, newWork) => {
    setWork(userWork.map((work, i) => (i === index ? newWork : work)));
  };
  

  return (
    <div id="userHistoryContainer">
      <UserHistoryPanels header="Professional Experience" 
      isActive={activeIndex === 1}
      onShow={() => setActiveIndex(1)} >
      <div id="experienceInputContainer">
        <textarea id="experienceInput" spellCheck="false" maxLength="360" placeholder='360 Max Characters'
        type="text"
        value={userData.summary}
        onChange={(event) => userPropHandler(event.target.value, "summary")}></textarea>
      </div></UserHistoryPanels>

      <UserHistoryPanels header="Work Experience" 
      isActive={activeIndex === 2}
      onShow={() => setActiveIndex(2)} >
      <div>
      <WorkHistoryPanels userPropHandler={updateWork}


      />
      </div></UserHistoryPanels>

       <UserHistoryPanels header="Education" 
      isActive={activeIndex === 3}
      onShow={() => setActiveIndex(3)} >
      <div>Test</div></UserHistoryPanels>
    </div>
  );
}

//parent to resume preview component
//add btn element will pass true to onAdd
function WorkHistoryPanels({userPropHandler,onAdd}) {


  return (
    <>
      <div className='jobHistoryContainers'>
        <div className='jobCompany'>
          { userWork.company }
        </div>
      </div>
    
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
          <button onClick={onShow}>
              <img src={squareadd} className="userIcons" alt="Add Icon" />
            </button>
        </div>
      )}
    </>
  )
}



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

