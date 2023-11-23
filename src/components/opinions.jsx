import './opinions.css';
import perfilUno from './resource/perfil-1.jpg';
import perfilDos from './resource/perfil-2.jpg';
import perfilTres from './resource/perfil-3.jpg';
import { FaStar } from "react-icons/fa6";

export default function Opinions() {
	return (
		<>
			<div className="container">
				<section className="opinions">
					<span className="title-opinions">Opiniones sobre titulo</span>
					<div className="carts-opinions">
						<div className="cart one">
							<div className="dates">
								<span className="name">Lorem, ipsum</span>
								<div className="img-perfil">
									<img src={perfilUno} alt=""/>
								</div>
							</div>						
							<p className="text-opinion">
								Lorem ipsum dolor, sit amet, consectetur adipisicing elit. 
							</p>
							<div className="calification-opinion">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
						<div className="cart two">
							<div className="dates">
								<span className="name">Lorem, ipsum</span>
								<div className="img-perfil">
									<img src={perfilDos} alt=""/>
								</div>
							</div>						
							<p className="text-opinion">
								Maxime quibusdam recusandae fugiat explicabo quis commodi nihil velit.
							</p>
							<div className="calification-opinion">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
						<div className="cart three">
							<div className="dates">
								<span className="name">Lorem, ipsum</span>	
								<div className="img-perfil">
									<img src={perfilTres} alt=""/>
								</div>
							</div>									
							<p className="text-opinion">
								Ex mollitia, placeat omnis sed labore odit veniam laudantium voluptatum aliquid.
							</p>
							<div className="calification-opinion">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}