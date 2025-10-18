import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export const Layout = () => {
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className="rounded w-full flex justify-between flex-wrap">
                <Outlet />
            </div>
        </div>
    )
}
