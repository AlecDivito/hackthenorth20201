import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import logo from '../images/logo_white.png'

interface Props {
    addUser: AddUser;
}

const Input = styled.input`
  padding: 0.5em;
  background: transparent;
  border: 0;
  color: white;
  box-shadow: none;
  border-bottom: 1px solid white;
  width: 600px;
  font-size: 35px;
`;

const addUser: AddUser = (name: string, location: boolean) => {
    const newUser = { name, location };
};

export const AddUserForm: React.FC = () => {
    const [name, setText] = useState('');

    // for toggle switch button
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    // disables the enter button if name is empty or just spaces
    const disabled = !name?.trim().length;

    return (
        <div className="form-container text-center">
            <form>
                <img src={logo} alt="Logo" className="small-logo" />
                <h5 className="mb-3">Welcome to Aurras 👋</h5>
                <h1>What's your name?</h1>
                <div>
                    <Input
                        className="text-center"
                        type="text"
                        value={name}
                        onChange={e => {
                        setText(e.target.value);
                        }}
                    />
                </div>
                <div className='custom-control custom-switch'>
                    <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customSwitches'
                    onClick={toggleTrueFalse}
                    readOnly
                    />
                    <label className='custom-control-label' htmlFor='customSwitches'>
                        Allow location tracking
                    </label>
                </div>
                <div>
                    <Button 
                        className="enterBtn"
                        variant="secondary"
                        as="input" 
                        type="submit" 
                        disabled={disabled}
                        value="Enter" 
                        onClick={e => {
                        e.preventDefault();
                        addUser(name, isToggled);
                        setText('');
                        }}
                    />
                </div>
            </form>
        </div>
        
    );
};