import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const { text, completed, onClick } = this.props
    return (
      <div>
        <li
          onClick={ () => onClick() }
          style={{
            textDecoration: completed ? 'line-through' : ''
          }}
        >
          { text }
        </li>
      </div>
    )
  }
}
