import './features.css';
import Puntos from './resource/puntos-de-carne.jpg';
import Cortes from './resource/cortes.jpg';
import PreparacionImg from './resource/preparacion-de-carne.jpg';

export default function Features() {
	return(
		<>
			<div className="container">
				<section className="features">
					<span className="title-features">¿Por qué elegir <span>título</span>?</span>

					<div className="section one">
						<div className="content-text">
							<span className="title-section-features">Carne al punto que tu prefieras</span>
							<p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Maxime quibusdam recusandae 
							fugiat explicabo quis commodi nihil velit, ex mollitia, placeat omnis sed labore odit veniam 
							laudantium voluptatum repellat facere aliquid.</p>	
						</div>
						<div className="content-image">
							<img src={Puntos} alt="Diferentes puntos de la carne"/>
						</div>
					</div>

					<div className="section two">
						<div className="content-text">
							<span className="title-section-features">Los mejores cortes</span>
							<p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Maxime quibusdam recusandae 
							fugiat explicabo quis commodi nihil velit, ex mollitia, placeat omnis sed labore odit veniam 
							laudantium voluptatum repellat facere aliquid.</p>
						</div>	
						<div className="content-image">
							<img src={Cortes} alt="Diferentes cortes de carne"/>
						</div>
					</div
					>
					<div className="section three">
						<div className="content-text">
							<span className="title-section-features">La mejor preparación</span>
							<p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Maxime quibusdam recusandae 
							fugiat explicabo quis commodi nihil velit, ex mollitia, placeat omnis sed labore odit veniam 
							laudantium voluptatum repellat facere aliquid.</p>
						</div>
						<div className="content-image">
							<img src={PreparacionImg} alt="Preparación de la carne"/>
						</div>
					</div>
					
				</section>
			</div>
		</>
	)
}