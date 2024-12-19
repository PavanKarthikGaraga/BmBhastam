function GifContent() {
    return (
        <div className='content-container'>
            <h1>Gif Page</h1>
                <h3>Gif</h3>
                <label className='content-label'>Gif ID</label>
                <input   type="text" placeholder="Gif ID" />
                <label className='content-label'>Gif URL</label>
                <input type="text" placeholder="Gif URL" />
                <label className='content-label'>Status</label>
                <select>
                    <option>Status</option>
                </select>
        </div>
    );
}

export default GifContent;