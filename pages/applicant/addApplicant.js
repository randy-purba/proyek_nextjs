import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import { regexHtmlTag, convertStringToBoolean } from '../../components/functions'
import { getListCities } from '../../components/actions'
import FormQuestion from '../../components/fragments/question/questionFormNew'
import FormAddApplicant from '../../components/fragments/user/userApplicantForm'
import Modal from '../../components/modals'

class AddApplicant extends React.Component {
	static async getInitialProps({ store, req }) {
		let props = { showHeader: true, showFooter: true, idInterview: req.params.id }
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
			idInterview: props.idInterview,
			navIsOpen: props.navIsOpen,
			navMaxWidth: props.showHeader ? props.navMaxWidth : "0px",
            navMinWidth: props.showHeader ? props.navMinWidth : "0px",
            dataName:"",
            dataPhoneNumber:"",
            dataCheckboxUserMode:[],
			listCity: props.listCity,
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
		this.setState(prevState => ({
			[`modalConfirmation${status}`]: !prevState[`modalConfirmation${status}`]
		}))
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			listCity: nextProps.listCity,
			navIsOpen: nextProps.navIsOpen
		})
	}

	handleCheckbox = (e) => {
        const target = e.target, value = target.value, name = target.name
        console.log(value + " / " + typeof value)
        console.log(name + " / " + typeof name)
        let arrayUserMode = this.state.dataCheckboxUserMode
        console.log(arrayUserMode)
        console.log(arrayUserMode.indexOf(value))
        if(arrayUserMode.indexOf(value)<0) {
            arrayUserMode.push(value)
        } else {
            arrayUserMode.splice(arrayUserMode.indexOf(value), 1);
        }
        console.dir(arrayUserMode)
		this.setState({ [name]: arrayUserMode })
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
		this.toggleModalsConfirmation("Cancel")
		this.redirectToListInterview()
	}

	handlePublishAddQuestion = (e) => {
		this.toggleModalsConfirmation("Publish")
	}

	redirectToListInterview () {
		Router.push("/list-interview/")
	}

	handleSubmit = (e) => {
		this.toggleModalsConfirmation("Save")
	}
 
	render() {
        const { showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listCity,
            dataName, dataPhoneNumber, dataCheckboxUserMode,
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

		const showModalConfirmationPublish = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationPublish}
				toggleModal={this.toggleModalsConfirmation}
				classNameModal={this.props.className}
				titleModalHeader="Publish Question Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handlePublishAddQuestion}
			>
				are you sure to publish this question ?
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
                    <FormAddApplicant 
                        dataName={dataName} 
                        dataPhoneNumber={dataPhoneNumber}
                        dataCheckboxUserMode={dataCheckboxUserMode}
                        onHandleChange={this.handleChange}	
                        onHandleCheckbox={this.handleCheckbox}
                        onHandleSubmit={this.toggleModalsConfirmationInsert}
                        statusForm="add"																														
                    />
				</Container>
				{ showModalConfirmationSave }
				{ showModalConfirmationPublish }
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
export default connect(state => state, mapDispatchToProps)(AddApplicant)