import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons'
import styleCard from './Film_Flip.module.css'
import { NavLink } from 'react-router-dom';

export default function Film_Flip(props) {

    const { film } = props;

    return (
        <div className={`${styleCard['flip-card']}`}>
            <div className={`${styleCard["flip-card-inner"]}`}>
                <div className={`${styleCard["flip-card-front"]}`}>
                    <img src={film.hinhAnh} alt="Avatar" style={{ width: 213, height: 315 }} />
                </div>
                <div className={`${styleCard["flip-card-back"]}`} style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0 }} >
                        <img src={film.hinhAnh} alt="Avatar" style={{ width: 213, height: 315 }} />
                    </div>
                    <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                            <div className="text-2xl mt-2 font-bold">{film.tenPhim}</div>
                        </div>
                    </div>
                </div>

            </div>
            <NavLink to={`/detail/${film.maPhim}`}>
                <p className='text-center cursor-pointer py-2 bg-indigo-300 my-2 text-slate-50 font-bold'>ĐẶT VÉ</p>
            </NavLink>
        </div>

    )
}
