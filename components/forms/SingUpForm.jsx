import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const DataUserSingUpSchema = Yup.object().shape({
	userName: Yup.string()
		.required('Please enter a user name'),
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please enter a valid email'),
	password: Yup.string()
		.min(5, 'Password is too short - should be 8 chars minimum')
		.required('Please enter your password'),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default function SingUpForm() {
	const [stateForm, setStateForm] = useState(true);
	const [statusMessage, setStatusMessage] = useState({title: 'Congrats you already register!', message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst euismod justo dapibus volutpat, parturient pulvinar at imperdiet inceptos porttitor praesent vitae auctor leo.'});
	return (
		<div className='form'>
			{stateForm ? 
				<Formik
					initialValues={{userName: '', email: '', password: ''}}
					validationSchema={DataUserSingUpSchema}
					onSubmit={values => {
						console.log(values);
						setStateForm(false);
					}}
				>
					{({ errors, touched }) => (
						<Form>
							<div className='is-flex is-flex-direction-column mb-5'>
								<h1 className='has-text-centered mb-3'><strong>Sing Up</strong></h1>
								<div className='field'>
									<label className='label'>User Name</label>
									<div className='control'>
										<Field className="input" name="userName" type="userName" />
									</div>
									{errors.userName && touched.userName ? (<p className="help is-danger">{errors.userName}</p>) : null}
								</div>
								<div className='field'>
									<label className='label'>Email</label>
									<div className='control'>
										<Field className="input" name="email" type="email" />
									</div>
									{errors.email && touched.email ? (<p className="help is-danger">{errors.email}</p>) : null}
								</div>
								<div className='field'>
									<label className='label'>Password</label>
									<div className='control'>
										<Field className="input" name="password" />
									</div>
									{errors.password && touched.password ? (<p className="help is-danger">{errors.password}</p>) : null}
								</div>
								<div className='field'>
									<label className='label'>Password Confirmation</label>
									<div className='control'>
										<Field className="input" name="passwordConfirmation" />
									</div>
									{errors.passwordConfirmation && touched.passwordConfirmation ? (<p className="help is-danger">{errors.passwordConfirmation}</p>) : null}
								</div>
							</div>
							<div className='field submit-field m-0'>
								<div className='control is-flex'>
									<button className='button' type="submit">Sing Up</button>
								</div>
							</div>
						</Form>
					)}
				</Formik>
				:
				<div className='success-message'>
					<h2><strong>{statusMessage.title}</strong></h2>
					<p>{statusMessage.message}</p>
				</div>
			}
		</div>
	)
}