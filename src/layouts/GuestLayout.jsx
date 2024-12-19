import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';

const GuestLayout = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header />
            
            <main className="flex-fill">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    Notice Board
                                </div>
                                <div className="card-body">
                                    <h5 className="text-danger">Important Notice :</h5>
                                    <ol>
                                        <li>Trainers add all students details in respective batches.</li>
                                        <li>Trainer marks students attendance daily.</li>
                                        <li>Trainers marks self attendance daily.</li>
                                    </ol>
                                    <p className="text-danger mb-0">
                                        Trainers update all details as soon as possible and report to respective Co-Ordinators.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    User's Corner
                                </div>
                                <div className="card-body d-flex flex-column gap-2">
                                    <button className="btn btn-success">Users Login</button>
                                    <button className="btn btn-danger">Activate your Account</button>
                                    <button className="btn btn-danger">Forgot Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GuestLayout;
