import './notifcation.css'

export default function NotificationContent() {
    return (
        <div className='notification-component'>
            <div className="notification-component-in">
                <div className="notification-component-in-heading">
                    <h1>Notification Page</h1>
                </div>
                <div className="notifcation-component-in-body">
                    <div className="notfication-form-group">
                        <label className='content-label'>Logo - icon URL</label>
                        <input type="text" placeholder="Logo - icon" />
                    </div>
                    <div className="notfication-form-group">
                    <label className='content-label'>Notification Title</label>
                    <input type="text" placeholder="Notification Title" />
                    </div>
                    <div className="notfication-form-group">
                    <label className='content-label'>Notification Description</label>
                    <input type="text" placeholder="Notification Description" />
                    </div>
                    <div className="notfication-form-group">
                    <label className='content-label'>Notification Poster Url</label>
                    <input type="text" placeholder="Notification Poster Url" />
                    </div>
                </div>
            </div>
        </div>
    );
}