import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './LeftSideBar'

function First() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default First