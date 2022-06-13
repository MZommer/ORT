import logo_mono from './img/logo_mono.png';

export default function Exposition() {
    return (
        <footer className="mt-4 bg-dark w-100 py-4 flex-shrink-0 ">
            <div className="container py-4">
                <div className="row align-items-center">
                    <div className="col">
                        <img src={logo_mono} width="100" alt="Sanitarios Campana"/>
                    </div>
                    <div className="col">
                        <h6 className="text-white mb-3">
                            <i className="fa-solid fa-location-dot"></i>
                            Beiro 3300 - Villa Del Parque
                        </h6>
                        <h6 className="text-white mb-3">
                            <i className="fa-solid fa-envelope"></i>
                            Contacto@sanitarioscampana.com.ar
                        </h6>
                    </div>
                    <div className="col text-center mobile">
                        <h5><i className="fa-solid fa-mobile"></i> 4506-6015</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}