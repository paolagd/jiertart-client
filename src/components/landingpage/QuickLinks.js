import React from 'react';
import { LinkContent } from './LinkContent';

class QuickLinks extends React.Component {
    
    render(){
        return (
 
            <section className="bg-grayf8f8f8 hasBdr quickLinkBlock border-bottom-0 quickLinkBlockII pt-7 pt-md-0">
                <div className="container"> 
                    <div className="row">
                        <div className="col-12 col-md-3 d-md-flex align-items-md-center text-center text-md-left">
                            <h2 className="mb-5 mb-md-0">Our services</h2>
                        </div>
                        <div className="col-12 col-md-9"> 
                            <div className="row qlColumnsWrap qlColumnsWrapII d-flex">
                                <LinkContent icon="images/icn07_red.svg" title="Buy &amp; Resell" description="After 1 year, your collection from our artist can be advertised and resold" route="/"></LinkContent>
                                <LinkContent icon="images/icn08_red.svg" title="Plan your Visit" description="Need help curating your space? For your business and for your home" route="/"></LinkContent>
                                <LinkContent icon="images/icn08_red.svg"  title="After-sales services" description="Artwork Framing, Transport, Restoration by our Artists" route="/"></LinkContent>
                                <LinkContent icon="images/icn08_red.svg" title="Art Investment Advisory" description="Art History, Auctions, Art Fairs" route="/"></LinkContent>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        ); 
    }
}

export default QuickLinks;