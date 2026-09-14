import { useMemo, useState } from 'react';
import '../styles/Dashboard.css';

const customers = [
  { id: 'C-201', name: 'Ravi Kumar', phone: '+91 98765 41021', vehicle: 'Royal Enfield Classic 350', visits: 6, lastVisit: '06 Sep 2026' },
  { id: 'C-202', name: 'Meena R', phone: '+91 98765 41022', vehicle: 'Honda Activa 6G', visits: 3, lastVisit: '07 Sep 2026' },
  { id: 'C-203', name: 'Arjun S', phone: '+91 98765 41023', vehicle: 'Yamaha FZ-S', visits: 8, lastVisit: '07 Sep 2026' },
  { id: 'C-204', name: 'Divya P', phone: '+91 98765 41024', vehicle: 'TVS Raider 125', visits: 2, lastVisit: '08 Sep 2026' },
];

function Customers() {
  const [search, setSearch] = useState('');
  const matchingCustomers = useMemo(() => {
    const query = search.toLowerCase().trim();
    return customers.filter((customer) =>
      `${customer.name} ${customer.phone} ${customer.vehicle} ${customer.id}`.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <div className="customers-page">
      <div className="customers-heading">
        <div>
          <p className="page-kicker">BIKE SERVICE CENTER</p>
          <h1>Customers</h1>
          <p className="page-description">Manage your customer records and vehicle history.</p>
        </div>
        <button className="add-customer-button" type="button">+ Add Customer</button>
      </div>

      <section className="customer-summary" aria-label="Customer summary">
        <article><span>Total Customers</span><strong>700</strong></article>
        <article><span>New This Month</span><strong>42</strong></article>
        <article><span>Returning Customers</span><strong>518</strong></article>
        <article><span>Service Due Soon</span><strong>18</strong></article>
      </section>

      <section className="customer-list">
        <div className="customer-list-header">
          <h2>Customer List</h2>
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search customer or vehicle" aria-label="Search customer or vehicle" />
        </div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>ID</th><th>Customer</th><th>Phone</th><th>Vehicle</th><th>Visits</th><th>Last Visit</th><th>Action</th></tr></thead>
            <tbody>
              {matchingCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="customer-id">{customer.id}</td><td className="customer-name">{customer.name}</td>
                  <td>{customer.phone}</td><td>{customer.vehicle}</td><td>{customer.visits}</td><td>{customer.lastVisit}</td>
                  <td><button className="customer-view-button" type="button">View Profile</button></td>
                </tr>
              ))}
              {matchingCustomers.length === 0 && <tr><td className="empty-customers" colSpan="7">No customers match your search.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Customers;
