import { useState, useEffect, useContext } from 'react'
import map from 'lodash/map'

import User from '../user'
import { store } from '../store'
import EditorConfig, { FormItem } from './config'

import Links from './links'

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

    const editorConfig = new EditorConfig()
    const {
        email,
        motto,
        name,
        phone,
        title,
        website,
    } = editorConfig

    email.handleChange = handleChange
    email.value = user.email

    motto.handleChange = handleChange
    motto.value = user.motto

    name.handleChange = handleChange
    name.value = user.name

    phone.handleChange = handleChange
    phone.value = user.phone

    title.handleChange = handleChange
    title.value = user.title

    website.handleChange = handleChange
    website.value = user.website

    return (
        <div className="editor">
            {
                map(
                    editorConfig,
                    (item: FormItem, key) => {
                        return item.renderFormItem()
                    }
                )
            }

            <br/>

            <Links/>
        </div>
    )
}
