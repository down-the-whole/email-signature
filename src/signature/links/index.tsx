import { useContext } from 'react'
import map from 'lodash/map'

import { store } from '../../store'

export const renderLink = (imageUrl: string, url: string) => {
    console.log(imageUrl, url)

    return (
        <td key={url}
            style={{
                paddingRight: '5px',
            }}
        >
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

export const Links = () => {
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
                <table>
                    <tbody>
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
                    </tbody>
                </table>
            </td>
        </tr>
    )
}
