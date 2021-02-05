import React from 'react' 
import {Link} from 'react-router-dom';
import { NavbarButton } from './NavbarButton';
import { SMButton } from './SMbutton';

class Navbar extends React.Component {

    render(){
        return (
       
            <div className="phStickyWrap w-100">

                <header id="pageHeader" className="position-absolute w-100"> 
 
                    <div className="hdHolder headerFixer headerFixerII">
                        <div className="container"> 
                            <nav className="navbar navbar-expand-md navbar-light d-block px-0 pt-2 pb-2 pt-md-2 pb-md-2 pt-lg-4 pb-lg-4">
                                <div className="row">
                                    <div className="col-5 col-sm-3 col-lg-2"> 
                                        <div className="logo logoVii mt-lg-1">
                                            <Link to="/"> Logo </Link>
                                        </div>
                                    </div>
                                    <div className="col-7 col-sm-9 col-lg-10 position-static d-flex justify-content-end pt-lg-1">
                    
                                        <div className="collapse navbar-collapse pageNavigationCollapse pageNavigationCollapseVii justify-content-md-end" id="pageNavigationCollapse">
                                            <ul className="navbar-nav mainNavigation mainNavigationVv text-capitalize">
                                                <NavbarButton route="/artists" description="Artists"></NavbarButton>
                                                <NavbarButton route="/collections" description="Collections"></NavbarButton>
                                                <NavbarButton route="/collections" description="Exhibitions"></NavbarButton>
                                                <NavbarButton route="/collections" description="About us"></NavbarButton>
                                                <NavbarButton route="/collections" description="Services"></NavbarButton>
                                                <NavbarButton route="/collections" description="Collections"></NavbarButton> 
                                            </ul>
                                        </div>

                                        <div className="d-flex align-items-center ml-3 ml-lg-6"> 
                                            
                                            <Link to="/" className="hdMenuOpener hdMenuOpenerVv hdSideMenuOpener position-relative ml-4 d-none d-md-block">
                                                <span className="icnBar position-absolute"><span className="sr-only">menu</span></span>
                                            </Link>
                                        
                                            <button className="navbar-toggler pgNavOpener pgNavOpenerVv position-absolute"
                                                type="button" data-toggle="collapse" data-target="#pageNavigationCollapse"
                                                aria-controls="pageNavigationCollapse" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"><span className="sr-only">menu</span></span>
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <nav className="navbar navbar-light d-flex flex-column navbarSide position-fixed h-100 px-6 pt-10 pb-6 px-md-10 pb-md-10">
                        <ul className="navbar-nav mainNavigation w-100 flex-grow-1 mainSideNavigation text-capitalize d-block">
                            <NavbarButton route="/artists" description="Artists"></NavbarButton>
                            <NavbarButton route="/collections" description="Collections"></NavbarButton>
                            <NavbarButton route="/collections" description="Exhibitions"></NavbarButton>
                            <NavbarButton route="/collections" description="About us"></NavbarButton>
                            <NavbarButton route="/collections" description="Services"></NavbarButton>
                            <NavbarButton route="/collections" description="Collections"></NavbarButton> 
                        </ul>
                        
                        <div className="nvbBottomWrap w-100 flex-shrink-0 text-gray888 pt-10 pb-1">
                            <address className="mb-0">
                                <p> 
                                    <Link href="mailto:info@museumwp.com" className="colorInherit textDecorationNone">info@museumwp.com</Link>
                                </p>
                                <ul className="list-unstyled socialNetworks ftSocialNetworks ftSocialNetworksVix d-flex flex-wrap mb-2 mt-11"> 
                                    <SMButton route="/" description="twitter" icon="fa-linkedin"></SMButton> 
                                    <SMButton route="/" description="facebook" icon="fa-facebook-f"></SMButton> 
                                    <SMButton route="/" description="instagram" icon="fa-instagram"></SMButton> 
                                    <SMButton route="/" description="youtube" icon="fa-youtube"></SMButton> 
                                    <SMButton route="/" description="wechat" icon="fa-weixin"></SMButton>  
                                </ul>
                                <ul className="list-unstyled ftTermLinks ftTermLinksVix d-flex flex-wrap mb-0">
                                    <li>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Terms of Use</a>
                                    </li>
                                </ul>
                            </address>
                        </div>

                        <Link to="/" className="hdMenuOpener hdSideMenuOpener position-absolute"> 
                            <span className="icnBar position-absolute"><span className="sr-only">menu</span></span>
                        </Link> 
                    </nav>
                </header>
            </div>
        
        ); 
    }
}

export default Navbar;