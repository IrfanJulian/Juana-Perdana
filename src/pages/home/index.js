import React from 'react'
import Navbar from '../../components/navbar'
import logo from '../../assets/logo3.png'
import styles from './index.module.css'
import Footer from '../../components/footer'

const Home = () => {
  return (
    <div>
        <header>
          <Navbar />
        </header>

        <section>
          <div className="container p-5 d-grid justify-content-center">
            <img src={logo} className={'mx-auto mb-4 '+styles.logo} alt="" />
            <h1 className='mx-auto'>PT. Juana Perdana Anugerah</h1>
            <div className="d-flex mx-auto">
                <p className='mx-auto h5'>General Contractor -</p>
                <p className='mx-auto h5'>- Mechanical -</p>
                <p className='mx-auto h5'>- Electrical -</p>
                <p className='mx-auto h5'>- Plumbing</p>
            </div>
            <div className="p-5">
              <p className='fs-5'>
                PT Juana Perdana Anugerah merupakan perusahaan swasta berskala nasional
                yang berdiri dan hadir melayani sejak Juli 2015.
                PT Juana Perdana Anugerah saat ini beroperasi di berbagai daerah di Indonesia
                dan berpusat di Bandung Jawa Barat. Saat ini PT Juana Perdana Anugerah berkomitmen untuk meningkatkan
                kinerja perusahaan melalui penerapan penguatan
                manajemen perusahaan, budaya organisasi, system informasi hingga manajemen risiko
                dalam mechanical electrical. Komitmen tersebut dibangun dengan tujuan untuk meningkatkan
                kepuasan pelanggan secara nyata dengan menghasilkan karya mechanical electrical yang
                berkualitas dan tepat waktu. 
              </p>
            </div>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Home