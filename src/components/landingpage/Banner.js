import React from 'react';
import BannerItem from './BannerItem';

class Banner extends React.Component {
    
    render(){
        const image = window.location.origin + "/images/banner.jpg";
        return ( 
            <main>              
                <div className="bsSlidViv">
                    <BannerItem imageUrl={image}></BannerItem> 
                    <BannerItem imageUrl="http://placehold.it/1920x900"></BannerItem> 
                </div> 
            </main> 
        ); 
    }
}

export default Banner;