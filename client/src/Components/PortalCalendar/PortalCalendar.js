import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBEAppointment, updateFEAppointment, deleteBEAppointment, deleteFEAppointment, createAppointment } from '../../Features/appointmentsSlice'
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

const PortalCalendar = ({ docAppointments, user, patientAppts, patients }) => {
  const dispatch = useDispatch();
  const [currentView, setCurrentView ] = useState('Month')
  const [currentDate, setCurrentDate ] = useState('2022-06-21')
  const [apptId, setApptId] = useState({})
  const patientNames = patients.map(p => ({id: p.id, text: p.name}))

  const changeEditingAppointment = (e) => {
    if(e){
      const key = Object.keys(e)[0]
      const value = Object.values(e)[0]
      setApptId(apptId => ({...apptId, [key]: value}))
    }
  }

  const commitChanges = ({ added, changed, deleted }) => {
    if(changed){
      const apptObj = {...changed[apptId.id], ...apptId}
      dispatch(updateBEAppointment(apptObj)) //To update both front end and back end I had to create to seperate functions in the appointmentsSlice component, one is a reducer in the createSlice() method the other is an extra reducer using a traditional fetch. This was only way for the updates to both render in the front end and persist in the backend. 
      dispatch(updateFEAppointment(apptObj))
    } else if( deleted ){
      dispatch(deleteFEAppointment(apptId.id)) //same reasoning as above
      dispatch(deleteBEAppointment(apptId.id))
    }else{
      const apptObj = {...added, ...{doctor_id: user.id}}
      dispatch(createAppointment(apptObj))
    }
  }

  const TextEditor = (props) => {
    if (props.type === 'multilineTextEditor') {
      return null;
    } return <AppointmentForm.TextEditor {...props} />;
  };

  const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onPatientChange = (e) => {
      onFieldChange({ patient_id: e })

    };
    const onNotesChange = (e) => {
      onFieldChange({ notes: e })
    };
    return (
      <AppointmentForm.BasicLayout
        appointmentData={appointmentData}
        onFieldChange={onFieldChange}
        {...restProps}
      >
        <AppointmentForm.Label
          text="patient"
          type="title"
        />
        <AppointmentForm.Select
          value={appointmentData.patient_id}
          onValueChange={onPatientChange}
          availableOptions={patientNames}
          selectOption="text"
          type="filled"
        />
        <AppointmentForm.Label
          type="title"
          text="patient"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.notes}
          onValueChange={onNotesChange}
          placeholder="notes"
        />
      </AppointmentForm.BasicLayout>
    );
  };

  return (
    <div>
    <PortalNav user={user} />
    {user.doc ? 
      <Paper>
        <Scheduler
          data={docAppointments}
          height={700}
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
            onEditingAppointmentChange={changeEditingAppointment}
          />
          <WeekView
            startDayHour={5}
            endDayHour={24}
          />
          <MonthView />
          <DayView />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
          />
          <AppointmentForm 
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
        </Scheduler>
      </Paper>
    :
      <Paper>
        <Scheduler
          data={patientAppts}
          height={660}
          startDate={'string'}
        >
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={(currentDate) => setCurrentDate(currentDate)}
          currentViewName={currentView}
          onCurrentViewNameChange={(currentView) => setCurrentView(currentView)}
        />
        <WeekView
          startDayHour={5}
          endDayHour={24}
        />
        <MonthView />
        <DayView />
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip
        />
        </Scheduler>
      </Paper>
    }
    </div>
  )
}

export default PortalCalendar;
