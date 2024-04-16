import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    contactMethod: 'email',
    locationPreferences: '',
    propertyType: '',
    budget: '',
    additionalComments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, such as sending data to server or performing client-side validation

    if(!formData.name || !formData.email){
      alert('Name and Email must be provided');
      return;
    }
    console.log(formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        contactMethod: 'email',
        locationPreferences: '',
        propertyType: '',
        budget: '',
        additionalComments: ''
      });
      
      window.location.href = '/';
    }, 3000);
  };

  return (
    <>
    {!submitted ?

    (<form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="contactMethod" className="form-label">Preferred Contact Method</label>
        <select className="form-select" id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="both">Both</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="locationPreferences" className="form-label">Location Preferences</label>
        <input type="text" className="form-control" id="locationPreferences" name="locationPreferences" value={formData.locationPreferences} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="propertyType" className="form-label">Property Type</label>
        <input type="text" className="form-control" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="budget" className="form-label">Budget</label>
        <input type="text" className="form-control" id="budget" name="budget" value={formData.budget} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="additionalComments" className="form-label">Additional Comments</label>
        <textarea className="form-control" id="additionalComments" name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>) : (

          <div className="alert alert-success" role="alert">
          Form submitted successfully. Redirecting to home...
          </div>


    )}

    </>
  );
};

export default SignUpForm;
