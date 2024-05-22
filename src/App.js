import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // Step 1: Define state variables
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Step 2: Implement functions to add data
  const addContact = (name, phoneNumber, email) => {
    const newContact = { name, phoneNumber, email };
    setContacts([...contacts, newContact]);
  };

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = { name, contact, date, time };
    setAppointments([...appointments, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      {/* Step 3: Pass data and functions as props */}
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} />} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />} />
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
