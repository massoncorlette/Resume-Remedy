
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
        <input name="lastName"></input>
      </div>
      <div id="phoneNumber" className="infoInput">
        <label htmlFor="phoneNumber">Contact Number</label>
        <input name="phoneNumber"></input>
      </div>
      <div id="email" className="infoInput">
        <label htmlFor="email">Email</label>
        <input name="email"></input>
      </div>
    </div>
  );
}

//child component
export function ResumePreview({userData}) {


  return (
    <div id="resumePreviewContainer">
      <div id="resumeMarginContainer">
        <div id="resumeHeaderContainer">

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

