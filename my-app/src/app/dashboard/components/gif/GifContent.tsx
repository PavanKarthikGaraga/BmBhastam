import './gif.css'

function GifContent() {
    return (
        <div className='gif-component'>
            <div className="gif-component-in">
                <div className="gif-component-in-heading">
                    <h1>Gif Page</h1>
                </div>
                <div className="gif-component-in-body">
                    <div className="gif-component-in-body-form">
                        <div className="gif-form-group">
                            <label className='content-label'>Gif ID</label>
                            <input type="text" placeholder="Gif ID" />
                        </div>
                        <div className="gif-form-group">
                            <label className='content-label'>Gif URL</label>
                            <input type="text" placeholder="Gif URL" />
                        </div>
                        <div className="gif-form-group">
                            <label className='content-label'>Status</label>
                            <select>
                                <option>Status</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GifContent;