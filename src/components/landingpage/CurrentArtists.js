import React from 'react';
import {Link} from 'react-router-dom';
import { CurrentArtistSlider } from './CurrentArtistSlider';

class CurrentArtists extends React.Component {
    
    render(){
        return ( 
            <section className="currExhibitionBlock pt-6 pb-1 pt-md-9 pb-md-4 pt-lg-14 pb-lg-12 pt-xl-20 pb-xl-16">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <header className="headHeading text-center text-lg-left mb-7">
                                <h2 className="h2Medium mb-5">Artists</h2>
                                <div className="hhFzMedium hhFzMediumVvi">
                                    <p className="mb-6">Text that needs to be defined.</p>
                                </div>
                                <Link to="single-exhibition.html" className="btn btnGre5 btnGre5Outline btnMidMinWidth bdr2">See All Artists</Link>
                            </header>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row mx-xl-n4 d-block px-7 px-sm-14 pl-lg-21 pr-lg-16 pr-xlwd-0 pt-2">
                                <div className="currOnviewSliderII">
                                    <CurrentArtistSlider route="http://placehold.it/365x270" description="lileo Descent VR with tim"></CurrentArtistSlider>
                                    <CurrentArtistSlider route="http://placehold.it/365x270" description="2"></CurrentArtistSlider>
                                    <CurrentArtistSlider route="http://placehold.it/365x270" description="3"></CurrentArtistSlider>
                                    <CurrentArtistSlider route="http://placehold.it/365x270" description="4"></CurrentArtistSlider> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        ); 
    }
}

export default CurrentArtists;