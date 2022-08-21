import React, {useMemo, useState} from "react";

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('Counter Add')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUsers = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}