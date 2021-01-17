import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const emotions = [
    { label: 'Happy'},
    { label: 'Energetic'},
    { label: 'Productive'},
    { label: 'Chill'}, 
    { label: '+'}
];

export const HomeForm: React.FC = () => {
    const [text, setText] = useState('');

    return (
        <>
            <form>
                <h5>Welcome to Aurras 👋</h5>
                <h1>How do you <b>want</b> to feel, ____?</h1>
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={e => {
                        setText(e.target.value);
                        }}
                    />
                </div>
                <div>
                    {/* buttons for emotions */}
                    {emotions.map((emotion) => (
                        <Button
                        variant="outline-light"
                        as="input" 
                        type="button"
                        className="mr-2"
                        value={emotion.label} 
                        onClick={e => {
                        e.preventDefault();
                        }}>
                        </Button>
                    ))}
                    
                </div>
            </form>
        </>
        
    );
};