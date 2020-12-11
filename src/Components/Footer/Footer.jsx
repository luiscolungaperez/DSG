import React, { useState }  from 'react';
import './style.css'
import GDSLogo from 'public/image/DSGLOGO.png'

const Footer = () => {
return(
    <section>
    <footer class="site-footer">
    <div class="container">
        <div class="row">
        <div class="col-sm-12 col-md-6">
            <img style={{ zIndex: '1', width: '10em', position: 'relative', top: '10%', left: '3.5%' }} src={GDSLogo}/>
            <div style={{ marginTop: '2em'}}>
                <p>info@dsg-solucion.com</p>
                <p>+10 873 672 6782</p>
            </div>
        </div>

        <div class="col-xs-6 col-md-3">
            <h6>Servicios</h6>
            <ul class="footer-links">
            <li><a href="#">•	Servicios Profesionales</a></li>
            <li><a href="#">•	Seguridad / Infraestructura</a></li>
            <li><a href="#">•	Transformación Digital</a></li>
            <li><a href="#">•	Desarrollo de Aplicaciones</a></li>
            <li><a href="#">•	Servicios</a></li>
            </ul>
        </div>

        <div class="col-xs-6 col-md-3">
            <h6>Mas sobre nosotros</h6>
            <ul class="footer-links">
            <li><a href="http://scanfcode.com/about/">•	Quienes Somos</a></li>
            <li><a href="http://scanfcode.com/contact/">•	Blog</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">•	Contacto</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">•	Bolsa de trabajo</a></li>
            </ul>
        </div>

        </div>
        <hr/>
    </div>
    <div class="container">
        <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 Todos los derechos reservados para 
        <a href="#"> DGS Solución</a>.
            </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
        </div>
            </div>
        </div>
    </footer>
    </section>
);
}

export default Footer;
