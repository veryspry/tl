import React from 'react'

class Add extends React.Component {
  constructor() {
    super()
    this.state = {
        date: Date.now(),
        focus: '',
        coffeeName: '',
        coffeeRoaster: '',
        albumTitle: '',
        albumArtist: '',
        resourceName: '',
        resourcesUrl: ''
    }
    // this.clearForm = this.clearForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // clearForm() {
  //   this.setState({
  //       date: Date.now(),
  //       focus: '',
  //       coffee: {
  //         name: '',
  //         roaster: ''
  //       },
  //       music: {
  //         title: '',
  //         artist: '',
  //       },
  //       resources: {
  //         name: '',
  //         url: ''
  //       }
  //   })
  // }

  render () {
    return (
      <div className="all-forms-wrapper">
        {/* submit day */}
        <div className="submit-form-wrapper day-form">
          <h1 className="add-form-title">Add a day!</h1>
          <form onSubmit={this.props.handleSubmit} >

            <div className="input-wrapper">
              <label htmlFor='date' >Date:</label>
              <input type='text' name='date' value={this.state.date} onChange={this.handleChange} ></input>
            </div>

            <div className="input-wrapper">
              <label htmlFor='focus' >Focus:</label>
              <textarea type='text' name='focus' value={this.state.focus} onChange={this.handleChange} ></textarea>
            </div>
            <div className="add-form-button-wrapper">
              <button type='submit'>Submit</button>
              <button type="button" onClick={this.clearForm}>Clear</button>
            </div>

          </form>
        </div>

        {/* submit coffee */}
        <div className="submit-form-wrapper coffee-form">
          <form onSubmit={this.props.handleSubmit} >
            <div className="input-wrapper">
              <label htmlFor='coffeeName' >Coffee Name:</label>
              <input type='text' name='coffeeName' value={this.state.coffeeName} onChange={this.handleChange} ></input>
            </div>

            <div className="input-wrapper">
              <label htmlFor='coffeeRoaster' >CoffeeRoaster:</label>
              <input type='text' name='coffeeRoaster' value={this.state.coffeeRoaster} onChange={this.handleChange} ></input>
            </div>
            <div className="add-form-button-wrapper">
              <button type='submit'>Submit</button>
              <button type="button" onClick={this.clearForm}>Clear</button>
            </div>

          </form>
        </div>

        {/* submit music */}
        <div className="submit-form-wrapper music-form">
          <form onSubmit={this.props.handleSubmit} >

            <div className="input-wrapper">
              <label htmlFor='albumTitle' >Album Title:</label>
              <input type='text' name='albumTitle' value={this.state.albumTitle} onChange={this.handleChange} ></input>
            </div>

            <div className="input-wrapper">
              <label htmlFor='albumArtist' >Album Artist:</label>
              <input type='text' name='albumArtist' value={this.state.albumArtist} onChange={this.handleChange} ></input>
            </div>
            <div className="add-form-button-wrapper">
              <button type='submit'>Submit</button>
              <button type="button" onClick={this.clearForm}>Clear</button>
            </div>
          </form>
        </div>

        {/* submit resource */}
        <div className="submit-form-wrapper resource-form">
          <form onSubmit={this.props.handleSubmit} >
            <div className="input-wrapper">
              <label htmlFor='resourceName' >Resource Name:</label>
              <input type='text' name='resourceName' value={this.state.resourceName} onChange={this.handleChange} ></input>
            </div>

            <div className="input-wrapper">
              <label htmlFor='resourceUrl'>Resource URL:</label>
              <input type='text' name='resourceUrl' value={this.state.resourceUrl} onChange={this.handleChange}></input>
            </div>

            <div className="add-form-button-wrapper">
              <button type='submit'>Submit</button>
              <button type="button" onClick={this.clearForm}>Clear</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default Add
