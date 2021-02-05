import React from 'react'; 
import Banner from '../components/landingpage/Banner';
import CurrentArtists from '../components/landingpage/CurrentArtists'; 
import LandpageCollections from '../components/landingpage/LandpageCollections';
import LandpageExhibitions from '../components/landingpage/LandpageExhibitions'; 
import QuickLinks from '../components/landingpage/QuickLinks';

class Landingpage extends React.Component {
    
    render(){ 
        return ( 
            <>
                <Banner/>
                <CurrentArtists/>
                <QuickLinks/>
                <LandpageExhibitions/>
                <LandpageCollections/> 
            </>
        ); 
    }

}

export default Landingpage;

 