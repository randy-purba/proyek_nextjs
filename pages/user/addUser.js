import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import { regexHtmlTag, convertStringToBoolean } from '../../components/functions'
import { getListCities } from '../../components/actions'
import UserForm from '../../components/fragments/user/userForm'
import Modal from '../../components/modals'

class AddUser extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true }
		let stores = await store.getState()
		try {
			if(!stores.listCity) await store.dispatch(getListCities())
		} catch (e) {
			props.error = 'Unable to fetch AsyncData on server'
		}
		return props
	}

	constructor(props) {
		super(props)
		this.state = {
			title: props.companyName,
			subTitle: "Content Management System",
			showHeader: props.showHeader,
			headerHeight: props.headerHeight,
			navIsOpen: props.navIsOpen,
			navMaxWidth: props.showHeader ? props.navMaxWidth : "0px",
			navMinWidth: props.showHeader ? props.navMinWidth : "0px",
			modalConfirmationSave: false
		}
		this.toggleModalsConfirmation = this.toggleModalsConfirmation.bind(this)
	}

	handleClick(name) {
        this.setState(prevState => {
          const isOpen = prevState[`isOpen${name}`]
          return {
            [`isOpen${name}`]: !isOpen,
          }
        })
	}
	
	toggleModalsConfirmation (status) {
		console.log(status)
		this.setState(prevState => ({
			[`modalConfirmation${status}`]: !prevState[`modalConfirmation${status}`]
		}))
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen
		})
	}

	handleCheckbox = (e) => {
		const target = e.target, value = target.value, name = target.name
		const checkboxChecked = !convertStringToBoolean(value)
		this.setState({ [name]: checkboxChecked })
	}

	handleChange = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: regexHtmlTag(value) })
		if(related) this.setState({ [related]: regexHtmlTag(value) })
	}

	handleSelectOption = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: Number(value) })
		if(related) this.setState({ [related]: 0 })
	}

	handleCancelAddQuestion = (e) => {
		console.log("handleCancelAddQuestion")
		this.toggleModalsConfirmation("Cancel")
	}

	handleSubmit = (e) => {
		this.toggleModalsConfirmation("Save")
	}
 
	render() {
		const { showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth
		} = this.state

		const showModalConfirmationSave = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationSave}
				toggleModal={this.toggleModalsConfirmation}
				classNameModal={this.props.className}
				titleModalHeader="Save Question Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleSubmit}
			>
				are you sure to save this question ?
			</Modal> 
		)

		const showModalConfirmationCancel = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationCancel}
				toggleModal={this.toggleModalsConfirmation}
				classNameModal={this.props.className}
				titleModalHeader="Cancel Question Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleCancelAddQuestion}
			>
				are you sure to cancel this question ?
			</Modal> 
		)

		return (
			<div 
				role="main" 
				className="animate-all fast bg-light"
				style={{
					paddingTop: showHeader ? headerHeight : 0,
					paddingLeft: navMinWidth,
					overflowX: "hidden"
				}}>
				<Container 
					fluid 
					className="contentContainer px-4 pt-4 pb-2"
					style={{
						marginLeft: navIsOpen ? navMaxWidth-navMinWidth : 0,
						width: navIsOpen ? `calc(100% - ${navMaxWidth-navMinWidth}px)` : '100%'
					}}>
                        <UserForm 
                            onHandleChange={this.handleChange}			
                            onHandleSubmit={this.toggleModalsConfirmation}	
                            statusForm="add"																														
                        />
				</Container>
				{ showModalConfirmationSave }
				{ showModalConfirmationCancel }
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListCities: bindActionCreators(getListCities, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(AddUser)