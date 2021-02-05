import {Link} from 'react-router-dom';

export const ExhibitionsContent = ({icon, title, description, route, image}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4"> 
            <article
                className="ueEveColumn ueEveColumnIsRed w-100 position-relative border text-gray777 gridView mb-6 mx-auto mx-md-0">
                <time datetime="2011-01-12" className="ueecTimeTag position-absolute text-uppercase d-flex bg-white text-secondary">
                    <strong  className="day d-flex align-items-center font-weight-normal bg-danger text-white px-1">01</strong>
                    <span className="d-flex align-items-center px-2">MAR 2019</span>
                </time>
                <div className="imgHolder flex-shrink-0">
                    <img src={image} className="w-100 h-100 imgFit" alt=" description"/>
                </div>
                <div className="descrWrap pt-5 pb-6 pl-3 pr-3 pl-xl-5 pr-xl-5">
                    <strong className="catagoryTitle d-block font-weight-normal text-uppercase mb-3">SPECIAL EVENT</strong>
                    <h2 className="h2Small h2SmallViv mb-2">
                        <Link to={route}>Rough Cut: Independent Japanese Antiquity</Link>
                    </h2>
                    <address className="mb-6"><time datetime="2011-01-12">12:30pm - 1:00pm</time><span>/</span>32 Quincy Street, Cambridge, MA</address>
                    <Link to={route} className="btn btnGre5 btnGre5Outline bdr2 mb-1 btnSmMinWidth btn-sm">Details</Link>
                </div>
            </article>
        </div>
    )

} 