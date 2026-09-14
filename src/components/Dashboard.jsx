import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">

            <header>
                <p>Admin Dashboard</p>
            </header>

            <div className="layout">

                <main>

                    <section className="section">

                        <article className="card">
                            <h3>Total customer</h3>
                            <p>700</p>
                        </article>

                        <article className="card">
                            <h3>Total income</h3>
                            <p>500</p>
                        </article>

                        <article className="card">
                            <h3>Total bill</h3>
                            <p>40</p>
                        </article>

                        <article className="card">
                            <h3>Total technicians</h3>
                            <p>25</p>
                        </article>

                    </section>

                    <footer>
                        <p>@2026 Bike service</p>
                    </footer>

                </main>

            </div>

        </div>
    );
}

export default Dashboard;
