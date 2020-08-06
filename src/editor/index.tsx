import { useState, useEffect, useContext } from 'react'

import User from '../user'
import { store } from '../store'

export default () => {
    const { state, dispatch } = useContext(store)

    const [
        user,
        setState
    ]: [
        User,
        Function,
    ] = useState(state)

    useEffect(
        () => {
            dispatch({
                type: 'user_mod',
                user: user,
            })
        },
        [user],
    )

    const handleChange = (e) => {
        setState({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="editor">
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Title
                <input
                    type="text"
                    name="title"
                    value={user.title}
                    onChange={handleChange}
                />
            </label>
            <label>
                Motto:
                <input
                    type="text"
                    name="motto"
                    value={user.motto}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Website:
                <input
                    type="url"
                    name="website"
                    value={user.website}
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}
