import './cta.css';
import cookAsado from './resource/cook-asado-2.jpg';

export default function Service() {
	return (
		<>
			<div className="container">
				<section className="get-service">
					<span className="title">
						El mejor servicio de asado <span className="country">Argentino</span> a un pinchazo
					</span>
					<div className="image">
						<img src={cookAsado} alt="Cocinando un asado"/>
					</div>
					<button className="but-get">Solicitar</button>
					<p className="off">Ahora aprovecha un 40% de descuento</p>
				</section>	
			</div>		
		</>
	)
}