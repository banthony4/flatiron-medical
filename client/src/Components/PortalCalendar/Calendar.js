import React, { useState } from 'react';

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
  const [currentView, setCurrentView ] = useState('Month')
  const [currentDate, setCurrentDate ] = useState('2022-06-01')
  const docAppointments = appointments.filter(appt => appt.docter_id === user.id)
  console.log('docAppointments: ', docAppointments);

  return (
    <Paper>
        <Scheduler
          data={docAppointments}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={(currentDate) => setCurrentDate(currentDate)}
            currentViewName={currentView}
            onCurrentViewNameChange={(currentView) => setCurrentView(currentView)}
          />
          <EditingState
            // onCommitChanges={this.commitChanges}
            // addedAppointment={addedAppointment}
            // onAddedAppointmentChange={this.changeAddedAppointment}
            // appointmentChanges={appointmentChanges}
            // onAppointmentChangesChange={this.changeAppointmentChanges}
            // editingAppointment={editingAppointment}
            // onEditingAppointmentChange={this.changeEditingAppointment}
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
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
  )
}

export default Calendar;
