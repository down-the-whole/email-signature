import ReactDOM from 'react-dom'

import { Table } from './signature/index.tsx'

const wrapper = document.getElementById('root')

wrapper ? ReactDOM.render(<Table/>, wrapper) : false
