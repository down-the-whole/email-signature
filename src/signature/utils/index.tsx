type DividerType = 'Top' | 'Bottom'

export const DividerLine = (type: DividerType) => (
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
