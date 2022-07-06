import React from 'react'
import PumaLogo from '../img/puma-logo-png-26.png'
import PumaTrac from '../img/PumaTrac.png'
function Footer() {
    return (
        <footer className='footerContainer'>
            <section className="footerContainer-box footerContainer-box__top">
                <img className='footerLogo' src={PumaLogo} alt="pumaLogo" />
                <div className='inbox-container'>
                    <span>Inscribete Y Obtén 15% OFF En Tu Primera Compra</span>
                    <div className='emailInput-container'>
                    <input placeholder='CORREO ELECTRONICO' type="email" name="emailInbox" id="email" />
                    <button>
                    <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                    </div>
                </div>
            </section>

            <section className="footerContainer-box footerContainer-box__mid">
                <div className='footer-mid_Column firstColumn'>
                    <h4>Ayuda</h4>
                    <hr />
                    <ul>
                        <li><a href="/">Contactanos</a></li>
                        <li><a href="/">Segui tu Pedido</a></li>
                        <li><a href="/">Preguntas Frecuentes</a></li>
                        <li><a href="/">Metodos de Pago</a></li>
                        <li><a href="/">Cambios y Devoluciones</a></li>
                        <li><a href="/">Politica de Privacidad</a></li>
                        <li><a href="/">Tiendas</a></li>
                    </ul>
                </div>
                <div className='footer-mid_Column secondColumn'>
                    <h4>Acerca de PUMA</h4>
                    <hr />
                    <ul>
                        <li><a href="/">Compania</a></li>
                        <li><a href="/">Noticias corporativas</a></li>
                        <li><a href="/">Invercionistas</a></li>
                        <li><a href="/">Sustentabilidad</a></li>
                        <li><a href="/">Empleos</a></li>
                    </ul>
                </div>
                <div className='footer-mid_Column thirdColumn'>
                    <div>
                        <hr />
                        <ul>
                            <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                            <a href="/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="/"><i className="fa-brands fa-twitter"></i></a>
                            <a href="/"><i className="fa-brands fa-youtube"></i></a>
                        </ul>
                    </div>
                    <div className='pumaTrac'>
                        <hr />
                        <ul>
                            <a href="/"><img src={PumaTrac} alt="pumaTrac"/></a>
                            <a href="/">Entrená con los más veloces</a>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="footerContainer-box footerContainer-box__bot">
                <hr />
                <div>
                    <select name="country" id="country">
                        <option value="ARG"> Argentina</option>
                    </select>
                    <span>© PUMA Todos los derechos reservados, 2022</span>
                </div>
            </section>
        </footer>
    )
}

export default Footer