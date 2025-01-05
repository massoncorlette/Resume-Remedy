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
      <div id="email" className="infoInput">
        <label htmlFor="email">Email</label>
        <input name="email"
        type="text"
        value={userData.email}
        onChange={(event) => userPropHandler(event.target.value, "email")}></input>
      </div>
      <div id="location" className="infoInput">
        <label htmlFor="location">Location</label>
        <input name="location"
        type="text"
        value={userData.location}
        onChange={(event) => userPropHandler(event.target.value, "location")}></input>
      </div>
    </div>
  );
};

export function UserHistory({ userPropHandler, userData }) {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="userHistoryContainer">
      <div>
        <div className="userHistoryHeaders">Professional Summary</div>
        <UserHistoryPanels isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)} >
        <p>dd</p> </UserHistoryPanels>
      </div>

      <div>
        <div className="userHistoryHeaders">Experience</div>
        <div>
          <img src={squareadd} className="userIcons" alt="Add Icon" />
        </div>
      </div>

      <div>
        <div className="userHistoryHeaders">Education</div>
        <div>
          <img src={squareadd} className="userIcons" alt="Add Icon" />
        </div>
      </div>
    </div>
  );
}


// pass properties for 
function UserHistoryPanels({ isActive, onShow, children}) {

  return (

    <div className="panel">
      {isActive ? (
        <p>{children}</p>
      ) : (
        <img src={squareadd} className="userIcons">
          <button onClick={onShow}>
            <img src={squareadd} className="userIcons" alt="Add Icon" />
          </button>
        </img>
      )}
    </div>



  )

}

export function ResumePreview({userData}) {


  return (
    <div id="resumePreviewContainer">
      <div id="resumeMarginContainer">
        <div id="resumeHeaderContainer">
          <div id="headerName"> {userData.firstName} {userData.lastName} </div>
          <div id="titleName">Student</div>
          <div id="contactInfo">
            <div id="phoneNumber"> {userData.phoneNumber} </div>
            <div id="email"> {userData.email} </div>
            <div id="location"> {userData.location} </div>
          </div>
        </div>
        <div id="resumeSummaryContainer">

        </div>
        <div id="resumeWorkContainer">

        </div>
        <div id="resumeEducationContainer">

        </div>
        <div id="resumeSkillsContainer">

        </div>
      </div>
    </div>
  );
}

