import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAppointments, deleteAppointment, createAppointment } from '../../Features/appointmentsSlice'
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

const Calendar = ({ docAppointments, user }) => {
  const dispatch = useDispatch();
  const [currentView, setCurrentView ] = useState('Month')
  const [currentDate, setCurrentDate ] = useState('2022-06-01')
  const [apptId, setApptId] = useState({})
  
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
      console.log('apptObj: ', apptObj);
      dispatch(updateAppointments(apptObj))
    } else if( deleted ){
      dispatch(deleteAppointment(apptId.id))
    }else{
      dispatch(createAppointment(added))
    }
  }

  const TextEditor = (props) => {
    if (props.type === 'multilineTextEditor') {
      return null;
    } return <AppointmentForm.TextEditor {...props} />;
  };

  const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    
    const onPatientChange = (e) => {
      onFieldChange({patient_id: e})
    };
    const onDoctorChange = (e) => {
      onFieldChange({ doctor_id: e })
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
          text="patient_id"
          type="title"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.patient_id}
          onValueChange={onPatientChange}
          placeholder="Patient_id"
        />
        <AppointmentForm.Label
          text="doctor_id"
          type="title"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.doctor_id}
          onValueChange={onDoctorChange}
          placeholder="doctor_id"
        />
        <AppointmentForm.Label
          text="notes"
          type="title"
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
    </div>
  )
}

export default Calendar;
