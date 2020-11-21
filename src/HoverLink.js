import React from 'react'

export default class HoverLink extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      class: 'normal'
    }
  }

  _onMouseEnter = () => {
    this.setState({ class: 'hover' })
  }

  _onMouseLeave = () => {
    this.setState({ class: 'normal' })
  }

  render () {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        data-testid='test'
      >
        {this.props.children}
      </a>
    )
  }
}
