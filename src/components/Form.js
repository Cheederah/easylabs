import React from 'react';

const Form = ({ handleInput, handleSubmit, email, message, name }) => {
	return (
		<div className="page-content">
			<div
				className="section bg-norepeat bg-bottom bg-left bg-md-none bg-fixed section-bottom-padding-half "
				style={{ backgroundImage: 'url(images/bg-bottom-left2.png)' }}
			>
				<div className="banner-appointment-form">
					<div className="container">
						<div className="row no-gutters">
							<div className="col-sm-5 col-lg-5 order-2 order-sm-2 mt-3 mt-md-0 text-center">
								<img
									src="images/content/banner-appointment.png"
									alt=""
									className="banner-appointment-form-image"
								/>
							</div>
							<div className="col-sm-7 col-lg-7 order-1 order-sm-1 d-flex">
								<div className="pt-2 pt-lg-6 px-lg-3 text-center">
									<div className="title-wrap-alt">
										<h2
											className="double-title double-title--vcenter double-title--center"
											data-title="Contact Us"
										>
											<span>
												Contact <span className="theme-color">Us</span>
											</span>
										</h2>
									</div>
									<p>
										We believe in providing the best possible care to all our existing patients and
										welcome new patients to sample.
									</p>
									<div className="contact-form" id="contactForm" noValidate="novalidate">
										<div className="successform">
											<p>Your message was sent successfully!</p>
										</div>
										<div className="errorform">
											<p>Something went wrong, try refreshing and submitting the form again.</p>
										</div>
										<div>
											<input
                                            onChange={handleInput('name')}
												type="text"
												className="form-control"
												name="name"
												placeholder="Your name*"
											/>
										</div>

										<div className="mt-15">
											<textarea
                                            onChange={handleInput('message')}
												className="form-control"
												name="message"
												placeholder="Message"
												
											/>
										</div>
										<div className="mt-2 mt-lg-4">
											<button type="submit" className="btn">
												<i className="icon-right-arrow" />
												<a
													href={`mailto:${email}?subject=${name}&body=${message}`}
													target="_blank"
													rel="noopener noreferrer"
												>
													Send Email
												</a>
												
												<i className="icon-right-arrow" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
