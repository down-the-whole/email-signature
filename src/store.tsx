import {
    createContext,
    useReducer,
} from 'react'

import User from './user'

const initialState = new User()

const store = createContext(initialState);

const { Provider } = store;

type Action = {
    type: string,
    user: User
}

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(
        (
            state,
            action: Action,
        ) => {
            // console.log('reducing')
            // console.log(action.user)

            switch(action.type) {
            case 'user_mod':
                return action.user;
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
