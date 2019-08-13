import React from "react"
import styled from "styled-components"
import Card from "../components/Card"

const Scroller = styled.div`
  width: 100%;
  height: fit-content;
  padding: 32px 0;
  overflow-x: scroll;
`

const CardsContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const CardsScroller = () => (
  <Scroller>
    <CardsContainer>
      <Card title="Faeatures" body="Card body text" />
      <Card title="Benefits" body="Card body text" />
      <Card title="Perks" body="Card body text" />
      <Card title="Responsabilities" body="Card body text" />
      <Card title="Salary" body="Card body text" />
      <Card title="Nice to Have" body="Card body text" />
    </CardsContainer>
  </Scroller>
)

export default CardsScroller
