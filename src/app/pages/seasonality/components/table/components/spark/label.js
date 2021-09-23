const labelDX = [50, 20, 0, 0, 0, 0, 0, 0, 0, 0, -30, -50];
export function CustomizedLabel({ viewBox, index }) {
    const dx = labelDX[index];
    return (
        <>
            <defs>
                <filter x='0' y='0' width='1' height='1' id='labelmax'>
                    <feFlood floodColor='#89c32e' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComponentTransfer>
                        <feFuncA type='table'tableValues='0 0 0 1' />
                    </feComponentTransfer>

                    <feComponentTransfer>
                        <feFuncA type='table'tableValues='0 1 1 1 1 1 1 1' />
                    </feComponentTransfer>
                    <feComposite operator='over' in='SourceGraphic' />
                </filter>

            </defs>
            <text
                offset='5'
                filter='url(#labelmax)'
                fill='#ffffff'
                x={viewBox.x + dx}
                y={20}
                className='recharts-text recharts-label'
                textAnchor='middle'
            >
                <tspan x={viewBox.x + dx} dy='0.355em'>
                    &nbsp;&nbsp;Peak Demand&nbsp;&nbsp;
                </tspan>
            </text>
        </>
    );
}
