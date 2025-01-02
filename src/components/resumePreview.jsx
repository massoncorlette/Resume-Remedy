import { useState } from 'react'


export function UserInfo() {

  const [userData, setUser] = useState({firstName: "Masson", lastName: "Corlette", phoneNumber: "69", email: "asdfasdf" });

  const userPropHandler = (value, propType) => {

    setUser({...userData, [propType]:value});
  }

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


export function ResumePreview() {


  return (
    <div id="resumePreviewContainer">
      <h2>Resume Preview</h2>
      <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
      <p><strong>Contact Number:</strong> {userData.phoneNumber}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

