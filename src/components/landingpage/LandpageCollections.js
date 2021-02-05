import React from 'react';
import CollectionSlider from './CollectionSlider';

class LandpageCollections extends React.Component {
    
    render(){
        return ( 
    
            <section className="ourGalleryBlock pt-6 pt-md-8 pt-lg-12">
                <div className="container"> 
                    <header className="topHeadingHead text-center mb-6 mb-lg-13">
                        <h2 className="h2Medium">See Our Collections</h2>
                    </header>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters d-block"> 
                        <div className="gallerySlider">
                            <CollectionSlider imageUrl="http://placehold.it/480x420" title="Germanian Grothery"></CollectionSlider>
                            <CollectionSlider imageUrl="http://placehold.it/480x420" title="Germanian Grothery"></CollectionSlider>
                            <CollectionSlider imageUrl="http://placehold.it/480x420" title="Germanian Grothery"></CollectionSlider>
                            <CollectionSlider imageUrl="http://placehold.it/480x420" title="Germanian Grothery"></CollectionSlider>
                            <CollectionSlider imageUrl="http://placehold.it/480x420" title="Germanian Grothery"></CollectionSlider>
                           
                        </div>
                    </div>
                </div>
            </section> 

        ); 
    }
}

export default LandpageCollections;