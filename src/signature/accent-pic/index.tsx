export default (props: {
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
