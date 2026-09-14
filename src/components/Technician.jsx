import "../styles/Dashboard.css";

const technicians = [
  { id: "T-101", name: "Arun Kumar", skill: "Engine service", phone: "+91 98765 43210", jobs: 12, status: "Available" },
  { id: "T-102", name: "Priya S", skill: "Electrical repair", phone: "+91 98765 43211", jobs: 8, status: "On Job" },
  { id: "T-103", name: "Mohammed Ali", skill: "Tyres and brakes", phone: "+91 98765 43212", jobs: 15, status: "Available" },
  { id: "T-104", name: "Karthik R", skill: "General service", phone: "+91 98765 43213", jobs: 6, status: "Off Duty" },
];

function Technician() {
  return (
    <div className="technician-page">
      <div className="technician-heading">
        <div>
          <p className="page-kicker">BIKE SERVICE CENTER</p>
          <h1>Technicians</h1>
          <p className="page-description">Manage your bike service technicians and their availability.</p>
        </div>
        <button className="add-technician" type="button">+ Add Technician</button>
      </div>

      <section className="technician-summary">
        <article><span>Total Technicians</span><strong>25</strong></article>
        <article><span>Available Today</span><strong>18</strong></article>
        <article><span>Currently On Job</span><strong>5</strong></article>
        <article><span>Off Duty</span><strong>2</strong></article>
      </section>

      <section className="technician-list">
        <div className="list-header">
          <h2>Technician List</h2>
          <input type="search" placeholder="Search technician" aria-label="Search technician" />
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Specialty</th><th>Phone</th>
                <th>Completed Jobs</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
                 {technicians.map((technician) => (
                <tr key={technician.id}>
                  <td>{technician.id}</td>
                  <td className="technician-name">{technician.name}</td>
                  <td>{technician.skill}</td>
                  <td>{technician.phone}</td>
                  <td>{technician.jobs}</td>
                  <td><span className={`status status-${technician.status.toLowerCase().replace(" ", "-")}`}>{technician.status}</span></td>
                  <td><button className="view-button" type="button">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Technician;
