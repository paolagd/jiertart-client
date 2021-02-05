import {Link} from 'react-router-dom';

export const SMButton = ({route, description, icon}) => {
    return (
        <li>
            <Link to={route}>
                <i className={`fab ${icon}`} aria-hidden="true"><span className="sr-only">{description}</span></i>
            </Link>
        </li>
    )

} 