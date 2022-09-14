import React, {useEffect, useState} from 'react';

const Cleanup = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        const keypressFn = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', keypressFn)
        return () => {
            window.removeEventListener('keypress', keypressFn)
        }
    }, [text])
    return (
        <div>
            Cleanup : {text}
        </div>
    );
};

export default Cleanup;