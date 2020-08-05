import { formatPhoneNumberIntl } from 'react-phone-number-input'

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

const UserInfo = (props: {
    name: string,
    title: string,
    motto: string,
    email: string,
    phone: string,
    website: string,
}) => {
    const options = {
        name: 'John Doe',
        title: 'software engineer',
        motto: 'do the thing',
        email: 'sample@domain.com',
        phone: '+15555555555',
        website: 'https://google.com'
    }

    Object.assign(options, props)

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
                {options.name.toUpperCase()}
            </div>

            <div
                style={{
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    margin: '0px 0px 14px',
                }}
            >
                {options.title}

                <br/>

                <br/>

                {options.motto}
            </div>

            <div
                style={{
                    lineHeight: '18px',
                    letterSpacing: '0.6px',
                }}
            >
                <a
                    href={`tel:${options.phone}`}
                >
                    {formatPhoneNumberIntl(options.phone)}
                </a>

                <br/>

                <a
                    href={`mailto:${options.email}`}
                    style={{
                        color: 'rgb(0,0,0)'
                    }}
                    target="_blank"
                >
                    {options.email}
                </a>

                <br/>

                <a
                    href={options.website}
                    style={{
                        color: 'rgb(0,0,0)'
                    }}
                    target="_blank"
                >
                    {options.website}
                </a>
            </div>
        </td>
    )
}

export const Table = (props: {}) => {
    const tableStyles = {
        color: 'rgb(0, 0, 0)',
        letterSpacing: 'normal',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(' '),
        fontSize: '12px',
        margin: '20px 0px 0px',
    }

    return (
        <table style={tableStyles}>
            <tbody>
                <tr>
                    <td
                        colSpan={2}
                        style={{
                            borderTop: '1px solid rgb(0,0,0)',
                            lineHeight: '8px'
                        }}
                    >
                            &nbsp;
                    </td>
                </tr>
                <tr>
                    {ProfilePic({})}
                    {UserInfo()}
                </tr>
            </tbody>
        </table>
    )
}
