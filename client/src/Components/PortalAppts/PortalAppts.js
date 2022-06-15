import React from 'react'
import PortalNav from '../PortalNav/PortalNav'
import './PortalAppts.css'

class PortalAppts extends React.Component { 
  docAppointments 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {expand: false}
    this.appts = this.props.docAppointments
  }
  handleClick () {
    this.setState({ expand: !this.state.expand}) 
  }

  render() {
    return(
    <div>
      <PortalNav />
      <div className='appt-list' >
      { this.appts.map(appt => {
        return (
          <div className='appt'>
            <button type="button" className="collapsible" onClick={this.handleClick}>
              {appt.startDate.split('-')[1]}/{appt.startDate.split('-')[2].split('T')[0]}/{appt.startDate.split('-')[0]}:
              <br></br>
              {appt.patient}
            </button>
            <ul className={this.state.expand ? "show-content" : 'hide-content'}>
              <li>Procedure: {appt.title}</li>
              <li>Room: {appt.location}</li>
              <li>Notes: {appt.notes}</li>
            </ul>
          </div>
        )
      }) }
      </div>
    </div>
    )
  }
}



export default PortalAppts