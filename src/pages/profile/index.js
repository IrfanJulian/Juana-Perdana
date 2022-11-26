import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar/index'
import styles from './index.module.css'
import img1 from '../../assets/aset1.jpeg'
import img2 from '../../assets/aset2.jpeg'
import img3 from '../../assets/aset5.jpeg'
import img4 from '../../assets/aset6.jpeg'
import img5 from '../../assets/aset7.jpeg'
import img6 from '../../assets/aset8.jpeg'
import img7 from '../../assets/aset9.jpeg'
import img8 from '../../assets/aset10.jpeg'

const Profile = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>

        <section>
            <div className="container">
                <div className="card rounded border border-3 w-sm-75 p-5 mx-auto">
                    <div className="about mx-auto">
                        <p className='h4 text-center'>Tentang Perusahaan</p>
                        <p className='fs-6 my-4'>
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
                <div className="card rounded border border-3 w-sm-75 p-5 mt-5 mx-auto">
                    <div className="about mx-auto">
                        <p className='h4 text-center'>Visi dan Misi Perusahaan</p>
                        <p className='h5 mt-5 mb-2 text-start'>Visi</p>
                        <p className='fs-6 my-4 text-start'>
                            Menjadi perusahaan kontraktor berorientasi pada kepuasan klien, profesional dan terpercaya. 
                        </p>
                        <p className='h5 mt-5 mb-4 text-start'>Misi</p>
                        <p className='fs-6 text-start'>1. Merancang dan melaksanakan pekerjaan Mechanical Electrical untuk bangunan dengan cermat
                        sehingga mencapai standard keamanan dan efisiensi yang tinggi dan tahan lama.</p>
                        <p className='fs-6 text-start'>2. Menjadikan pelanggan sebagai mitra berkelanjutan.</p>
                        <p className='fs-6 text-start'>3. Menciptakan kondisi terbaik bagi karyawan untuk bertumbuh dan berprestasi.</p>
                        <p className='fs-6 text-start'>4. Meningkatkan keuntungan perusahaan.</p>
                    </div>
                </div>
                <div className="card rounded border border-3 w-sm-75 p-5 mt-5 mx-auto">
                    <div className="about mx-auto">
                        <p className='h4 text-center'>Budaya Organisasi</p>
                        <p className='h5 mt-5 mb-2 text-start'>Jujur</p>
                        <p className='fs-6 mb-4 text-start'>Berkata dan bertindak sesuai fakta.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Berani</p>
                        <p className='fs-6 mb-4 text-start'>Menepati janji yang telah dibuat dan tidak berjanji apabila tidak sanggup memenuhinya.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Komitmen</p>
                        <p className='fs-6 mb-4 text-start'>Memilih respon positif atas hal atau kejadian dan bersegera melakukan tindakan.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Peduli</p>
                        <p className='fs-6 mb-4 text-start'>Memperhatikan penampilan diri, peduli lingkungan kerja dan peduli keuangan perusahaan.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Tanggung Jawab</p>
                        <p className='fs-6 mb-4 text-start'>Memilih respon positif atas hal atau kejadian dan bersegera melakukan tindakan.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Gigih</p>
                        <p className='fs-6 mb-4 text-start'>Memiliki semangat pantang menyerah dalam mengejar tujuan perusahaan.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Terbuka</p>
                        <p className='fs-6 mb-4 text-start'>Mengenali teman sekantor, mendengar dan menerima masukan dan terus belajar untuk lebih baik.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Empati</p>
                        <p className='fs-6 mb-4 text-start'>Mampu menempatkan diri sendainya kita sebagai orang lain, baik sebagai konsumen, atasan, rekan kerja, atau bawahan.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Berbagi</p>
                        <p className='fs-6 mb-4 text-start'>Dengan saling mengenal, memahami, menolong dan membantu.</p>
                        <p className='h5 mt-3 mb-2 text-start'>Action</p>
                        <p className='fs-6 mb-4 text-start'>Bersegera melakukan kegiatan yang sudah ditugaskan dan atau yang menjadi tuntutan untuk mencapai target sampai berhasil.</p>
                    </div>
                </div>
                <div className="card rounded border border-3 w-sm-75 p-5 mt-5 mx-auto">
                    <div className="about mx-auto">
                        <p className='h4 text-center'>Struktur Organisasi</p>
                        <div className="d-flex  mt-5 mb-2">
                            <p className='h5 mt-1 text-start'>Direktur : </p>
                            <p className='fs-5 text-start ms-3'>Irfan Julian Ibrahim</p>
                        </div>
                    </div>
                </div>
                <div className="card rounded border border-3 w-sm-75 p-5 mt-5 mx-auto">
                    <div className="about mx-auto d-grid justify-content-sm-center">
                        <p className='h4 text-center'>Portofolio</p>
                        {/* <div className="card d-grid p-4 mt-5"> */}
                            <p className='h6 h5-sm text-start mt-3'>1. Hermina Februari 2019 s/d Januari 2020 Pengerjaan Mechanical, Electrical dan Plumbing di Gedung Rumah Sakit Hermina Arcamanik Kota Bandung.</p>
                            <div className="d-flex-sm">

                            <img src={img1} className={'mx-3 mb-5 mb-sm-5 '+styles.img} alt="" />
                            <img src={img2} className={'mx-3 mb-5 mb-sm-5 '+styles.img} alt="" />
                            </div>
                            <div className="d-flex-sm my-5 mt-sm-4">

                            <img src={img3} className={'mx-3 mb-5 mb-sm-5 '+styles.img} alt="" />
                            <img src={img4} className={'mx-3 mb-5 mb-sm-5 '+styles.img} alt="" />
                            </div>
                        {/* </div> */}
                        {/* <div className="card d-grid p-4 mt-5"> */}
                            <p className='h6 h5-sm text-start mt-5'>2. Dapen Pindad September 2022 s/d November 2022 Pengerjaan Mechanical, Electrical di Gedung Dapen Pindad Kota Bandung.</p>
                            <div className="d-flex-sm">

                            <img src={img5} className={'mx-3 my-5 '+styles.img} alt="" />
                            <img src={img6} className={'mx-3 my-5 '+styles.img} alt="" />
                            </div>
                            <div className="d-flex-sm">

                            <img src={img7} className={'mx-3 mb-5 '+styles.img} alt="" />
                            <img src={img8} className={'mx-3 mb-5 '+styles.img} alt="" />
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
                    <hr className='my-5' />
        </section>

        <footer className='mt-5'>
            <Footer />
        </footer>
    </div>
  )
}

export default Profile