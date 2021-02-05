import React from 'react';
//Main banner content/items
export const BannerItem = ({imageUrl}) => {
     
    return ( 
        <div>                      
            <article
                className="introBannerBlock introBannerBlockViv hdIsVix w-100 text-center text-white position-relative d-flex bgCover"
                style={{backgroundImage: `url(${imageUrl})`}}> 
                <div className="ibbAlignHolder w-100 d-flex align-items-center">
                    <div className="ibbHolder w-100 py-6">
                        <div className="container holder position-relative">
                            <div className="row">
                                <div className="col-12 col-sm-10 offset-sm-1">
                                    <strong
                                        className="d-block fontSerif mainHeadingTitle font-weight-normal mb-5">Jier ART</strong>
                                    <h1 className="text-white ibbHeading ibbHeadingViv mb-4 mb-lg-8"> We can do this!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
                
    ); 
   
}

export default BannerItem;

/*  <a href="/"
                                        className="btn btn-dark btnDarkInverse align-top btnMdMinWidth">Wohoo!</a>*/