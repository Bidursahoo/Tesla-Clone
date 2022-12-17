import React, { Component } from 'react'
import styled from "styled-components"
import Section from "./Section.js"
function Home() {
  return (
    <Container>
      <Section
        tittle="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg = "/images/model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText="Existing Invertory"
      />
      <Section
        tittle="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg = "/images/model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText="Existing Invertory"
      />
      <Section
        tittle="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg = "/images/model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText="Existing Invertory"
      />
      <Section
        tittle="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg = "/images/model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText="Existing Invertory"
      />
      <Section
        tittle="Lowest Cost Solar Pannels in America"
        description="Money-back guarantee"
        backgroundImg = "/images/solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText="Learn More"
      />
      <Section
        tittle="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Pannels"
        backgroundImg = "/images/solar-roof.jpg"
        leftBtnText = "Order Now"
        rightBtnText="Learn More"
      />
      <Section
        tittle="Accessories"
        description=""
        backgroundImg = "/images/accessories.jpg"
        leftBtnText = "Shop Now"
      />
    </Container>
  )
}

export default Home
const Container = styled.div`
      height: 100vh;
`