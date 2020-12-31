import React from "react"

import "./styles.css"

import Header from "../../components/Header"
import LineInput from "../../components/LineInput"

const Landing = () => {
  
  function handleSubmit(event: any): void {
    alert("Submiting")
    event.preventDefault()
  }

  return (
    <div id="container">
      <Header />
      <main>
        <form className="painted-form" onSubmit={handleSubmit}>
          <LineInput />
          <input value="Sign In" type="submit"/>
        </form>
      </main>
    </div>
  )
}

export default Landing