import React from 'react'
import './home.css'

export default function Home() {
    return <>
        <section className='home'>
            <div className="row">
                <div className='col-md-7 banner-img d-none d-md-block'>
                    <img src="http://ingenioushubs.com/Allhallows/images/Banner.png" alt="Home Image" className='img-fluid' />
                </div>
                <div className='col-12 col-md-5'>
                    <div className='home-text-center'>
                        <h2>31th October 2023</h2>
                        <h5 className='font-alt ban-txt'>Halloween Party</h5>
                        <p className='text-center'>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
                        <div className='btn-bar text-center'>
                            <a className='text-decoration-none'>Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
