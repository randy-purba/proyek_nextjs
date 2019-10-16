import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'
import oauth from 'axios-oauth-client'
import { Container, Button } from 'reactstrap'
import { AvForm } from 'availity-reactstrap-validation'
import FormInputValidation from '../components/form/validateInputForm'
import LoaderCard from '../components/cards/LoaderCard'
import { regexHtmlTag } from '../components/functions'
import { userLogin } from '../components/actions'

class Home extends React.Component {
	static async getInitialProps() {
		let props = { showHeader: false, showFooter: false }
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
			email: '',
			password: '',
			licensed: props.cmsLicensed,
			title: props.companyName,
			subTitle: "Content Management System",
			showHeader: props.showHeader,
			onFetch: false
		}
	}

	handleChange = (e) => {
        const target = e.target, value = target.value, name = target.name;
        this.setState({ [name]: regexHtmlTag(value) })
    }

	handleSubmit = async () => {
		const { email, password, onFetch } = this.state
		if (!onFetch) {
			this.setState({onFetch: true})
			try {
				const getAuthorizationCode = oauth.client(axios.create(), {
					url: `${process.env.API_URL}/oauth/token`,
					grant_type: "password",
					client_id: process.env.API_CLIENT_ID,
					client_secret: process.env.API_CLIENT_SECRET,
					username: email,
  					password: password
				})
				const response = await getAuthorizationCode()
				userLogin(response, email)
			} catch (error) {
				this.setState({onFetch: false})
				console.error(
					"You have an error in your code or there are Network issues.",
					error
				)
				throw new Error(error)
			}
		}
	}

	render() {
		const { showHeader, headerHeight, licensed, title, subTitle, onFetch } = this.state
		return (
			<div role="main" style={{paddingTop: showHeader ? headerHeight : 0}}>
				<Container fluid className="loginBox absolute-center bg-light p-3" style={{maxWidth: "375px"}}>
					<div className="p-3">
						<div className="w-100 text-center">
							<h5 style={{padding: "6px 8px"}} className="text-center bg-danger d-inline-block rounded-circle mb-0">
								<span className="icon-lock font-22 text-white" />
							</h5>
						</div>
						<h4 className="text-center mb-0 mt-2 pt-1">{title}</h4>
						<p className="text-center font-12 mb-3">{subTitle}</p>
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
									required: { value: true, errorMessage: 'Alamat email tidak boleh kosong' },
									email: true
								}} 
							/>
							<FormInputValidation 
								withLabel={true}
								labelName="Kata Kunci"
								labelClassName="inputLabel position-absolute font-12 text-primary bg-light"
								formClassName="py-4 px-2 bg-light mb-0"
								formId="yourPassword" 
								formType="password" 
								formName="password" 
								formPlaceholder="Masukan kata kunci" 
								formErrorMessage="Kata kunci salah" 
								onChange={this.handleChange} 
								formValidate={{
									required: { value: true, errorMessage: 'Kata kunci tidak boleh kosong' }
								}} 
							/>
							{
								!onFetch ?
									<Button block color="primary" type="submit" className="mt-4 mb-3 text-uppercase font-12">Masuk</Button>
									:
									<Button block color="primary" className="mt-4 mb-3 text-uppercase font-12">
										<LoaderCard 
											className="position-relative d-block w-100 text-center"
											style={{height: "100%", padding: "9px 0"}}
											height="100%" 
											loaderColor="light" 
											loaderSize="sm" 
										/>
									</Button>
							}
							<Link href="/resetPassword" as="/reset">
								<a style={{width: "120px"}} className="m-auto mt-2 d-block text-center text-primary font-12">Lupa kata kunci?</a>
							</Link>
						</AvForm>
						<div className="text-center text-secondary mt-4">
							<p className="font-12 mb-0" dangerouslySetInnerHTML={{__html: licensed}} />
						</div>
					</div>
				</Container>
			</div>
		)
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		userLogin: bindActionCreators(userLogin, dispatch)
// 	}
// }

export default connect(state => state, {})(Home)