import React, { useState } from 'react';

function BrandContent() {
    const [count, setCount] = useState(2); // Default to 2 Brands

    const renderBrands = () => {
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className='content-container'>
                <h3>Brand {index + 1}</h3>
                <label>Brand ID</label>
                <input type="text" placeholder="Brand ID" />
                <label>Brand URL</label>
                <input type="text" placeholder="Brand URL" />
                <label>Brand Name</label>
                <input type="text" placeholder="Brand Name" />
                <label>Status</label>
                <select>
                    <option>Status</option>
                </select>
            </div>
        ));
    };

    return (
        <div>
            <h1>Brand Page</h1>
            <label>Count</label>
            <input 
                type="number" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))} 
                min="1" 
            />
            {renderBrands()}
        </div>
    );
}

export default BrandContent;
