import ferrum from './img/ferrum.png'
import delta from './img/delta.png'
import tigre_banner from './img/tigre_banner.png'
import ips_banner from './img/ips_banner.png'
export default function Sponsors() {
    return (
        <div class="container">
            <h5><dt>Marcas con las que trabajamos</dt></h5>
            <div class="d-flex justify-content-between">
                <img src={ferrum} class="brand-banner img-fluid" alt="ferrum"/>
                <img src={delta} class="brand-banner img-fluid" alt="delta"/>
                <img src={tigre_banner} class="brand-banner img-fluid" alt="tigre"/>
                <img src={ips_banner} class="brand-banner img-fluid" alt="ips"/>
            </div>
        </div>
    )
}