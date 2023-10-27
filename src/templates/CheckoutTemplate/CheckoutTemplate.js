import React, { Fragment, useEffect } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { USER_LOGIN } from '../../utils/setting/config';


export default function CheckoutTemplate({ children }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to='/login' replace={true} />
  }
  return (
    <Fragment>

      {children}

      <Outlet />
    </Fragment>
  )

}

