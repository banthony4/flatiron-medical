import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAppointments, appointmentRemoved } from '../../Features/appointmentsSlice'
import PortalNav from '../PortalNav/PortalNav';

import Paper from '@mui/material/Paper';
import { ViewState,  EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  MonthView,
  DayView,
  EditRecurrenceMenu,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

const Calendar = ({ appointments, user }) => {
  const dispatch = useDispatch();
  const [currentView, setCurrentView ] = useState('Month')
  const [currentDate, setCurrentDate ] = useState('2022-06-01')
  const [apptId, setApptId] = useState({})
  const [editedAppt, setEditedAppt] = useState({})
  
  // const [appt, setAppt] = useState({
    //   doctor_id: user.id,
    //   patient_id: null,
    //   startDate: '',
    //   endDate: '',
    //   title: '',
    //   location: '',
    // })
  const docAppointments = appointments.filter(appt => appt.doctor_id === user.id)
  
  const changeEditingAppointment = (e) => {
    if(e){
      const key = Object.keys(e)[0]
      const value = Object.values(e)[0]
      setApptId(apptId => ({...apptId, [key]: value}))
    }
  }
  const changeAppointmentChanges = (e) => {
    setEditedAppt(e)
  }
  const commitChanges = ({added, changed, deleted}) => {
    console.log('commit appt',editedAppt.startDate)
    console.log('commit id', apptId)
    if(changed){
      const apptObj = {...editedAppt, ...apptId}
      dispatch(updateAppointments(apptObj))
      // .then(docAppointments.map(appt => appt.id === apptId.id ?  ))
    } else if( deleted ){
      console.log('apptId.id: ', apptId.id);
      dispatch(appointmentRemoved(apptId.id))
      // docAppointments.filter(appt => appt.id !== apptId.id)
    }else{
      console.log('added')
    }
  }

  return (
    <div>
    <PortalNav />
    <Paper>
        <Scheduler
          data={docAppointments}
          height={660}
          startDate={'string'}
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={(currentDate) => setCurrentDate(currentDate)}
            currentViewName={currentView}
            onCurrentViewNameChange={(currentView) => setCurrentView(currentView)}
          />
          <EditingState
            onCommitChanges={commitChanges}
            // addedAppointment={addedAppointment}
            // onAddedAppointmentChange={changeAddedAppointment}
            // appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}
            onEditingAppointmentChange={changeEditingAppointment}
          />
          <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <MonthView />
          <DayView />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
          {/* <AppointmentTooltip
            showOpenButton
            showDeleteButton
            onClick={changeEditingAppointment}
          /> */}
          <AppointmentForm />
          <AppointmentForm.Label
            text="Custom Field"
            type="boolean"
          />
        </Scheduler>
      </Paper>
    </div>
  )
}

export default Calendar;
