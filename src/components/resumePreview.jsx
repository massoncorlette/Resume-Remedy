
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
}

//child component
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

