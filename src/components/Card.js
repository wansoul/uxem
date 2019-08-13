import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  width: 200px;
  margin: 0 8px;
  padding: 16px 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 100ms ease-in;
  &:hover {
    transform: scale(1.075) rotateZ(-2deg);
  }
`
const Title = styled.h3`
  margin: 0 0 8px 0;
  padding: 0px;
`
const Body = styled.p`
  margin: 0px;
  padding: 0px;
`

// const Action = styled.button``

const Card = ({ title, body }) => (
  <CardContainer>
    <Title>{title}</Title>
    <Body>{body}</Body>
  </CardContainer>
)
export default Card
