import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import TopSellers from '../components/TopSellers'
import PopularBlogs from '../components/PopularBlogs'

export const Layout = () => {
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className="rounded w-full flex justify-between flex-wrap">
                <Outlet />
            </div>
            <div>
                <TopSellers />
                <PopularBlogs />
            </div>
        </div>
    )
}
