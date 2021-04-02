import Footer from "./Footer"
import Header from "./Header"
import { PageBody, PageContent } from "./style"


const Layout = ({children}) => {

    return (
        <PageBody>
            <Header />
            <PageContent>
                {children}
            </PageContent>
            <Footer />
        </PageBody>
    )
}

export default Layout;