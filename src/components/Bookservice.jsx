import { useState } from 'react';
import '../styles/Dashboard.css';

const serviceOptions = [
  'General Service',
  'Oil Change',
  'Brake Service',
  'Tyre Replacement',
  'Engine Repair',
  'Electrical Repair',
];

function Bookservice() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleNumber: '',
    vehicleModel: '',
    service: 'General Service',
    date: '',
    time: '10:00',
    notes: '',
  });
  const [booking, setBooking] = useState(null);

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
    <main className="booking-page">
      <section className="booking-intro">
        <p className="page-kicker">FIX MY RIDE</p>
        <h1>Book a Bike Service</h1>
        <p>Choose a convenient time and our technicians will take care of your bike.</p>
        <div className="booking-benefits">
          <article><span>✓</span><div><strong>Expert Technicians</strong><p>Skilled care for every bike.</p></div></article>
          <article><span>✓</span><div><strong>Transparent Pricing</strong><p>Know the cost before work starts.</p></div></article>
          <article><span>✓</span><div><strong>Easy Updates</strong><p>Get notified about your service.</p></div></article>
        </div>
      </section>

      <section className="booking-card">
        {booking ? (
          <div className="booking-success" role="status">
            <div className="success-icon">✓</div>
            <h2>Booking confirmed!</h2>
            <p>Thank you, {booking.name}. Your {booking.service.toLowerCase()} has been booked for {booking.date} at {booking.time}.</p>
            <p className="booking-reference">Booking reference: <strong>{booking.reference}</strong></p>
            <button type="button" className="new-booking-button" onClick={() => { setBooking(null); setForm((current) => ({ ...current, date: '', notes: '' })); }}>Book Another Service</button>
          </div>
        ) : (
          <>
            <div className="booking-card-heading">
              <h2>Service Details</h2>
              <p>Fill in the form below to reserve your appointment.</p>
            </div>
            <form className="booking-form" onSubmit={bookService}>
              <fieldset>
                <legend>Your details</legend>
                <div className="booking-grid">
                  <label>Full name<input name="name" value={form.name} onChange={updateForm} required placeholder="Enter your name" /></label>
                  <label>Phone number<input name="phone" type="tel" value={form.phone} onChange={updateForm} required placeholder="Enter your phone number" /></label>
                  <label className="booking-full-width">Email address <span>(optional)</span><input name="email" type="email" value={form.email} onChange={updateForm} placeholder="Enter your email" /></label>
                </div>
              </fieldset>
              <fieldset>
                <legend>Bike details</legend>
                <div className="booking-grid">
                  <label>Vehicle number<input name="vehicleNumber" value={form.vehicleNumber} onChange={updateForm} required placeholder="TN 01 AB 1234" /></label>
                  <label>Bike model<input name="vehicleModel" value={form.vehicleModel} onChange={updateForm} required placeholder="e.g. Honda Activa 6G" /></label>
                  <label className="booking-full-width">Service required<select name="service" value={form.service} onChange={updateForm}>{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
                </div>
              </fieldset>
              <fieldset>
                <legend>Appointment</legend>
                <div className="booking-grid">
                  <label>Preferred date<input name="date" type="date" value={form.date} onChange={updateForm} required /></label>
                  <label>Preferred time<select name="time" value={form.time} onChange={updateForm}><option>09:00</option><option>10:00</option><option>11:00</option><option>14:00</option><option>15:00</option><option>16:00</option></select></label>
                  <label className="booking-full-width">Additional notes <span>(optional)</span><textarea name="notes" value={form.notes} onChange={updateForm} rows="3" placeholder="Tell us about any issue with your bike" /></label>
                </div>
              </fieldset>
              <button className="book-service-button" type="submit">Confirm Booking</button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default Bookservice;
