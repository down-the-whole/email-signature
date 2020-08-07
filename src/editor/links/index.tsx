import { useState, useEffect, useContext } from 'react'
import map from 'lodash/map'

import User, {
    LinkMap,
    Link,
 } from '../../user'
import { store } from '../../store'

export default () => {
    let state: User
    let dispatch

    ({ state, dispatch } = useContext(store))

    const [
        links,
        setState
    ]: [
        LinkMap,
        Function,
    ] = useState(state.links)

    useEffect(
        () => {
            dispatch({
                type: 'user_links_mod',
                links: links,
            })
        },
        [links],
    )

    const handleChange = (e) => {
        setState({
            ...links,
            [e.target.name]: {
                ...links[e.target.name],
                url: e.target.value,
            },
        })
    }

    map(links, (link: Link, key) => {
        link.onChange = handleChange
    })

    return map(links, (link: Link, key: string) => {
        return (
            <label key={key}>
                {key}:
                &nbsp;
                <input
                    style={{
                        minWidth: '200px',
                    }}
                    type='text'
                    name={key}
                    value={link.url}
                    onChange={link.onChange}
                />
            </label>
        )
    })
}
