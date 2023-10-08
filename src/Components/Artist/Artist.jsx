import React from 'react'
import './artist.css'

export default function Artist() {
    return <>
        <section className='artist'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className='font-alt heading mb-5'>Our Halloween's Artist</h2>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="http://ingenioushubs.com/Allhallows/images/artist-image.png" alt="Artist image" className='w-100' />
                        </div>
                        <div className="col-md-6 artist-info mt-3">
                            <h2>DJ Remerson Huke</h2>
                            <h3>Lead DJ On Deadpoll</h3>
                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</p>
                            <ul className='d-flex list-unstyled'>
                                <li><a><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a><i className='fa-brands fa-twitter'></i></a></li>
                                <li><a><i className='fa-brands fa-dribbble'></i></a></li>
                                <li><a><i className='fa-brands fa-behance'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="http://ingenioushubs.com/Allhallows/images/artist-image.png" className='w-100' alt="Artist image" />
                        </div>
                        <div className="col-md-6 artist-info mt-3">
                            <h2>DJ Remerson Huke</h2>
                            <h3>Lead DJ On Deadpoll</h3>
                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.</p>
                            <ul className='d-flex list-unstyled'>
                                <li><a><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a><i className='fa-brands fa-twitter'></i></a></li>
                                <li><a><i className='fa-brands fa-dribbble'></i></a></li>
                                <li><a><i className='fa-brands fa-behance'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
