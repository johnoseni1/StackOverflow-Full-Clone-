import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import "./index.css";

function Index() {
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }

  const handleGoogleSignIN = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        history.push("/");
        // return (
        //   <>

        //   </>
        // );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleSignIn = () => {
    setError();
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // console.log(res);
          history.push("/");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleRegister = () => {
    setError("");
    setLoading(false);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // console.log(res);
          history.push("/");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  return (
    <div className="auth">
      <div className="auth-container">
        <p>SignUp through </p>
        <div className="sign-options">
          <div onClick={handleGoogleSignIN} className="single-option">
            <img
              alt="google"
              src="https://image.flaticon.com/icons/png/512/281/281764.png"
            />
            <p>{loading ? "Signing in..." : "SignUp with Google"}</p>
          </div>
        </div>

        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Index;
