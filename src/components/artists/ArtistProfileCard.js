import React from 'react';

//Artist Profile card from the Artists page
export const ArtistProfileCard = ({imageUrl}) => {
     
    return ( 
        <div className="col-12 col-md-4"> 
            <article className="artistProfileColumn text-gray777 mb-6 mb-lg-9 mb-xl-13 mx-auto">
                <div className="imgHolder mb-6">
                    <a href="single-artist.html"><img src="http://placehold.it/365x345" className="img-fluid"
                            alt=" description"/></a>
                </div>
                <h2>Nimrod Barshad</h2>
                <h3 className="fontBase mb-2">Painter, Sculptor, Conceptual Artist</h3>
                <p><a href="tel:+61986543210" className="textDecorationNone">+61 98654 3210</a> / <a
                        href="/">E-mail</a></p>
            </article>
        </div>  
    ); 
   
}

export default ArtistProfileCard;