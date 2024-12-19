function NotificationContent() {
    return (
        <div className='content-container'>
            <h1>Notification Page</h1>
            <h3>Notification</h3>
            <label className='content-label'>Logo - icon URL</label>
            <input   type="text" placeholder="Logo - icon" />
            <label className='content-label'>Notification Title</label>
            <input type="text" placeholder="Notification Title" />
            <label className='content-label'>Notification Description</label>
            <input type="text" placeholder="Notification Description" />
            <label className='content-label'>Notification Poster Url</label>
            <input type="text" placeholder="Notification Poster Url" />
            <label className='content-label'>Status</label>
            <select>
                    <option>Status</option>
            </select>   
        </div>
    );
}

export default NotificationContent;