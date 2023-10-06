import { useRef, useState } from 'react';
import { gsap } from "gsap";
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/SingUpForm';

export default function CardForm() {
	const coverRef = useRef();
	const [currentForm, setCurrentForm] = useState(true);

	function changeToSingUp() {
		gsap.timeline().to(coverRef.current, 0.2, {
			width: '100%', left: 0, clearProps: 'right'
		}).to(coverRef.current, 0.2, {
			width: '50%'
		})
		setCurrentForm(false);
	}

	function changeToLogIn() {
		gsap.timeline().to(coverRef.current, 0.2, {
			width: '100%', right: 0, clearProps: 'left'
		}).to(coverRef.current, 0.2, {
			width: '50%'
		})
		setCurrentForm(true);
	}

	return (
		<div className='card-forms'>
			<div className='columns is-gapless m-0'>
				<div className='column is-6'>
					{currentForm === true ?
						<>
							<LoginForm />
							<div className='has-text-centered my-5'>
								<p>Or</p>
								<p className='action-btn' onClick={() => changeToSingUp()}><strong>Sing up</strong></p>
							</div>
						</> : ''
					}
				</div>
				<div className='column is-6'>
					{currentForm === false ?
						<>
							<RegisterForm />
							<div className='has-text-centered my-4'>
								<p>Or</p>
								<p className='action-btn' onClick={() => changeToLogIn()}><strong>Login</strong></p>
							</div>
						</> : ''
					}
				</div>
			</div>
			<div className='image cover-card' ref={coverRef}>
				<img src="./cover.jpg" />
			</div>
		</div>
	)
}