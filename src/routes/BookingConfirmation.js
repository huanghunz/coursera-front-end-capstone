import { useLocation, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import './BookingConfirmation.css';

const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
  });

  const ComplexForm = () => {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert('Booking confirmed');
        }}
      >
        {({ isSubmitting }) => (
          <Form className='booking-context-form'>
            <div className='form-field'>
                <div className='form-field-label'>
                    <label>Name:</label>
                   <div className='form-field-label-error'>
                    <ErrorMessage name="name" />
                   </div>
                </div>
              <Field name="name" type="text" />

            </div>
            <div className='form-field'>
                <div className='form-field-label'>
                    <label>Email:</label>
                    <div className='form-field-label-error'>
                    <ErrorMessage name="email" />
                   </div>
                </div>
              <Field name="email" type="email" />

            </div>

            <div className='form-field'>
                <div className='form-field-label'>
                    <label>Phone:</label>
                    <div className='form-field-label-error'>
                    <ErrorMessage name="phone" />
                   </div>
                </div>
              <Field name="phone" type="text" />

            </div>

            <button className='submit-btn' type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  };



const BookingConfirmation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { finalTime, selectedDate, selectedGuestsNumber } = location.state || {}

    const month   = (selectedDate.getMonth() + 1).toString().padStart(2,"0");
    const day     = selectedDate.getDate().toString().padStart(2,"0");
    const year    = selectedDate.getFullYear();

    // Using template literals:
    const newDate = `${year}/${month}/${day}`;

    return (
        <div>
            <div className='booking-content'>
                <div className='booking-content-header'>
                   <h1>Booking Confirmation</h1>
                   <button className="back-to-pick-date" onClick={() => navigate('/booking')}>Back To Pick Date</button>

                </div>
                <div className='booking-content-info'>
                    <p>Date: {newDate}</p>
                    <p>Time: {finalTime.label}</p>
                    <p>Number of Parties: {selectedGuestsNumber.label}</p>
                </div>
            </div>

            <div className='booking-content-form-container'>
            <h3>Contact Information</h3>
                <div className='booking-content-form'>
                    <ComplexForm />
                </div>
            </div>

        </div>
    )
}

export default BookingConfirmation;
