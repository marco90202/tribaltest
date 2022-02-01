import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import TribalTable from '../components/TribalTable'

const Layout = () => {


    return(
        <div>
            <Header/>
            <div className='box'>
                <SideBar/>
                <TribalTable/>
            </div>
        </div>
    )
}
export default Layout