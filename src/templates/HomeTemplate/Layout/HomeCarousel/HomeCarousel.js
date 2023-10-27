import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCarouselAction } from '../../../../redux/action/CarouselAction';


export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();

    const renderImg = () => {
        return arrImg.map((item, index) => {
            const contentStyle = {
                height: '750px',
                background: 'linear-gradient(to top,#000,transparent 20%)',
                backgroundImage: `url(${item.hinhAnh})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            };
            return <div key={index}>
            <div style={contentStyle}>
                <img className='opacity-0' src={item.hinhAnh} alt={item.maPhim} />
            </div>
        </div>
        })
    }

    useEffect( () => {
        dispatch(getCarouselAction())
    }, []);
    return (
        <Carousel effect="fade" className='z-0'>
            {renderImg()}
        </Carousel>
    )
}
