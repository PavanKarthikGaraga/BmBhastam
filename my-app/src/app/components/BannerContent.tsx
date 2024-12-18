import React, { useState } from 'react';

function BannerContent() {
    const [count, setCount] = useState(2); // Default to 2 banners

    const renderBanners = () => {
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className='content-container'>
                <h3>Banner {index + 1}</h3>
                <label>Banner ID</label>
                <input type="text" placeholder="Banner ID" />
                <label>Banner URL</label>
                <input type="text" placeholder="Banner URL" />
                <label>Status</label>
                <select>
                    <option>Status</option>
                </select>
            </div>
        ));
    };

    return (
        <div>
            <h1>Banner Page</h1>
            <label>Count</label>
            <input 
                type="number" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))} 
                min="1" 
            />
            {renderBanners()}
        </div>
    );
}

export default BannerContent;
