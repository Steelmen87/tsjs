import React, {ChangeEvent} from 'react';

const User = () => {

    const SaveUser = () => {
        alert('Save user')
    }
    function onChangeInput(e:ChangeEvent<HTMLInputElement>) {
        alert(e.currentTarget.value)
    }
    return (
        <div>
            Dimuch
            <button onClick={SaveUser}>save</button>
            <input onChange={onChangeInput}/>
        </div>
    );
};

export default User;