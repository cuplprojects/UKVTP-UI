import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Function to generate title from path
  const getTitle = (path) => {
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav aria-label="breadcrumb" className="bg-light p-2 rounded">
      <ol className="breadcrumb m-0">
        {pathnames.length > 0 ? (
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        ) : (
          <li className="breadcrumb-item active">Home</li>
        )}
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return isLast ? (
            <li key={name} className="breadcrumb-item active">
              {getTitle(name)}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item">
              <Link to={routeTo}>{getTitle(name)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
