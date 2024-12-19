import React from 'react';

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-auto">
              <img src="/logo.png" alt="Logo" style={{ width: '80px', height: '80px' }} />
            </div>
            <div className="col">
              <h1 className="text-danger mb-1" style={{ fontSize: '1.75rem' }}>
                UTTARAKHAND VOCATIONAL TRAINING PROGRAMME
              </h1>
              <h2 className="h5 mb-1">(Government of Uttarakhand)</h2>
              <h3 className="h6 text-primary mb-0">
                Implementation Partner : Vision India Services Pvt. Ltd.
              </h3>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-primary text-white py-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="mb-0">UK-VOCATIONAL TRAINING PROGRAMME</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
