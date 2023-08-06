import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/anil">Anil</Link>
          </li>
          <li>
            <Link to="/dashboard/Madu">MAdu</Link>
          </li>
        </ul>
          </nav>
          <main>
              <Outlet/>
          </main>
    </div>
  );
}

export default Dashboard
