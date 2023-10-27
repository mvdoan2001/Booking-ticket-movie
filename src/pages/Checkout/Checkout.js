import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Checkout.module.css'
import './Checkout.css'
import { NavLink, useParams } from 'react-router-dom'
import { DatVeAction, QuanLyDatVeAction } from '../../redux/action/QuanLyDatVeAction'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { CHUYEN_TAB_1, CHUYEN_TAB_2, DAT_VE } from '../../redux/action/types/QuanLyDatVeType'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/action/QuanLyNguoiDungAction'
import moment from 'moment'
import { TOKEN, USER_LOGIN } from '../../utils/setting/config'
function Checkout() {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer)
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(QuanLyDatVeAction(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
      let classGheDaDat = ghe.daDat ? 'gheDaDat' : ''
      let classGheDangDat = ''
      let classGheDaDuocDat = ''
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat'
      }

      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
      if (indexGheDD !== -1) {
        classGheDangDat = 'gheDangDat'
      }

      let classGheKhachDat = ''
      let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
      if (indexGheKD !== -1) {
        classGheKhachDat = 'gheKhachDat'
      }
      return <Fragment key={index}>
        <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat}`} onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
          })
        }}>
          {
            ghe.daDat || classGheDangDat !== '' || classGheKhachDat !== '' ? <UserOutlined /> : ghe.stt
          }
        </button>
      </Fragment>
    })
  }

  return (
    <div className='container'>
      <div className='grid grid-cols-12'>
        <div className='col-span-9'>
          <div className=''></div>
          <div className={`${style['trapezoid']}`}>Màn Hình</div>
          <div className='w-4/5'>
            {renderGhe()}
          </div>

          <div className='mt-5' >
            <table className="table-fixed text-center w-4/5">
              <thead>
                <tr>
                  <th>Ghế Thường</th>
                  <th>Ghế Vip</th>
                  <th>Ghế Đã Đặt</th>
                  <th>Ghế Đang Đặt</th>
                  <th>Ghế Bạn Đặt</th>
                  <th>Ghế Khách Đặt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><button className='ghe'><UserOutlined /></button></td>
                  <td><button className='ghe gheVip'><UserOutlined /></button></td>
                  <td><button className='ghe gheDaDat'><UserOutlined /></button></td>
                  <td><button className='ghe gheDangDat'><UserOutlined /></button></td>
                  <td><button className='ghe gheDaDuocDat'><UserOutlined /></button></td>
                  <td><button className='ghe gheKhachDat'><UserOutlined /></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='col-span-3 mt-4'>
          <h3 className='text-green-400 text-center text-2xl'>
            {
              danhSachGheDangDat.reduce((tongTien, ghe) => {
                return tongTien += ghe.giaVe
              }, 0).toLocaleString()
            } đ
          </h3>
          <hr className='my-3' />
          <h3 className='text-xl'>{thongTinPhim.tenPhim}</h3>
          <p>Đại điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
          <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
          <hr className='my-3' />
          <div className='grid grid-cols-2'>
            <div className='col-span-1 '>
              <span className='text-red-400 text-2xl'>Ghế</span>
              {
                _.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                  return <span className='text-green-700 text-2xl' key={index}> {gheDD.stt}</span>
                })
              }
            </div>
            <div className='text-right'><span className='text-green-400 text-2xl'>
              {
                danhSachGheDangDat.reduce((tongTien, ghe) => {
                  return tongTien += ghe.giaVe
                }, 0).toLocaleString()
              }
            </span></div>
          </div>
          <hr className='my-3' />
          <div>
            <i>Email : </i> <br />
            {userLogin.email}
          </div>

          <hr className='my-3' />
          <div>
            <i>Phone : </i> <br />
            {userLogin.soDT}
          </div>

          <hr className='my-3' />
          <div className='h-full flex flex-col items-center mb-0'>
            <div onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              dispatch(DatVeAction(thongTinDatVe));
            }} className='bg-green-700 py-3 font-bold text-2xl cursor-pointer text-white w-full text-center'>ĐẶT VÉ</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function KetQuaDatVe() {

  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const itemRender = () => {
    return <section className="text-gray-600 body-font container">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-purple-500">Lịch sử đặt vé khách hàng</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            thongTinNguoiDung.thongTinDatVe.map((item, index) => {

              const { danhSachGhe } = item
              const seat = _.first(danhSachGhe)
              return <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="flex-shrink-0 rounded-lg h-80 object-cover object-center mb-4" src={item.hinhAnh} />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">{item.tenPhim} ({item.thoiLuongPhim}p)</h2>
                    <h3 className="text-gray-500 mb-3">Ngày Đặt: {moment(item.ngayDat).format('h:mm a - MMMM Do YYYY')}</h3>
                    <h3 className="text-gray-500 mb-3">Địa Điểm: {seat?.tenRap} - {seat?.tenHeThongRap} - Ghế: {
                      danhSachGhe?.map((ghe, indexGhe) => {
                        return <span key={indexGhe}> [{ghe.tenGhe}] </span>
                      })
                    }</h3>
                    <h3 className="text-gray-500 mb-3">Giá Vé: {item.giaVe?.toLocaleString()}đ / vé</h3>
                  </div>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </section>
  }

  return <div className='container'>
    {
      itemRender()
    }
  </div>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {

  const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const dispatch = useDispatch()

  const items = [
    {
      key: '1',
      label: <div onClick={() => {
        dispatch({
          type: CHUYEN_TAB_1
        })
      }}>01 CHỌN GHẾ & THANH TOÁN</div>,
      children: <Checkout />,
    },
    {
      key: '2',
      label: <div onClick={() => {
        dispatch({
          type: CHUYEN_TAB_2
        })
      }}>02 KẾT QUẢ ĐẶT VÉ</div>,
      children: <KetQuaDatVe />,
    },
    {
      key: '3',
      label: <NavLink to={'/'} style={{display:'flex', justifyContent:'center', alignItems:'center'}} ><HomeOutlined /> <span>TRANG CHỦ</span></NavLink>
    }
  ];

  const extraContent = <Fragment>
    {
      !_.isEmpty(userLogin) ? <Fragment>
        <NavLink to={'/profile'}>{userLogin.taiKhoan} </NavLink>
        <NavLink to={'/login'} onClick={() => {
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(TOKEN);

          window.location.reload()
        }}>Đăng xuất</NavLink>
      </Fragment> : ''
    }
  </Fragment>
  return <Tabs centered defaultActiveKey="1" activeKey={tabActive} items={items} className='p-4' tabBarExtraContent={extraContent} />
}