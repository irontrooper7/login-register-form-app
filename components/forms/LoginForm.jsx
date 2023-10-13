import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import * as Yup from 'yup';

const DataUserLoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Please enter your email'),
	password: Yup.string()
		.required('Please enter your password'),
});

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(true);
	return (
		<div className='form'>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={DataUserLoginSchema}
				onSubmit={values => {
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className='is-flex is-flex-direction-column mb-5'>
							<h1 className='has-text-centered mb-3'><strong>Login</strong></h1>
							<div className='field'>
								<label className='label'>Email</label>
								<div className='control'>
									<Field className='input' name='email' type='email' />
								</div>
								{errors.email && touched.email ? (<p className='help is-danger'>{errors.email}</p>) : null}
							</div>
							<div className='field'>
								<label className='label'>Password</label>
								<div className='control'>
									<Field className='input' name='password' type={showPassword === true ? 'password' : 'text'} />
									{showPassword === true ?
										<span style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} className="icon" onClick={() => setShowPassword(!showPassword)}>
											<AiOutlineEyeInvisible />
										</span> :
										<span style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} className="icon" onClick={() => setShowPassword(!showPassword)}>
											<AiOutlineEye />
										</span>
									}
								</div>
								{errors.password && touched.password ? (<p className='help is-danger'>{errors.password}</p>) : null}
							</div>
						</div>
						<div className='field submit-field m-0'>
							<div className='control is-flex'>
								<button className='button' type='submit'>Login</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}