import React from 'react'
import './contact.css'

export default function Contact() {
    return <>
        <section className='contact'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className='heading'>Contact Us</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-12 text-center">
                        <form action="" className='mb-4'>
                            <div className="input-group">
                                <input type="email" name="email" className="form-control bg-transparent " placeholder='Your Email Address Here' />
                                <span className='inpiut-group-btn'>
                                    <a href="#" className="btn">Subscrie</a>
                                </span>
                            </div>
                        </form>
                        <h3 className='text-white'>Get Update</h3>
                        <ul className='list-unstyled d-flex '>
                            <li><a><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a><i className='fa-brands fa-twitter'></i></a></li>
                            <li><a><i className='fa-brands fa-dribbble'></i></a></li>
                            <li><a><i className='fa-brands fa-behance'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}
