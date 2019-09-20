import React from 'react'
import Link from 'next/link'
import { Container, Row, Col, Button } from 'reactstrap'
import { AvForm } from 'availity-reactstrap-validation'
import FormInputValidation from '../components/form/validateInputForm'
import LoaderCard from '../components/cards/LoaderCard'

export default class ResetPassword extends React.Component {
	static async getInitialProps() {
		let props = { 
			showHeader: false, 
			showFooter: false
		}
		try {
			// props.withHeader = false
		} catch (e) {
			props.error = 'Unable to fetch AsyncData on server'
		}
		return props
	}

	constructor(props) {
		super(props)
		this.state = {
			licensed: props.cmsLicensed,
			title: "Lupa Kata Kunci?",
			showHeader: props.showHeader,
			isReseted: false,
			errorMessage: "Alamat email tidak terdaftar",
			succeMessage: "Kata Kunci Baru Akan Dikirimkan Ke Email Anda"
		}
	}
	
	render() {
		const { showHeader, headerHeight, licensed, title, errorMessage, isReseted } = this.state
		return (
			<div role="main" style={{paddingTop: showHeader ? headerHeight : 0}}>
				<Container fluid className="loginBox absolute-center bg-light p-3" style={{maxWidth: "375px"}}>
					<div className="w-100 text-center">
						<h5 style={{padding: "6px 8px"}} className="text-center bg-danger d-inline-block rounded-circle mb-0">
							<span className="icon-lock font-22 text-white" />
						</h5>
					</div>
					<h5 className="text-center mb-3 mt-2 pt-1">{title}</h5>
					<AvForm onValidSubmit={this.handleSubmit} method="post" autoComplete="off" >
						<FormInputValidation 
							withLabel={true}
							labelName="Alamat Email"
							labelClassName="inputLabel position-absolute font-12 text-primary bg-light"
							formClassName="py-4 px-2 bg-light mb-0"
							formId="yourEmail" 
							formType="email" 
							formName="email" 
							formPlaceholder="Masukan alamat email" 
							formErrorMessage="Alamat email salah" 
							onChange={this.handleChange} 
							formValidate={{
								required: { value: true, errorMessage: errorMessage },
								email: true
							}} 
						/>
						<Row>
							<Col xs="6" className="pr-1">
								{
									!isReseted ?
										<Button block color="danger" type="submit" className="my-0 text-uppercase font-12">Reset</Button>
										:
										<Button block color="primary" className="mt-4 mb-0 text-uppercase font-12">
											<LoaderCard 
												className="position-relative d-block w-100 text-center"
												style={{
													height: "100%",
													padding: "9px 0"
												}}
												height="100%" 
												loaderColor="light" 
												loaderSize="sm" 
											/>
										</Button>
								}
							</Col>
							<Col xs="6" className="pl-1">
								<Link href="/">
									<a className="btn btn-primary btn-block my-0 text-uppercase font-12">Batal</a>
								</Link>
							</Col>
						</Row>
					</AvForm>
					<div className="p-3">
						<div className="text-center text-secondary mt-4">
							<p className="font-12 mb-0" dangerouslySetInnerHTML={{__html: licensed}} />
						</div>
					</div>
				</Container>
			</div>
		)
	}
}