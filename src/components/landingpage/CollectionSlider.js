import React from 'react';
import {Link} from 'react-router-dom';

//Main banner content/items
export const CollectionSlider = ({imageUrl, title}) => {
     
    return ( 
        <div>
            <div className="col-12 px-0"> 
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                    <Link data-fancybox="gallery" to="http://placehold.it/480x420">
                        <img src={imageUrl} className="img-fluid" alt="description"/>
                    </Link>
                    <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                        <div className="wrap w-100 p-4">
                            <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2"><span
                                    className="sr-only">icon</span></i>
                            <h3 className="text-white mb-0">{title}</h3>
                        </div>
                    </div>
                </figure>
            </div>
        </div> 
    ); 
   
}

export default CollectionSlider;