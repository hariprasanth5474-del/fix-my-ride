import { useState } from 'react';
import '../styles/Dashboard.css';


function Customerreg() {
  const [customer, setCustomer] = useState({
    // name: '',
    // phone: '',
    // email: '',
    // date: '',
    // passwaord:'',
    // confirmpasswaord:'',
  });
  const [form, setForm] = useState({});
  const [booking, setBooking] = useState(null);

  const updateConstomer = (e) => {
    // console.log("event", e);
    const { name, value } = e.target;
    // console.log("event.target", name, value);
    setCustomer((currentCustomer) => ({  ...currentCustomer , [name]: value }));
    console.log("customer", customer);

  }

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setBooking(null);
  };

  const bookService = (event) => {
    event.preventDefault();
    setBooking({ ...form, reference: `SRV-${String(Date.now()).slice(-6)}` });
  };

  return (
    <main className="regitration-page">
      <section className="reg">
        <p className="kicker">FIX MY RIDE</p>
        <h1>Customer Regitration Page</h1>
    
      </section>

      <section className="regitration-card">
        {booking ? (
          <div className="reg-success" role="status">
            <div className="success--icon">✓</div>
            <h2>Registration Complete!</h2>
            <p>Thank you, {booking.name}</p>
         
          </div>
        ) : (
          <>
            <div className="regitaraion-card-heading">
              <h2>Customer Details</h2>
              <p>Fill the Details</p>
            </div>
            <form className="reg-form" onSubmit={bookService}>
              <fieldset>
                <legend>Your details</legend>
                <div className="reg-grid">
                  <label>Full name<input name="name" value={customer.name || ''} onChange={updateConstomer} required placeholder="Enter your name" /></label>
                  <label>Phone number<input name="phone" value={form.phone} onChange={updateConstomer} required placeholder="Enter your phone number" /></label>
                  <label className="booking-full-width">Email address <input name="email" type="email" value={form.email} onChange={updateConstomer} placeholder="Enter your email" /></label>
                  <label className="booking-full-width">Password <input name="password" type="password" value={form.password} onChange={updateConstomer} placeholder="Enter your password" /></label>
                  <label className="booking-full-width">Confirm Password <input name="confirmpassword" type="password" value={form.confirmpasswaord} onChange={updateConstomer} placeholder="Confirm Password" /></label>

                </div>

            
              </fieldset>
        
              <button className="reg-button" type="submit">Confirm Details</button>
            </form> 
          </>
        )}
      </section>
    </main>
  );
}

export default Customerreg;
