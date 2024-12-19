import { useState } from 'react';
import './help.css';
function HelpContent() {
    const [count, setCount] = useState(3); 

    return (
        <div className='help-component'>
            <div className="help-component-in">
                <div className="help-component-in-heading">
                    <h1>Help Center Page</h1>
                </div>
                <div className="help-component-in-body">
                    <div className="help-component-in-body-form">
                        <div className="help-form-group">
                        <label className='content-label'>Question</label>
                        <input type="text" placeholder="Question" />
                        </div>
                          <div className="help-form-group">
                          <label className='content-label'>No. of Options</label>
                                <input 
                                    type="number" 
                                    value={count} 
                                    onChange={(e) => setCount(Number(e.target.value))} 
                                    min="3" 
                                />
                        </div>
                        <div className="help-form-group">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpContent;