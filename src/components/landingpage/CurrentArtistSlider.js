import {Link} from 'react-router-dom';

export const CurrentArtistSlider = ({route, description}) => {
    return (  
        <div>
            <div className="col-12 px-xl-4">
                <article className="currExibitColumn mb-6 mx-auto">
                    <div className="imgHolder mb-3 mb-lg-7">
                        <Link to={route}>
                            <img src="http://placehold.it/365x270" className="img-fluid w-100 d-block" alt="Artwork"/>
                        </Link>
                    </div>
                    <h2 className="mb-3">
                        <Link to={route}>{description}</Link>
                    </h2> 
                </article>
            </div>
        </div> 
    );
} 