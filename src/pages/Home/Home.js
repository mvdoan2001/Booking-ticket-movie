import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachPhimActions } from '../../redux/action/QuanLyPhimActions';
import { MultipleRowSlick } from '../../components/ReactSlick/MultipleRowSlick';
import { layDanhSachHeThongRapAction } from '../../redux/action/QuanLyRapAction';

export default function Home() {

  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimActions());
    dispatch(layDanhSachHeThongRapAction());
  }, [])

  return (
    <div>

      <div style={{ maxWidth: '1080px', width: '80vw', height: '100%', margin: 'auto' }}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <MultipleRowSlick arrFilm={arrFilm} />
          </div>
        </section>
      </div>
      <div style={{ height: 120, maxWidth: 940, margin: 'auto', width: '100%', background: 'url(&quot;img/back-news.png&quot;) 0% 0% / 100% no-repeat' }}></div>
      <HomeMenu heThongRapChieu={heThongRapChieu} />
      <div style={{ height: 120, maxWidth: 940, margin: 'auto', width: '100%', background: 'url(&quot;img/back-news.png&quot;) 0% 0% / 100% no-repeat' }}></div>
    </div>
  )
}
