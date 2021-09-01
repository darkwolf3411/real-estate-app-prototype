import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

`

const MyButton = ({props,children}) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}

export default MyButton
