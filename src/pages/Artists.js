import React from 'react'; 
import { ArtistHeader } from '../components/ArtistHeader';
import ArtistProfileCard from '../components/artists/ArtistProfileCard';

class Artists extends React.Component{

    render(){
        return(
            <> 
                <main> 
                    <ArtistHeader></ArtistHeader>

                    <section className="ourAritstsBlock text-center pt-6 pt-md-9 pt-lg-13 pt-xl-20 pb-4 pb-lg-8">
                        <div className="container"> 
                            <header className="headingHead mb-7 mb-md-9 mb-xl-13">
                                <h1 className="h1Large">Our Artists</h1>
                            </header>
                            <div className="row">
                                <ArtistProfileCard></ArtistProfileCard>
                                <ArtistProfileCard></ArtistProfileCard>
                                <ArtistProfileCard></ArtistProfileCard>
                                <ArtistProfileCard></ArtistProfileCard>
                                <ArtistProfileCard></ArtistProfileCard>
                                <ArtistProfileCard></ArtistProfileCard>  
                                <ArtistProfileCard></ArtistProfileCard>
                                <ArtistProfileCard></ArtistProfileCard>                               
                            </div>
                        </div>
                    </section>
                </main>

 
            </>            
        );
    }
}

export default Artists;