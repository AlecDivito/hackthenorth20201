import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
    addUser: AddUser;
}

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
        <>
            <form>
                <h5>Welcome to Aurras 👋</h5>
                <h1>What's your name?</h1>
                <div>
                    <input
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
        </>
        
    );
};