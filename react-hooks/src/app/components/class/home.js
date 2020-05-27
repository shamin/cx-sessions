import React from 'react'
import Row from '../row'

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mary',
      width: window.innerWidth,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    document.title = this.state.name
    window.addEventListener('resize', this.handleResize)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.setState({
      width: window.innerWidth
    })
  }

  componentDidUpdate() {
    document.title = this.state.name
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Row label="Name">
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </Row>
        <Row label="Width">
          <div>{this.state.width}</div>
        </Row>
      </div>
    )
  }
}
