import { useState, useEffect } from "react";
import { helpHttp } from '../utils/helpHttp';
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

export default function UserPage() {
	const [user, setUser] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	let api = helpHttp();
	let url = "http://localhost:5000/users";

	useEffect(() => {
		setLoading(true);
		setTimeout(() => (
			api.get(url).then(res => {
				if(!res.err) {
					setUser(res);
					setErrorMessage(null);
				}else {
					setUser(null);
					setErrorMessage(res);
				}
				setLoading(false);
			})
		), 3000);
	},[]);

	return (
		<main>
			<section className="hero is-fullheight">
				<div className="hero-body is-justify-content-center">
					{loading && <Loader />}
					{errorMessage && <ErrorMessage />}
					{user && (<h3>Pagina de Usuario</h3>)}
				</div>
			</section>
		</main>
	)
}