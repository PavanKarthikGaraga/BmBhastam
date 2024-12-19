import React, { useState } from 'react';
import './brand.css';

function BrandContent() {
    const [count, setCount] = useState(2);

    const renderBrands = () => {
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className='brand-component-in-body-form'>
                <div className='brand-form-heading'>
                    <h3>Brand {index + 1}</h3>
                </div>
                <div className="brand-form-group">
                    <label className='content-label'>Brand ID</label>
                    <input type="text" placeholder="Brand ID" />
                </div>
                <div className="brand-form-group">
                    <label className='content-label'>Brand URL</label>
                    <input type="text" placeholder="Brand URL" />
                </div>
                <div className="brand-form-group">
                    <label className='content-label'>Brand Name</label>
                    <input type="text" placeholder="Brand Name" />
                </div>
                <div className="brand-form-group">
                    <label className='content-label'>Status</label>   
                    <select>
                        <option>Status</option>
                    </select>
                </div>
            </div>
        ));
    };

    return (
        <div className='brand-component'>
            <div className="brand-component-in">
                <div className="brand-component-in-heading">
                    <h1>Brand Page</h1>
                </div>
                <div className="brand-component-in-body">
                    <div className="brand-form-group">
                        <label className='content-label'>Count</label>
                        <input 
                            type="number" 
                            value={count} 
                            onChange={(e) => setCount(Number(e.target.value))} 
                            min="1" 
                        />
                    </div>
                    {renderBrands()}
                </div>
            </div>
        </div>
    );
}

export default BrandContent;
