import {
    createContext,
    useReducer,
} from 'react'

import User from './user'

const initialState = new User()

const store = createContext(initialState);

const { Provider } = store;

type UserAction = {
    type: 'user_mod',
    user: User
}

type LinkAction = {
    type: 'user_link_mod',
    linkKey: string,
    linkImageUrl: string,
    linkUrl: string,
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
            case 'user_link_mod'
                return {
                    ...state,
                    links: {
                        ...state.links,
                        [action.linkKey]: {
                            imageUrl: action.linkImageUrl,
                            url: action.linkUrl,
                        }
                    }
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
