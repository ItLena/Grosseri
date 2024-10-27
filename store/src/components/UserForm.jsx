import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserForm = ({ setIsLogged }) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('../../public/data/users.json')
            .then(response => {
                console.log("Data:", response)
                setUsers(response.data)
            })
    }, [])

    const onLogin = (e) => {
        e.preventDefault();
        const findUser = users.find((x) => x.user_name === name && x.password === password)
        console.log("FindUser", findUser)

        if (findUser) {
            setIsLogged(true);
        }
        else {
            alert("Fel user name or password")            
        }
    }

    return (
        <>
            <form action="" onSubmit={onLogin}>
                <input type="text" placeholder="UserName" onChange={e => setName(e.target.value)} required/>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Log In</button>
            </form>
        </>
    )
}
UserForm.propTypes = {   
    setIsLogged: PropTypes.bool

}
export default UserForm