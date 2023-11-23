import './copyright.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Copyright() {
	return (
		<>
			<div className="container copy">
				<section className="copyright">
					<span className="text-right">@Todos los derechos reservados a titulo</span>
					<div className="redes">
						<FaLinkedinIn />
						<FaFacebookF />
						<FaWhatsapp />
						<FaInstagram />
						<FaTwitter />
					</div>
				</section>
			</div>
			
		</>
	)
}