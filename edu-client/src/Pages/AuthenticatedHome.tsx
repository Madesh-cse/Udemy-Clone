import DropDown from "../components/isAuthenticatedHome/Navabar/DropDown"
import HomeBanner from "../components/isAuthenticatedHome/AdBanner/HomeBanner"
function AuthenticatedHome() {
  return (
    <>
     <header>
        <DropDown/>
    </header>
    <main>
        <HomeBanner/>
    </main>
    </>
  )
}

export default AuthenticatedHome