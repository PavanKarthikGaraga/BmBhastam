import './delivery.css'

export default function Delivery() {
    return (
        <div className="delivery-component">
            <div className="delivery-component-in">
                <div className="delivery-component-in-header">
                    <div className="delivery-component-in-header-one">
                        <h1>Delivery</h1>
                    </div>
                    <div className="delivery-component-in-header-two">
                        <div className="search-input-container">
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="delivery-component-in-body">
                    <div className="delivery-component-in-body-in">
                        <div className="delivery-component-in-body-in-options">
                            <button>Add Delivery</button>
                            <button>Check Delivery</button>
                            <button>Delivery History</button>
                            <button>Delivery Status</button>
                        </div>
                        <div className="delivery-component-in-body-in-tracking">
                            <div className="delivery-component-in-body-in-tracking-heading">
                                <h1>Tracking</h1>
                            </div>
                            <div className="delivery-component-in-body-in-tracking-main">
                                <div className="tracking-timeline">
                                    <div className="tracking-item">
                                        <div className="tracking-dot"></div>
                                        <div className="tracking-content">
                                            <h3>Order Placed</h3>
                                            <p>Your order has been confirmed</p>
                                            <span className="tracking-date">March 15, 2024 - 10:30 AM</span>
                                        </div>
                                    </div>
                                    <div className="tracking-item">
                                        <div className="tracking-dot"></div>
                                        <div className="tracking-content">
                                            <h3>Processing</h3>
                                            <p>Your order is being processed</p>
                                            <span className="tracking-date">March 15, 2024 - 11:45 AM</span>
                                        </div>
                                    </div>
                                    <div className="tracking-item">
                                        <div className="tracking-dot"></div>
                                        <div className="tracking-content">
                                            <h3>In Transit</h3>
                                            <p>Your package is on the way</p>
                                            <span className="tracking-date">March 15, 2024 - 2:15 PM</span>
                                        </div>
                                    </div>
                                    <div className="tracking-item">
                                        <div className="tracking-dot"></div>
                                        <div className="tracking-content">
                                            <h3>Out for Delivery</h3>
                                            <p>Your package will be delivered today</p>
                                            <span className="tracking-date">March 16, 2024 - 9:00 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}