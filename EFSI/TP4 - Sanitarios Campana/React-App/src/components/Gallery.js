import Frame from './Frame.js'
export default function Gallery() {
    return (
        <div className="container">
            <h5><dt>Productos destacados</dt></h5>
            <div className="d-flex justify-content-between flex-wrap">
                <Frame/>
                <Frame/>
                <Frame/>
                <Frame/>
                <Frame/>
                <Frame/>
            </div>
        </div>
    )
}