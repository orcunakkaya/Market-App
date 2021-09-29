import React from 'react'
import "./style.css"
function Footer() {

    return (
        <div className="footer">
            <div className="footer-content" >
                <div className="links" >
                    <ul>
                        <li><a href="#top">About</a></li>
                        <li><a href="#top">Services</a></li>
                        <li><a href="#top">Contact</a></li>
                        <li><a href="#top">Home</a></li>
                    </ul>
                </div>
                <div className="socialmedia-icons">
                    <ul>
                        <li><a href="#top" style={{cursor:"pointer", color:"#fff"}}><i className="icon ion-social-instagram"></i></a></li>
                        <li><a href="#top" style={{cursor:"pointer", color:"#fff"}}><i className="icon ion-social-facebook" /></a></li>
                        <li><a href="#top" style={{cursor:"pointer", color:"#fff"}}><i className="icon ion-social-twitter" /></a></li>
                        <li><a href="#top" style={{cursor:"pointer", color:"#fff"}}><i className="icon ion-social-youtube" /></a></li>
                        <li><a href="#top" style={{cursor:"pointer", color:"#fff"}}><i className="icon ion-social-linkedin" /></a></li>
                        <li><a href="#top" style={{cursor:"pointer", color:"#fff"}}><i className="icon ion-social-github" /></a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <span><a href="https://github.com/orcunakkaya" target="_blank" rel="noreferrer" >© orcunakkaya</a></span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Footer);