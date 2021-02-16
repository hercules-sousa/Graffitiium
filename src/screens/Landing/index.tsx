import React from "react";

import "./styles.css";

import Header from "../../components/Header";
import LineInput from "../../components/LineInput";

const Landing = () => {
  function handleSubmit(event: any): void {
    alert("Submiting");
    event.preventDefault();
  }

  return (
    <div id="container">
      <Header />
      <main>
        <form className="painted-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="">E-mail</label>
          <LineInput inputType="text" />
          <label htmlFor="">Password</label>
          <LineInput inputType="password" />
          <input id="submittingInput" value="Sign In" type="submit" />
        </form>
      </main>
    </div>
  );
};

export default Landing;
