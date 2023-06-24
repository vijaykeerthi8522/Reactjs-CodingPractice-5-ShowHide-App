// Write your code here
// Write your code here

import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  clickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  clickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-conatiner">
        <div className="content-container">
          <h1 className="main-heading">Show/Hide</h1>
          <div className="content">
            <div className="name-conatiner">
              <button
                type="button"
                className="show-hide"
                onClick={this.clickFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstName ? <p className="name">Joe</p> : null}
            </div>
            <div className="name-conatiner">
              <button
                type="button"
                className="show-hide"
                onClick={this.clickLastName}
              >
                Show/Hide Lastname
              </button>
              {lastName ? <p className="name">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
