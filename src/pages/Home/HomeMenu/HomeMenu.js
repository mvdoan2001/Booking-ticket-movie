import React, { Fragment, memo } from 'react';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom'
import moment from 'moment';

function HomeMenu({ heThongRapChieu }) {

  const renderHeThongRap = () => {
    return heThongRapChieu.map((item, index) => {
      return {
        key: `${index}`,
        label: <img src={item.logo} alt='' className='rounded-full' width='50px' />,
        children: (
          <Tabs tabPosition='left' style={{ height: 550 }} items={
            item.lstCumRap?.map((cumRap, indexCR) => {
              return {
                key: `${indexCR}`,
                label: (
                  <div className='flex items-center' style={{ width: 300 }}>
                    <img src={cumRap.hinhAnh} alt='' className='mr-3 p-0' width='50px' />
                    <div>
                      <p className='whitespace-normal break-words' style={{ color: '#65a30d', fontWeight: '500', textAlign: 'start', fontSize: '16px' }}>
                        {cumRap.tenCumRap}
                      </p>
                      <p style={{ fontSize: '12px', textAlign: 'start' }}>
                        {cumRap.diaChi.length > 40 ? <span>{cumRap.diaChi.slice(0, 40)}...</span> : <span>{cumRap.diaChi}</span>}
                      </p>
                    </div>
                  </div>
                ),
                children: (
                  <div className='scroll-content'>
                    {cumRap.danhSachPhim.map((phim, indexPhim) => {
                      return <Fragment key={indexPhim}>
                        <div className='flex items-center'>
                          <div className='mr-3 p-0' style={{ background: `url(${phim.hinhAnh}) no-repeat`, backgroundSize: 'cover' }}>
                            <img src={phim.hinhAnh} alt='' className='opacity-0' width='100px' />
                          </div>
                          <div>
                            <h1 className='text-2xl font-semibold text-green-800'>{phim.tenPhim}</h1>
                          </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                          {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, indexLC) => {
                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={indexLC}>
                              {moment(lichChieu.ngayChieuGioChieu).format('h:mm:ss A - DD/MM/YYYY')}
                              <br />
                            </NavLink>
                          })}
                        </div>
                        <hr className='my-3' />
                      </Fragment>
                    })}
                  </div>
                ),
              }
            })} />
        ),
      }
    })
  }

  return (
    <div style={{ maxWidth: '1080px', width: '80vw', margin: 'auto' }} >
      <Tabs tabPosition='left' items={renderHeThongRap()} />
    </div>
  )
};

export default memo(HomeMenu)