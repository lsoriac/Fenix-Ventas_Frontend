import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        return (
            <footer style={{ backgroundColor: "rgb(0,0,0", color: "rgb(255,255,255)", fontSize: "14px" }}>
                <div className="container ">
                    <div className="row ">
                        <div className="col ">
                            <h4>CONTACTOS</h4>
                            <p></p>
                            <p><span><strong> Matriz Centro Tecnológico Latacunga</strong></span></p>
                            <p><span>PBX(03) 3730500 – +593998514801</span></p>
                            <p><span> <em>Av. Unidad Nacional y Gabriela Mistral. Edif. Fenix Corp.</em> </span></p>
                            <p></p>

                            <p><span><strong> Quito</strong></span></p>
                            <p><span>PBX(02) 6040226 – +593 998514801</span></p>
                            <p><span> <em>Pinta 236 y Rábida. Edif. La PintaOf. 502</em> </span></p>
                            <p></p>

                            <p><span><strong> Santo Domingo</strong></span></p>
                            <p><span>PBX(02) 2711554 – +593 998433286</span></p>
                            <p><span> <em>Av. Quito y Satélite Urb. El Circulo</em> </span></p>
                            <p></p>

                        </div>
                        <div className="col ">
                            <h4>CONTACTOS</h4>
                            <p></p>
                            <p><span><strong> Cuenca</strong></span></p>
                            <p><span>+593 969882921 - +593 969889936</span></p>
                            <p><span> <em> Av. Roberto Crespo y Av. 27 de febrero.</em> </span></p>

                            <p></p>
                            <p><span><strong>Guayaquil</strong></span></p>
                            <p><span>6039684 +59342561524</span></p>
                            <p><span> <em>Av. 9 de Octubre y Gral. Cordova. Edif. MyU sexto piso Oficina 5</em> </span></p>
                        </div>
                        <div className="col ">
                            <h4><span>UBÍCANOS</span></h4>
                            <iframe title="place" src="https://www.google.com/maps/embed?pb=!4v1616519774043!6m8!1m7!1saZpPKsZqTvpOqqJT_54mGQ!2m2!1d-0.9463604566493007!2d-78.61087425537683!3f229.87!4f26.680000000000007!5f1.4009476500262918 " width="100%" height="400px
                        " style={{ border: "0px" }} ></iframe>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
