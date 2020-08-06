import { formatPhoneNumberIntl } from 'react-phone-number-input'
import { useContext } from 'react'
import map from 'lodash/map'

import { store } from '../store'
import User from '../user'

const ProfilePic = (props: {
    px: number,
    width: number,
}) => {
    const options = {
        px: 80,
        width: 110,
    }

    Object.assign(options, props)

    return (
        <td width={options.width}>
            <img
                width={options.px}
                height={options.px}
                src="https://ci4.googleusercontent.com/proxy/E-z1dAbsoHA2R53V4X_OHrQ0NW9wcUk9IsJb5230x63b52hx4xG_z45THv8aR6KYLlpsc-u4At-HB0PSgRR0Mk3WTh7aeCoVlBtl1qch50_1o8ijyPV2GZWkspicjYFz=s0-d-e1-ft#https://cdbattaglia.com/assets-cdbattaglia/media/images/chris_glovo_large.jpg"
            />
        </td>
    )
}

type DividerType = 'Top' | 'Bottom'


const DividerLine = (type: DividerType) => (
    <tr>
        <td
            colSpan={2}
            style={{
                borderTop: type === 'Top' ? '1px solid rgb(0,0,0)' : '0px',
                borderBottom: type === 'Bottom' ? '1px solid rgb(0,0,0)' : '0px',
                height: '3px',
            }}
        >
        </td>
    </tr>
)

const renderLink = (imageUrl: string, url: string) => {
    console.log(imageUrl, url)

    return (
        <td style={{
            paddingRight: '5px',
        }}>
            <a
                href={url}
                style={{
                    float: 'left',
                }}
                target="_blank"
            >
                <img
                    height="28"
                    src={imageUrl}
                />
            </a>
        </td>
    )
}

const Links = () => {
    const { state } : { state: User } = useContext(store)

    console.log(state.links)

    return (
        <tr>
            <td style={{
                padding: '12px 0px 0px',
                letterSpacing: '0.6px',
                fontSize: '14px'
            }}>
                Find me:
            </td>
            <td
                style={{
                    padding: '10px 0px 0px'
                }}>
                <tr>
                    {
                        map(
                            state.links,
                            (link, key) => renderLink(
                                link.imageUrl,
                                link.url
                            ),
                        )
                    }
                </tr>
            </td>
        </tr>
    )
}

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
                        {ProfilePic()}
                        {UserInfo()}
                    </tr>
                    {DividerLine('Bottom')}
                    {Links()}
                </tbody>
            </table>
        </div>
    )
}
