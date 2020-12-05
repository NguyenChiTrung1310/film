import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import AdminBar from '../../components/AppBar/Admin/AdminBar';
import ErrorPage from '../Error/ErrorPage';

const AdminPage = () => {
  const userType = useSelector(state => state.user.credentials);
  
  return (
    <div>
      {
        userType
          ? (
            <div>
              {
                userType.maLoaiNguoiDung === 'QuanTri'
                  ? (<AdminBar />)
                  : 
                  <Route
                    component={ErrorPage}
                  />
              }
            </div>
          )
          : 
          <Route
            component={ErrorPage}
          />
      }
    </div>
  );
}

export default AdminPage;
