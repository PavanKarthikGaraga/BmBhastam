import React from 'react';
import './overview.css';

function Overview() {
    return (
        <div className='overview-component'>
            <div className="overview-component-in">
                <div className="overview-component-in-heading">
                    <h1>Overview</h1>
                </div>
                <div className="overview-component-in-body">
                    {/* Stats Cards */}
                    <div className="overview-stats-grid">
                        <div className="overview-stats-card">
                            <div className="stats-card-header">Total Users</div>
                            <div className="stats-card-value">1,234</div>
                            <div className="stats-card-change positive">+12.5%</div>
                        </div>
                        <div className="overview-stats-card">
                            <div className="stats-card-header">Active Sessions</div>
                            <div className="stats-card-value">856</div>
                            <div className="stats-card-change positive">+5.2%</div>
                        </div>
                        <div className="overview-stats-card">
                            <div className="stats-card-header">Total Revenue</div>
                            <div className="stats-card-value">₹9,85,345</div>
                            <div className="stats-card-change negative">-2.4%</div>
                        </div>
                        <div className="overview-stats-card">
                            <div className="stats-card-header">Conversion Rate</div>
                            <div className="stats-card-value">3.2%</div>
                            <div className="stats-card-change positive">+1.1%</div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="overview-charts-section">
                        <div className="overview-chart-container">
                            <div className="chart-header">
                                <h3>Monthly Revenue (INR)</h3>
                            </div>
                            <div className="chart-body">
                                {/* Demo Chart Bar */}
                                <div className="demo-chart">
                                    <div className="chart-bar" style={{ height: '60%' }}></div>
                                    <div className="chart-bar" style={{ height: '80%' }}></div>
                                    <div className="chart-bar" style={{ height: '40%' }}></div>
                                    <div className="chart-bar" style={{ height: '90%' }}></div>
                                    <div className="chart-bar" style={{ height: '70%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="overview-chart-container">
                            <div className="chart-header">
                                <h3>User Growth</h3>
                            </div>
                            <div className="chart-body">
                                {/* Demo Line Chart */}
                                <div className="demo-line-chart">
                                    <div className="line-point" style={{ left: '10%', bottom: '20%' }}></div>
                                    <div className="line-point" style={{ left: '30%', bottom: '40%' }}></div>
                                    <div className="line-point" style={{ left: '50%', bottom: '60%' }}></div>
                                    <div className="line-point" style={{ left: '70%', bottom: '50%' }}></div>
                                    <div className="line-point" style={{ left: '90%', bottom: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
