import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const emotions = [
    { label: 'Happy'},
    { label: 'Energetic'},
    { label: 'Productive'},
    { label: 'Chill'}, 
    { label: '+'}
];

const Input = styled.input`
  padding: 0.5em;
  background: transparent;
  border: 0;
  color: white;
  box-shadow: none;
  border-bottom: 1px solid white;
  width: 550px;
  font-size: 35px;
  margin-top: -1rem;
`;

export const HomeForm: React.FC = () => {
    const [text, setText] = useState('');

    return (
        <div className="home-container text-center">
            <form>
                <h5 className="mb-2">Welcome to Aurras 👋</h5>
                <h1>How do you <strong>want</strong> to feel, ____?</h1>
                <div>
                    <Input
                        className="text-center"
                        type="text"
                        value={text}
                        onChange={e => {
                        setText(e.target.value);
                        }}
                    />
                </div>
                <div className="mt-4">
                    {/* buttons for emotions */}
                    {emotions.map((emotion) => (
                        <Button
                        variant="outline-light"
                        as="input" 
                        type="button"
                        className="mr-2 ml-2 pl-4 pr-4"
                        value={emotion.label} 
                        onClick={e => {
                        e.preventDefault();
                        }}>
                        </Button>
                    ))}
                    
                </div>
            </form>
        </div>
        
    );
};