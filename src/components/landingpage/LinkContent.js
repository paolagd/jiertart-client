import {Link} from 'react-router-dom';
//Quick Links content
export const LinkContent = ({icon, title, description, route}) => {
    return (
        <div className="col-12 col-sm-3 col d-flex"> 
            <article
                className="qlColum d-flex align-items-center text-center w-100 position-relative mb-6 mb-sm-0">
                <div className="w-100 qlcHolder">
                    <span className="icnWrap d-flex align-items-center mb-5">
                        <span className="d-block w-100">
                            <img src={icon} width="63" height="63" className="img-fluid"  alt="icon"/>
                        </span>
                    </span>
                    <h3 className="mb-0">{title}</h3>
                    <h4 className="fontBase mb-0">{description}</h4>
                    <Link to={route} className="btnGo">
                        <i className="icomoon-arrowCircleRight align-middle icn"><span className="sr-only">icon</span></i>
                    </Link>
                </div>
            </article>
        </div>
    )

} 