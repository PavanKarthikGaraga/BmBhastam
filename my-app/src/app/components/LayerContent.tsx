import React, { useState } from 'react';

function LayerContent() {
    const [count, setCount] = useState(2); // Default to 2 Layers

    const renderLayers = () => {
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className='content-container'>
                <h3>Layer {index + 1}</h3>
                <label className='content-label'    >Layer ID</label>
                <input type="text" placeholder="Layer ID" />
                <label className='content-label'>Layer Tittle</label>
                <input type="text" placeholder="Layer URL" />
                <label className='content-label'>Layer Bg Colour</label>
                <input type="text" placeholder="Layer Bg Colour" />
                <label className='content-label'>Layer Inner Stroke</label>
                <input type="text" placeholder="Layer Inner Stroke" />
                <label className='content-label'>Layer Inner Bg Colour</label>
                <input type="text" placeholder="Layer Inner Bg Colour" />
                <label className='content-label'>Layer Axis Style</label>
                <input type="text" placeholder="Layer Axis Style" />
                <label className='content-label'>Status</label>
                <select>
                    <option>Status</option>
                </select>
            </div>
        ));
    };

    return (
        <div>
            <h1>Layer Page</h1>
            <label className='content-label'>Count</label>
            <input 
                type="number" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))} 
                min="1" 
            />
            {renderLayers()}
        </div>
    );
}

export default LayerContent;
