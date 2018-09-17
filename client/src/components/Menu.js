import React, { Fragment } from 'react'
import axios from 'axios'
import Form from './Form'

class Menu extends React.Component {
  state = { menu: {}, items: [], edit: false }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then(res => this.setState({ menu: res.data }))
    
    axios.get(`/api/menus/${this.props.match.params.id}/items`)
      .then(res => this.setState({ items: res.data }))
  }

  toggleEdit = () => {
    this.setState(state => {
      return { edit: !this.state.edit }
    })
  }

  submit = (menu) => {
    axios.put(`/api/menus/${this.props.match.params.id}`, { menu })
      .then(res => this.setState({ menu: res.data, edit: false }) )
  }

  show() {
    const { menu: { name }} = this.state
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }

  edit() {
    return <Form {...this.state.menu} submit={this.submit} />
  }

  render() {
    const { edit } = this.state
    return (
      <Fragment>
        <div>
          { edit ? this.edit() : this.show() }
          <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
        </div>
        <div>
          <ul>
            {this.state.items.map( item =>
                <li key={item.id}>{item.name} - ${item.price}</li>
              )
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Menu
