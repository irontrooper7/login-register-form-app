import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const DataUserSingUpSchema = Yup.object().shape({
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
	return (
		<div className='form'>
			<Formik
				initialValues={{email: '', password: '', passwordConfirmation: ''}}
				validationSchema={DataUserSingUpSchema}
				onSubmit={values => {
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className='is-flex is-flex-direction-column mb-5'>
							<h1 className='has-text-centered mb-3'><strong>Sing Up</strong></h1>
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
		</div>
	)
}