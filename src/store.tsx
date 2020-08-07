import {
    createContext,
    useReducer,
} from 'react'

import User, { LinkMap } from './user'

const initialState = new User()

const store = createContext(initialState);

const { Provider } = store;

type UserAction = {
    type: 'user_mod'
    user: User
}

type LinkAction = {
    type: 'user_links_mod'
    links: LinkMap
}

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(
        (
            state: User,
            action: UserAction | LinkAction,
        ) => {
            // console.log('reducing')
            // console.log(action.user)

            switch(action.type) {
            case 'user_mod':
                return action.user;
            case 'user_links_mod':
                return {
                    ...state,
                    links: action.links,
                }
            default:
                throw new Error();
            };
        },
        initialState,
    )

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    )
};

export { store, StateProvider }
