import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BugsTest from "../../components/BugsTest"

const ChallengePage = () => (
  <Layout>
    <BugsTest />
  </Layout>
)

export const Head = () => <Seo title="Challege: Bug Fixes" />

export default ChallengePage
