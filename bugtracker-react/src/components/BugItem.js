import React, { Component } from 'react'

class BugItem extends Component {

  setStatusClosed(id) {
    // let bugs = JSON.parse(localStorage.getItem('bugs')
  }

  render () {
    return (
      <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: { this.props.id }
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            { this.props.description }
            <span className="tag is-info">{ this.props.severity }</span>
            <p>Assigned To: { this.props.assignedTo } </p>
          </div>
          <br/>
          <small className="tag is-primary">{ this.props.status }</small>
        </div>
        <footer className="card-footer">
          <a onClick={this.setStatusClosed(this.props.id)} className="is-warning card-footer-item">Close</a>
          <a className="card-footer-item" onClick=this.deleteBug(this.props.id)>Delete</a>
        </footer>
      </div>
        <br/>
      </div>
    )
  }
}

export default BugItem
