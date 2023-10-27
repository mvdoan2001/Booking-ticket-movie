import React, { Fragment, useEffect } from 'react';
import '../../assets/Styles/circle.scss';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { layThongTinChiTietPhim } from '../../redux/action/QuanLyRapAction';
import moment from 'moment';
import { Rate } from 'antd';

export default function Detail() {

  const { filmDetail } = useSelector(state => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(layThongTinChiTietPhim(id))
  }, []);

  const items = [
    {
      key: '1',
      label: 'LỊCH CHIẾU',
      children: <Tabs
        className='bg-gray-100'
        style={{ padding: '20px' }}
        tabPosition={'left'}
        items={
          filmDetail.heThongRapChieu?.map((htr, index) => {
            return {
              key: `${index}`,
              label: (
                <div className='flex items-center' style={{ width: 50 }}>
                  <img src={htr.logo} alt='' className='mr-3 p-0' width='50px' />
                </div>
              ),
              children: (<>
                {
                  htr.cumRapChieu.map((cumRap, index) => {
                    return <Fragment key={index}>
                      <div className='flex mb-4'>
                        <img src={cumRap.hinhAnh} alt='cumRap' width='70px' />
                        <div className='ml-4'>
                          <p>{cumRap.tenCumRap}</p>
                          <p>{cumRap.diaChi}</p>
                        </div>
                      </div>
                      <div className='grid grid-cols-4 gap-4 text-green-800'>
                        {
                          cumRap?.lichChieuPhim.map((lichChieu, index) => {
                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:ss A')}
                            </NavLink>
                          })
                        }
                      </div>
                    </Fragment>
                  })
                }
              </>
              )
            }
          })
        }
      />
    },
    {
      key: '2',
      label: 'THÔNG TIN',
      children: ``
    },
    {
      key: '3',
      label: 'ĐÁNH GIÁ',
      children: ``
    }
  ];

  return (
    <>
      <div className='background-detail' style={{ background: `url(${filmDetail.hinhAnh})` }}>
        <div className="glassmorphic-container">

          <div className='grid grid-cols-12'>

            <div className='col-span-5 col-start-3'>
              <div className='grid grid-cols-2 gap-8'>
                <img src={filmDetail.hinhAnh} alt={filmDetail.biDanh} />
                <div>
                  <p className='text-sm text-gray-100'>Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                  <p className='text-4xl text-gray-100'>{filmDetail.tenPhim}</p>
                </div>
              </div>
            </div>

            <div className='col-span-4'>
              <h1 style={{ marginLeft: '15%', color: 'yellow', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
              <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#fcd34d', fontSize: 30 }} /></h1>
              <br />
              <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                <span>{filmDetail.danhGia}</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>

              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-3 pb-20 bg-gray-300'>
        <Tabs
          style={{ maxWidth: '870px', margin: 'auto' }}
          tabPosition={'top'}
          centered
          defaultActiveKey='1'
          items={items}
        />
      </div>
    </>
  )
}
