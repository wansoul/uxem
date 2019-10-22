import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SubscriptionForm from "../components/SubscriptionForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Em breve muito conteúdo sobre uso de animações em interfaces de usuário e
      como elas podem melhorar a experiência dos usuários com produtos digitais.
    </p>

    <SubscriptionForm />

  </Layout>
)

export default IndexPage
