import { formatPhoneNumberIntl } from 'react-phone-number-input'
import { useContext } from 'react'

import { store } from '../store'
import AccentPic from './accent-pic'
import { Links } from './links'
import { DividerLine } from './utils'

const UserInfo = () => {
    const { state } = useContext(store)

    return (
        <td>
            <div
                style={{
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '0.8px',
                    margin: '0px 0px 2px',
                }}
            >
                {state.name.toUpperCase()}
            </div>

            <div
                style={{
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    margin: '0px 0px 14px',
                }}
            >
                {state.title}

                <br/>

                <br/>

                {state.motto}
            </div>

            <div
                style={{
                    lineHeight: '18px',
                    letterSpacing: '0.6px',
                }}
            >
                <a
                    href={`tel:${state.phone}`}
                >
                    {formatPhoneNumberIntl(state.phone)}
                </a>

                <br/>

                <a
                    href={`mailto:${state.email}`}
                    style={{
                        color: 'rgb(0,0,0)'
                    }}
                    target="_blank"
                >
                    {state.email}
                </a>

                <br/>

                <a
                    href={state.website}
                    style={{
                        color: 'rgb(0,0,0)'
                    }}
                    target="_blank"
                >
                    {state.website}
                </a>
            </div>
        </td>
    )
}

export default (props: {}) => {
    const tableStyles = {
        color: 'rgb(0, 0, 0)',
        letterSpacing: 'normal',
        fontFamily: [
            'Avenir Next',
            'Avenir',
            'Helvetica',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontSize: '12px',
        margin: '20px 0px 0px',
    }

    return (
        <div className="signature">
            <table style={tableStyles}>
                <tbody>
                    {DividerLine('Top')}
                    <tr>
                        {AccentPic()}
                        {UserInfo()}
                    </tr>
                    {DividerLine('Bottom')}
                    {Links()}
                </tbody>
            </table>
        </div>
    )
}
