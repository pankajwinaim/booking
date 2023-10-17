import React, { useState } from 'react';
import './Form.css';

function GuestInformationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    district: '',
    pincode: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="guest-information-form">
      <div className="Header-Top">
        <h1>Hotel Reservation Form</h1>
        <h3>Please Complete the form below.</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="name-label">
            <label htmlFor="name" className="full-name-label">Full Name</label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="name-field">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="address" className="full-name-label">Address</label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <input
                type="text"
                id="address1"
                name="address1"
                placeholder="Street Address"
                value={formData.address1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="name-field">
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Street Address Line 2"
                value={formData.address2}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="city" className="full-name-label">City and State</label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="name-field">
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="district" className="full-name-label">District and Pincode</label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <input
                type="text"
                id="district"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>
            <div className="name-field">
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="email" className="full-name-label">Email</label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="eg@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="phoneNumber" className="full-name-label">Phone Number</label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="checkIntDate" className="full-name-label">Check-in and Check-Out Date</label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <input
                type="date"
                id="checkIntDate"
                name="checkIntDate"
                placeholder="DD/MM/YYYY"
                value={formData.checkIntDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="name-field">
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                placeholder="DD/MM/YYYY"
                value={formData.checkIntDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="paymentMethod" className="full-name-label">
              Payment Method
            </label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <label>
                <input
                  type="radio"
                  id="Cash"
                  name="paymentMethod"
                  value="Cash"
                  checked={formData.paymentMethod === 'Cash'}
                  onChange={handleChange}
                />
                Cash
              </label>
            </div>
            <div className="name-field">
              <label>
                <input
                  type="radio"
                  id="Online"
                  name="paymentMethod"
                  value="Online"
                  checked={formData.paymentMethod === 'Online'}
                  onChange={handleChange}
                />
                Online
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="name-label">
            <label htmlFor="specialRequest" className="full-name-label">
              Special Request
            </label>
          </div>
          <div className="name-fields">
            <div className="name-field">
              <textarea
                id="specialRequest"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
                placeholder="Any special requests or additional information?"
                style={{ width: '100%', height: '100px' }}
                rows="4"
                
              />
            </div>
          </div>
        </div>
        

        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GuestInformationForm;
