import React from 'react'
import logo from '../../assets/logo3.png'
import styles from './index.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className={"container-fluid shadow-lg mb-5 p-4 "+styles.containerfluid}>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Link to={'/home'} className='d-flex text-decoration-none'>
                            <img src={logo} className={'border border-2 '+styles.imglogo} alt="logo" />
                            <p className='h3 my-auto ms-3 text-white'>PT. Juana Perdana Anugerah</p>
                        </Link>
                    </div>
                    <div className="col-7 d-flex justify-content-end">
                        <Link to={'/home'} className='me-5'>
                            <p className='text-white fs-4 h-100 d-grid align-items-center'><i class="bi bi-house-fill"></i></p>
                        </Link>
                        <Link to={'/profile'} className='me-5'>
                            <p className='text-white fs-4 h-100 d-grid align-items-center'><i class="bi bi-person-circle"></i></p>
                        </Link>
                        <Link className=''>
                            <p className='text-white fs-4 h-100 d-grid align-items-center'><i class="bi bi-telephone-inbound-fill"></i></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar