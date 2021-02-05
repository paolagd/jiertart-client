import {Link} from 'react-router-dom';

export const NavbarButton = ({route, description}) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={route} role="button" aria-haspopup="true" aria-expanded="false">{description}</Link>  
        </li>
    )

} 