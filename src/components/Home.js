import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>

        <Section  
          title= "Model S"
          description= "Order Online for Touchless delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"/>
        <Section 
         title= "Model Y"
         description= "Order Online for Touchless delivery"
         backgroundImg = "model-y.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"/>
        <Section 
         title= "Model 3"
         description= "Order Online for Touchless delivery"
         backgroundImg = "model-3.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"/>
        <Section 
         title= "Model x"
         description= "Order Online for Touchless delivery"
         backgroundImg = "model-x.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"/>
         <Section
          title= "Lowest Cost Solar in America"
          description= "Money-back guarantee"
          backgroundImg= "solar-panel.jpg"
          leftBtnText= "Order Now"
          rightBtnText="Learn More"/>
           <Section
          title= "Solar for New Roofs"
          description= "Solar Roofs Costs less than a New Roof plus Solar Panels"
          backgroundImg= "solar-roof.jpg"
          leftBtnText= "Order Now"
          rightBtnText="Learn More"/>
           <Section
          title= "Accessories"
          description= ""
          backgroundImg= "accessories.jpg"
          leftBtnText= "Order Now"/>
    </Container>
  )
}

export default Home
const Container = styled.div`
height: 100vh;
z-index:10;
`