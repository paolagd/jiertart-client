import React from 'react' 
import { SMButton } from './SMbutton';

class Footer extends React.Component {
    
    render(){
        return (  
            <div className="ftAreaWrap bg-secondary text-gray888"> 
                <aside className="footerAside pt-6 pb-md-3 pt-md-7 pb-lg-6 pt-lg-10 pt-xl-15 text-center text-md-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 mb-6"> 
                                <div className="ftLogo mt-1 mx-auto mx-md-0">
                                    <a href="home.html">
                                        <img src="images/logo-dark.png" className="img-fluid"
                                            alt="Muzze || Art &amp; History Museum"/>
                                    </a>
                                </div>
                            </div>
                           
                            <div className="col-12 col-md-6 col-lg-3 mb-6">
                                <h3 className="text-white mb-4">Contact Us</h3>
                                <address className="ftAdr">2270 S Real Camino Lake California, US 90967</address> 
                                <ul className="list-unstyled ftContactList mb-3">
                                    <li>
                                        <a href="tel:16179876543">1 (617) 987-6543</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@museumwp.com">info@museumwp.com</a>
                                    </li>
                                </ul>
                                <a href="/" className="ftPinLink text-uppercase">
                                    <i className="fas fa-map-marker-alt icn" aria-hidden="true"><span
                                            className="sr-only">icon</span></i>
                                    Geting Here
                                </a>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-6">
                                <h3 className="text-white mb-4">Newsletter</h3> 
                                <div className="newsletterFormWrap">
                                    <p className="mb-5">Sign up today to know about special events and more!</p>
                                    <form action="#">
                                        <input type="email" className="form-control d-block w-100 mb-3"
                                            placeholder="Email Address"/>
                                        <input type="submit" className="btn btn-danger d-block w-100" value="Sign Up!"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside> 
                <footer id="pageFooter" className="bg-dark text-gray777 text-center pt-6 pb-3 pt-lg-11 pb-lg-9">
                    <div className="container"> 
                        <ul className="list-unstyled socialNetworks ftSocialNetworks d-flex flex-wrap justify-content-center mb-4">
                            <SMButton route="/" description="twitter" icon="fa-linkedin"></SMButton> 
                            <SMButton route="/" description="facebook" icon="fa-facebook-f"></SMButton> 
                            <SMButton route="/" description="instagram" icon="fa-instagram"></SMButton> 
                            <SMButton route="/" description="youtube" icon="fa-youtube"></SMButton> 
                            <SMButton route="/" description="wechat" icon="fa-weixin"></SMButton> 
                            <SMButton route="/" description="weibo" icon="fa-weibo"></SMButton>  
                        </ul>
                        <p className="mb-2"><a href="/">Jier Art</a> &copy; 2021. All Rights Reserved
                        </p> 
                        <ul className="list-unstyled ftTermLinks d-flex flex-wrap justify-content-center">
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li> 
                        </ul>
                    </div>
                </footer>
            </div>  
        ); 
    }
}

export default Footer;