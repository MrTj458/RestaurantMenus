import React from 'react'
import axios from 'axios'

class Menu extends React.Component {
  state = { menu: {} }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then(res => this.setState({ menu: res.data }))
  }

  render() {
    const { menu: { name }} = this.state
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default Menu
