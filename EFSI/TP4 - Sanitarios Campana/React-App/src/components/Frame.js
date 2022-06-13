import product_generic from './img/product_generic.png'
export default function Frame() {
    return (
        <div className="product text-center">
            <img src={product_generic}/>
            <dt>Lavatorio</dt>
            <p>Mueble colgante para lavatorio</p>
        </div>
    )
}