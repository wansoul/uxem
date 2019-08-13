import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardsScroller from "../components/CardsScroller"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Em breve muito conteúdo sobre uso de animações em inerfaces de usuário e
      como elas podem melhorar a experiência dos usuários com produtos digitais.
    </p>
    <CardsScroller />
  </Layout>
)

export default IndexPage
