import { useState } from 'react';
import '../styles/Dashboard.css';

function Settings() {
  const [settings, setSettings] = useState({
    centerName: 'Fix My Ride',
    phone: '+91 98765 43210',
    email: 'hello@fixmyride.in',
    address: '45 Anna Nagar, Chennai, Tamil Nadu',
    tax: '18',
    notifications: true,
  });
  const [saved, setSaved] = useState(false);

  const updateSetting = (event) => {
    const { name, value, checked, type } = event.target;
    setSettings((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setSaved(false);
  };

  const saveSettings = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="settings-page">
      <div className="settings-heading">
        <div>
          <p className="page-kicker">BIKE SERVICE CENTER</p>
          <h1>Settings</h1>
          <p className="page-description">Update your service center details and preferences.</p>
        </div>
      </div>

      <form className="settings-form" onSubmit={saveSettings}>
        <section className="settings-card">
          <h2>Service Center Details</h2>
          <p>These details appear on your customer invoices.</p>
          <div className="settings-grid">
            <label>Center name<input name="centerName" value={settings.centerName} onChange={updateSetting} /></label>
            <label>Phone number<input name="phone" type="tel" value={settings.phone} onChange={updateSetting} /></label>
            <label>Email address<input name="email" type="email" value={settings.email} onChange={updateSetting} /></label>
            <label>GST / Tax rate (%)<input name="tax" type="number" min="0" value={settings.tax} onChange={updateSetting} /></label>
            <label className="settings-full-width">Address<textarea name="address" rows="3" value={settings.address} onChange={updateSetting} /></label>
          </div>
        </section>

        <section className="settings-card">
          <h2>Notifications</h2>
          <p>Choose how you want to receive service updates.</p>
          <label className="toggle-setting">
            <input name="notifications" type="checkbox" checked={settings.notifications} onChange={updateSetting} />
            <span>Receive daily service and payment summaries</span>
          </label>
        </section>

        <div className="settings-actions">
          {saved && <span className="saved-message">Settings saved successfully.</span>}
          <button className="save-settings-button" type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
