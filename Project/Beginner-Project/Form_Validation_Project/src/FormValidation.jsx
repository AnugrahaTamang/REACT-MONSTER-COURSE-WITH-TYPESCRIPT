import React, { useId, useState } from "react";
import "./style.css";
const FormValidation = () => {
  const id = useId();
  const [name, setname] = useState("");
  const [emailinput, setemailinput] = useState("");
  const [password, setpassword] = useState("");
  const [conformpass, setconfirmpass] = useState("");
  const [errorOne, seterrorOne] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 8){
        seterrorOne("");
    }else{
        seterrorOne("Name length must be 8");
    }
  };
  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://avatars.githubusercontent.com/u/166694801?v=4"
          alt="Anugraha"
        />
      </div>
      <form className="formOne">
        <label htmlFor={`${id}-name`}>
          Name:
          <input
            type="text"
            id={`${id}-name`}
            placeholder="Enter Your name: "
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label htmlFor={`${id}-email`}>
          Email:
          <input
            type="email"
            value={emailinput}
            placeholder="Enter your Email"
            onChange={(e) => setemailinput(e.target.value)}
            id={`${id}-email`}
          />
        </label>
        <br />
        <br />
        <label htmlFor={`${id}-password`}>
          Password:
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            id={`${id}-password`}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label htmlFor={`${id}-confirm`}>
          Confirmed Password:{" "}
          <input
            type="password"
            id={`${id}-confirm`}
            onChange={(e) => setconfirmpass(e.target.value)}
            placeholder="Enter your confirmed Password"
            value={conformpass}
          />
        </label>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
