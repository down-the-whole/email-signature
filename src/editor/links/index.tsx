import { useState, useEffect, useContext } from 'react'
import map from 'lodash/map'

import User from '../../user'
import { store } from '../../store'
import EditorConfig, { FormItem } from './config'
import { Link, LinkMap } from '../../user'

export const renderLinks = (linkMap: LinkMap) => {
    return map(map, (link, key) => {

        return (
            <label>
                {key}:
                &nbsp;
                <input
                    style={{
                        minWidth: '200px',
                    }}
                    type='text'
                    name={key}
                    value={link.value}
                    onChange={link.handleChange}
                />
            </label>
        )
    })
}

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
                type: 'user_link_mod',

            })
        },
        [links],
    )

    const handleChange = (e) => {
        setState({
            ...links,
            [e.target.name]: e.target.value,
        })
    }


    return (
        renderLinks()
    )
}
