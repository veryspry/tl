import React from 'react'

class Signup extends React.Component {

  state = {
    email: '',
    password: '',
  }

  render() {

    return (
      <div className="login-wrapper">
        <form action="/signup" method="POST">

          <div className="input-wrapper">
            <label htmlFor="">Email</label>
            <input type="text" ></input>
          </div>

          <div className="input-wrapper">
            <label htmlFor="">Password</label>
            <input type="text" ></input>
          </div>

          <div className="login-form-button-wrapper">
            <button type="submit">Signup</button>
          </div>

        </form>

      </div>
    )
  }
}

export default Signup
