import { useMemo, useState } from 'react';
import '../styles/Dashboard.css';

const initialBills = [
  { id: 'INV-1001', customer: 'Ravi Kumar', vehicle: 'Royal Enfield Classic 350', service: 'General Service', date: '06 Sep 2026', amount: 1850, status: 'Paid' },
  { id: 'INV-1002', customer: 'Meena R', vehicle: 'Honda Activa 6G', service: 'Oil Change', date: '07 Sep 2026', amount: 780, status: 'Pending' },
  { id: 'INV-1003', customer: 'Arjun S', vehicle: 'Yamaha FZ-S', service: 'Brake Service', date: '07 Sep 2026', amount: 1420, status: 'Paid' },
  { id: 'INV-1004', customer: 'Divya P', vehicle: 'TVS Raider 125', service: 'Engine Repair', date: '08 Sep 2026', amount: 3650, status: 'Pending' },
];

function Bill() {
  const [bills, setBills] = useState(initialBills);
  const [search, setSearch] = useState('');

  const filteredBills = useMemo(() => {
    const query = search.toLowerCase().trim();
    return bills.filter((bill) =>
      `${bill.id} ${bill.customer} ${bill.vehicle} ${bill.service}`.toLowerCase().includes(query),
    );
  }, [bills, search]);

  const totalRevenue = bills.filter((bill) => bill.status === 'Paid').reduce((sum, bill) => sum + bill.amount, 0);
  const pendingAmount = bills.filter((bill) => bill.status === 'Pending').reduce((sum, bill) => sum + bill.amount, 0);

  const markAsPaid = (id) => {
    setBills((currentBills) => currentBills.map((bill) => (
      bill.id === id ? { ...bill, status: 'Paid' } : bill
    )));
  };

  return (
    <div className="bill-page">
      <div className="bill-heading">
        <div>
          <p className="page-kicker">BIKE SERVICE CENTER</p>
          <h1>Billing</h1>
          <p className="page-description">Track service invoices and payment status.</p>
        </div>
        <button className="create-bill-button" type="button">+ Create Bill</button>
      </div>

      <section className="bill-summary" aria-label="Billing summary">
        <article><span>Total Invoices</span><strong>{bills.length}</strong></article>
        <article><span>Paid Revenue</span><strong>₹{totalRevenue.toLocaleString('en-IN')}</strong></article>
        <article><span>Pending Amount</span><strong>₹{pendingAmount.toLocaleString('en-IN')}</strong></article>
        <article><span>Pending Invoices</span><strong>{bills.filter((bill) => bill.status === 'Pending').length}</strong></article>
      </section>

      <section className="bill-list">
        <div className="bill-list-header">
          <h2>Recent Invoices</h2>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search invoice or customer"
            aria-label="Search invoice or customer"
          />
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Invoice</th><th>Customer</th><th>Vehicle</th><th>Service</th>
                <th>Date</th><th>Amount</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBills.map((bill) => (
                <tr key={bill.id}>
                  <td className="invoice-id">{bill.id}</td>
                  <td className="customer-name">{bill.customer}</td>
                  <td>{bill.vehicle}</td>
                  <td>{bill.service}</td>
                  <td>{bill.date}</td>
                  <td className="bill-amount">₹{bill.amount.toLocaleString('en-IN')}</td>
                  <td><span className={`bill-status bill-status-${bill.status.toLowerCase()}`}>{bill.status}</span></td>
                  <td>
                    {bill.status === 'Pending' ? (
                      <button className="pay-button" type="button" onClick={() => markAsPaid(bill.id)}>Mark Paid</button>
                    ) : (
                      <button className="invoice-button" type="button">View</button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredBills.length === 0 && (
                <tr><td className="empty-bills" colSpan="8">No invoices match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Bill;
