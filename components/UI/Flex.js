import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
display: flex;
flex-direction: ${props=>props.direction || 'row'};
align-items: ${props=>props.align || 'strecth'};
justify-content: ${props=>props.justify || 'strecth'};
flex-wrap: ${props=>props.wrap || 'nowrap'};
margin: ${({margin})=>margin || '0'};
width: ${({width})=>width || 'fit-content'}
`

const Flex = (props) => {
    return (
        <StyledFlex {...props}/>
    )
}

export default Flex
