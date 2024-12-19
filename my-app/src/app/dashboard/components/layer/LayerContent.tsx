import React, { useState } from 'react';
import './layer.css';

function LayerContent() {
    const [count, setCount] = useState(2);

    const renderLayers = () => {
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className='layer-component-in-body-form'>
                <div className='layer-form-heading'>
                    <h3>Layer {index + 1}</h3>
                </div>
                <div className="layer-form-group">
                    <label className='content-label'>Layer ID</label>
                    <input type="text" placeholder="Layer ID" />
                </div>
                <div className="layer-form-group">
                    <label className='content-label'>Layer Tittle</label>
                    <input type="text" placeholder="Layer URL" />
                </div>
                <div className="layer-form-group">
                    <label className='content-label'>Layer Bg Colour</label>
                    <input type="text" placeholder="Layer Bg Colour" />
                </div>
                <div className="layer-form-group">
                    <label className='content-label'>Layer Inner Stroke</label>
                    <input type="text" placeholder="Layer Inner Stroke" />
                </div>
                <div className="layer-form-group">
                    <label className='content-label'>Layer Inner Bg Colour</label>
                    <input type="text" placeholder="Layer Inner Bg Colour" />
                </div>
                <div className="layer-form-group">
                    <label className='content-label'>Layer Axis Style</label>
                    <input type="text" placeholder="Layer Axis Style" />
                </div>
                <div className="layer-form-group">
                    <label className='content-label'>Status</label>
                    <select>
                        <option>Status</option>
                    </select>
                </div>
            </div>
        ));
    };

    return (
        <div className='layer-component'>
            <div className="layer-component-in">
                <div className="layer-component-in-heading">
                    <h1>Layer Page</h1>
                </div>
                <div className="layer-component-in-body">
                    <div className="layer-form-group">
                        <label className='content-label'>Count</label>
                        <input 
                            type="number" 
                            value={count} 
                            onChange={(e) => setCount(Number(e.target.value))} 
                            min="1" 
                        />
                    </div>
                    {renderLayers()}
                </div>
            </div>
        </div>
    );
}

export default LayerContent;
