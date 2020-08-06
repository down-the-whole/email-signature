import ReactDOM from 'react-dom'

import Container from './container'
import { StateProvider } from './store'

const wrapper = document.getElementById('root')

wrapper ? ReactDOM.render(
    <StateProvider>
        <Container/>
    </StateProvider>,
    wrapper
) : false
