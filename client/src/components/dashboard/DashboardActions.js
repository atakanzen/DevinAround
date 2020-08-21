import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: '/edit-profile',
    label: 'Edit Profile',
    iClass: 'fas fa-user-circle text-primary'
  },
  {
    path: '/add-experience',
    label: 'Add Experience',
    iClass: 'fab fa-black-tie text-primary'
  },
  {
    path: '/add-education',
    label: 'Add Education',
    iClass: 'fas fa-graduation-cap text-primary'
  }
];
export default () => {
  return (
    <div class='dash-buttons'>
      {routes.map(({ path, label, iClass }) => {
        return (
          <Link to={path}>
            <i className={iClass}></i> {label}
          </Link>
        );
      })}
    </div>
  );
};
