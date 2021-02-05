import React from 'react';
import {Link} from 'react-router-dom';
import { ExhibitionsContent } from './ExhibitionsContent';

class LandpageExhibitions extends React.Component {
    
    render(){
        return (
            <section className="upcomingEveBlock pt-6 pb-6 pt-md-9 pb-md-9 pt-lg-13 pb-lg-14 pt-xl-20 pb-xl-20">
                <div className="container"> 
                    <header className="topHeadingHead text-center mb-7 mb-lg-11">
                        <h1>Exhibitions</h1>
                    </header>
                    <div className="row justify-content-center">
                       
                        <ExhibitionsContent image="http://placehold.it/365x320"></ExhibitionsContent>
                        <div className="col-12 col-md-6 col-lg-4"> 
                            <article
                                className="ueEveColumn ueEveColumnIsRed w-100 position-relative border text-gray777 gridView mb-6 mx-auto mx-md-0">
                                <time datetime="2011-01-12"
                                    className="ueecTimeTag position-absolute text-uppercase d-flex bg-white text-secondary">
                                    <strong
                                        className="day d-flex align-items-center font-weight-normal bg-danger text-white px-1">08</strong>
                                    <span className="d-flex align-items-center px-2">MAR 2019</span>
                                </time>
                                <div className="imgHolder flex-shrink-0">
                                    <img src="http://placehold.it/365x320" className="w-100 h-100 imgFit"
                                        alt=" description"/>
                                </div>
                                <div className="descrWrap pt-5 pb-6 pl-3 pr-3 pl-xl-5 pr-xl-5">
                                    <strong
                                        className="catagoryTitle d-block font-weight-normal text-uppercase mb-3">Tour</strong>
                                    <h2 className="h2Small h2SmallViv mb-2">
                                        <a href="single-events.html">Rojo Y Negro Latin American Art</a>
                                    </h2>
                                    <address className="mb-6"><time datetime="2011-01-12">12:30pm -
                                            1:00pm</time><span>/</span>32 Quincy Street, Cambridge, MA</address>
                                    <div className="btnsWrap d-flex flex-wrap mx-n1">
                                        <a href="single-events.html"
                                            className="btn btnGre5 btnGre5Outline mb-1 bdr2 btnSmMinWidth btn-sm mx-1">Details</a> 
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div> 
                    <footer className="btnHolder text-center pt-lg-4">
                        <Link href="single-events.html" className="d-inline-block align-top teeSeeAllBtn mt-2">See All Exhibitions
                            <i className="icomoon-arrowCircleRight align-middle icn ml-1"><span
                                    className="sr-only">icon</span></i></Link>
                    </footer>
                </div>
            </section>
 
        ); 
    }
}

export default LandpageExhibitions;