import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
display: grid; 
grid-template-columns: ${props=>props.columns || '1fr'}; 
grid-template-rows: ${props=>props.rows || '1fr'}; 
grid-auto-columns: ${props=>props.aColumns || 'unset'}; 
grid-auto-rows: ${props=>props.aRows || 'unset'}; 
grid-gap: ${props=>props.gap || '20px'};
`

const Grid = (props) => {
    return (
        <StyledGrid {...props}/>
    )
}

export default Grid
