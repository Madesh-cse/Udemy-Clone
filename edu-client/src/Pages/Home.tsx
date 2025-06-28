import HomeBanner from "../components/HomeBanner/HomeBanner"
import TabComponent from "../components/Tabs/Tabs"
import BrandCompanyView from "../components/HomeBanner/BrandCompanyView"
import OnGoals from "../components/ExtraDetails/OnGoals"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
    <main>
        <HomeBanner/>
        <TabComponent/>
        <BrandCompanyView/>
        <OnGoals/>
        <Footer/>
    </main>
  )
}

export default Home