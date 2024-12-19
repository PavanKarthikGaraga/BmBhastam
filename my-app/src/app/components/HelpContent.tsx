import { useState } from 'react';

function HelpContent() {
    const [count, setCount] = useState(3); 

    return (
        <div className='content-container'>
            <h1>Help Center Page</h1>
            <label className='content-label'>Help Center</label>
            <label className='content-label'>Question</label>
            <input type="text" placeholder="Question" />
            <label className='content-label'>No. of Options</label>
            <input 
                type="number" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))} 
                min="3" 
            />
            {Array.from({ length: count }, (_, index) => (
                <div key={index} className='content-container'>
                    <h3>Option {index + 1}</h3>
                    <input type="text" placeholder="Option" />
                </div>
            ))}
            <label className='content-label'>Status</label>
            <select>
                <option>Status</option>
            </select>
        </div>
    );
}

export default HelpContent;