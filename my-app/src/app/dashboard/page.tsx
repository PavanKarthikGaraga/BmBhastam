import Nav from '../components/nav/nav'
import './dashboard.css'

export default function Dashboard() {
    return (
        <div className="dashboard-component">
            <div className="dashboard-component-nav">
                <Nav />
            </div>
            <div className="dashboard-component-main-content">
                <div className="dashboard-component-icon-sidebar">
                </div>
                <div className="dashboard-component-options-sidebar">
                </div>
                <div className="dashboard-component-content">
                </div>
            </div>
        </div>
    )
}