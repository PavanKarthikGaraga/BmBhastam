import React, { useState } from 'react';
import './banner.css';

function BannerContent() {
    const [count, setCount] = useState(2);

    const renderBanners = () => {
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className='banner-component-in-body-form'>
                <div className='banner-form-heading'>
                    <h3>Banner {index + 1}</h3>
                </div>
                <div className="banner-form-group">
                    <label className='content-label'>Banner ID</label>
                    <input type="text" placeholder="Banner ID" />
                </div>
                <div className="banner-form-group">
                    <label className='content-label'>Banner URL</label>
                    <input type="text" placeholder="Banner URL" />
                </div>
                <div className="banner-form-group">
                    <label className='content-label'>Status</label>
                    <select>
                        <option>Status</option>
                    </select>
                </div>
            </div>
        ));
    };

    return (
        <div className='banner-component'>
            <div className="banner-component-in">
                <div className="banner-component-in-heading">
                    <h1>Banner Page</h1>
                </div>
                <div className="banner-component-in-body">
                    <div className="banner-form-group">
                        <label className='content-label'>Count</label>
                        <input 
                            type="number" 
                            value={count} 
                            onChange={(e) => setCount(Number(e.target.value))} 
                            min="1" 
                        />
                    </div>
                    {renderBanners()}
                </div>
            </div>
        </div>
    );
}

export default BannerContent;
