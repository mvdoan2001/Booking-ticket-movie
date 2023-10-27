import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import _ from 'lodash'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { TOKEN, USER_LOGIN } from '../../../../utils/setting/config'

export default function Header() {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const items = [
        {
            label: <NavLink to={'/profile'}>Profile</NavLink>,
            key: '0',
        },
        {
            label: <div onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                window.location.reload()
            }}>Sign out</div>,
            key: '1',
        }
    ];

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment >
                <NavLink to='/login' className="self-center px-8 py-3 rounded text-white">Sign In</NavLink>
                <NavLink to='/register' className="self-center px-8 py-3 rounded text-white">Sign Up</NavLink>
            </Fragment>
        }
        return <Dropdown className="self-center px-8 py-3 rounded text-white" menu={{ items }} trigger={['click']}>
            <NavLink onClick={(e) => e.preventDefault()}>
                <Space>
                    {userLogin.taiKhoan}
                    <DownOutlined />
                </Space>
            </NavLink>
        </Dropdown>
    }
    return (
        <div>
            <header className="p-4 bg-black bg-opacity-40 dark:text-gray-100 fixed w-full z-10">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src='https://movie-booking-project.vercel.app/img/headTixLogo.png' className='h-12' alt='logo' />
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <div className="flex items-center px-4 -mb-1 text-white">
                                <NavLink rel="noopener noreferrer" to="/" className={({ isActive }) => (isActive ? 'active border-b-2 dark:border-transparent h-8 border-orange-300' : 'inactive')} >Home</NavLink>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex items-center px-4 -mb-1  text-white">
                                <NavLink rel="noopener noreferrer" to="/contact" className={({ isActive }) => (isActive ? 'active border-b-2 dark:border-transparent h-8 border-orange-300' : 'inactive')} >Contact</NavLink>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex items-center px-4 -mb-1 text-white">
                                <NavLink rel="noopener noreferrer" to="/news" className={({ isActive }) => (isActive ? 'active border-b-2 dark:border-transparent h-8 border-orange-300' : 'inactive')} >News</NavLink>
                            </div>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {
                            renderLogin()
                        }

                    </div>

                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

        </div>
    )
}
