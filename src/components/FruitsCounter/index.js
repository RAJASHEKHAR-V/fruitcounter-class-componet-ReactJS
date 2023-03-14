import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-Container">
        <div className="card">
          <h1 className="displayHeading">
            Bob ate <span className="countColor">{mangoCount}</span> mangoes{' '}
            <span className="countColor">{bananaCount}</span> bananas
          </h1>
          <div className="button-body">
            <div className="button-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mangoImage"
                alt="mango"
              />
              <div>
                <button
                  className="mangoButton"
                  type="submit"
                  onClick={this.onMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="button-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="bananaImage"
                alt=" banana"
              />
              <div>
                <button
                  className="bananaButton"
                  type="submit"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
