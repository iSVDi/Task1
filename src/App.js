import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <LeftHalf />
      <DataComponent />
    </div>
  );
}

const LeftHalf = () => {
  return (
    <div className="LeftHalf">
      <img className="MartianImage" src="Mars.jpg" alt="" />
      <p className="MartianTitle">Martian</p>
    </div>
  );
};

const DataComponent = () => {
  return (
    <div className="DataComponent">
      <div className="TextFieldsContainer">
        <TextField inputType="email" placeholder="Email" id="emailID" />
        <TextField
          inputType="password"
          placeholder="Password"
          id="passwordID"
        />
      </div>
      <ButtonSection />

      <img className="MartianLittleImage" src="mars.png" alt="" />
    </div>
  );
};

const TextField = (props) => {
  return (
    <div>
      <input
        id={props.id}
        className="TextField"
        type={props.inputType}
        placeholder={props.placeholder}
      />
    </div>
  );
};

const ButtonSection = () => {
  return (
    <div>
      <div className="ButtonSection">
        <Button
          title="Sign In"
          id="SignInButton"
          message="signIn succesfully"
        />
        <Button
          title="Sign Up"
          id="SignUpButton"
          message="signUp succesfully"
        />
      </div>
      <button className="ForgotPassword">Forgot Password?</button>
    </div>
  );
};

const Button = (props) => {
  return (
    <div className="Button">
      <button
        id={props.id}
        onClick={() => {
          const email = document.querySelector("#emailID").value;
          const password = document.querySelector("#passwordID").value;

          if (email != "" && password != "" && email.includes("@")) {
            alert(props.message);
          } else {
            alert("Check input data");
          }
        }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default App;
