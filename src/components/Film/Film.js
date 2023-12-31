import React from 'react'

export default function Film(props) {

  const {film} = props;

  return (
        <div className="mr-2 bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{height: '400px'}} >
          <div style={{ backgroundImage: `url(${film.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '350px' }} >
            <img className='w-full opacity-0' src={film.hinhAnh} alt= {film.tenPhim} />
          </div>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-20">{film.tenPhim}</h1>
          <p className="leading-relaxed mb-3">{film.moTa.length > 80 ? <span>{film.moTa.slice(0, 80)} ...</span> : <span>{film.moTa}</span> }</p>
          <a className="text-indigo-500 inline-flex items-center" href='/'>ĐẶT VÉ
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
  )
}
