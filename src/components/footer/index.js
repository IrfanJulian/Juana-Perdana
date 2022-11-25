import React from 'react'
import styles from './index.module.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
        <div className={"container=fluid "+styles.containerfluid}>
            <div className="container py-2">
                <div className="d-flex">
                    <div className="wrapper1 w-75 mt-4">
                        <p className='h5 text-white mb-4'>PT. JUANA PERDANA ANUGERAH</p>
                        <p className='fs-6 text-white'>- General Contractor</p>
                        <p className='fs-6 text-white'>- Mechanical</p>
                        <p className='fs-6 text-white'>- Electrical</p>
                        <p className='fs-6 text-white'>- Plumbing</p>
                    </div>
                    <div className="wrapper2 w-25">
                        <div className="d-flex mt-5">
                            <p className='fs-5 text-white'><i class="bi bi-geo-alt-fill"></i></p>
                            <p className='fs-6 text-white ms-2'>Location</p>
                        </div>
                        <p className='fs-6 text-white ms-2'>Jalan Walagri Mulya Pasanggrahan RT-002 RW.005 Kelurahan Pasanggrahan Kecamatan Cilengkrang Kota Bandung Jawa Barat</p>
                    </div>
                </div>
                <hr className='my-4 border border-2 border-white' />
                <div className="wrappercontact">
                    <div className="d-flex justify-content-center">
                        <Link className='d-flex me-5'>
                            <p className='text-white me-2'><i class="bi bi-whatsapp"></i></p>
                            <p className='text-white'>08123456789</p>
                        </Link>
                        <Link className='d-flex me-5'>
                            <p className='text-white me-2'><i class="bi bi-envelope-at-fill"></i></p>
                            <p className='text-white'>juanaperdana@gmail.com</p>
                        </Link>
                        <Link className='d-flex'>
                            <p className='text-white me-2'><i class="bi bi-telephone-inbound-fill"></i></p>
                            <p className='text-white'>08123456789</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer