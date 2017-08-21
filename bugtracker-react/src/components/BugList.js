import React, { Component } from 'react'
import BugItem from './BugItem'

class BugList extends Component {
  render () {
    var bugList = [
        {
          id: 1,
          description: 'lala',
          severity: 'easy',
          assignedTo: 'fajar',
          status: 'unsolved'
        },
        {
          id: 2,
          description: 'lili',
          severity: 'medium',
          assignedTo: 'fajar',
          status: 'solved'
        }
      ]

    return (
      <div>
      {bugList.map( b => {
        return (
              <BugItem className="columns" id={b.id} description={b.description} severity={b.severity} assignedTo={b.assignedTo} status={b.status}/>
            )
        })}
      </div>
    )
  }
 }

 export default BugList
