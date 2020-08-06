import Signature from '../signature'
import Editor from '../editor'

import './index.scss'

export default (props: {}) =>{
    return (
        <div className="container">
            <Editor/>
            <Signature/>
        </div>
    )

}
