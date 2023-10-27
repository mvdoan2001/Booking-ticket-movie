import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { layThongTinHeThongRapAction } from '../../../../redux/action/QuanLyRapAction';

function Footer() {

    const { thongTinRap } = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(layThongTinHeThongRapAction())
    }, [])

    const renderRapChieu = () => {
        return thongTinRap.map((item, index) => {
            return <div key={index} >
                    <img src={item.logo} alt={item.biDanh} width= '50px' className='m-auto' />
            </div>
        })
    }

  return (
      <footer className="py-6 bg-gray-400 text-gray-900">
          <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
              <div className="grid grid-cols-12">
                  <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                      <img src='https://movie-booking-project.vercel.app/img/headTixLogo.png' alt='logo' />
                  </div>
                  <div className="col-span-6 text-center md:text-left md:col-span-3">
                    <p className="pb-1 text-lg font-medium text-center">Đối tác</p>
                    <div className='grid grid-cols-2 gap-2'>
                        {renderRapChieu()}
                    </div>
                  </div>
              </div>
              <div className="grid justify-center pt-6 lg:justify-between">
                  <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                      <span>©2023 All rights reserved</span>
                      <span rel="noopener noreferrer">
                          <span>Privacy policy</span>
                      </span>
                      <span rel="noopener noreferrer">
                          <span>Terms of service</span>
                      </span>
                  </div>
              </div>
          </div>
      </footer>

  )
}

export default memo(Footer)