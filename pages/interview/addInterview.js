import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import { regexHtmlTag, convertStringToBoolean } from '../../components/functions'
import { getListCities } from '../../components/actions'
import FormQuestion from '../../components/fragments/question/questionFormNew'
import FormAddVideoInterview from '../../components/fragments/interview/interviewForm'
import Modal from '../../components/modals'

class AddQuestion extends React.Component {
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
			valueTitleVideo: "",
			valueFileVideo: "",
			valueFileCoverVideo: "",
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
			listCity: nextProps.listCity,
			navIsOpen: nextProps.navIsOpen
		})
	}

	handleCheckbox = (e) => {
		const target = e.target, value = target.value, name = target.name
		const checkboxChecked = !convertStringToBoolean(value)
		this.setState({ [name]: checkboxChecked })
	}

	handleChange = (e) => {
		console.log("handleChange")
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: regexHtmlTag(value) })
		if(related) this.setState({ [related]: regexHtmlTag(value) })
	}

	handleFileInputChange = (e) => {
		console.log("handleFileInputChange")
		const target = e.target, value = target.value, name = target.name, file = target.files[0]
		this.setState({ [name]: URL.createObjectURL(file)})
		console.dir(target)
		console.dir(value)
		console.dir(name)
		console.dir(URL.createObjectURL(file))
		console.log(typeof file)	
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

	handlePublishAddQuestion = (e) => {
		console.log("handlePublishAddQuestion")
		this.toggleModalsConfirmation("Publish")
	}

	handleSubmit = (e) => {

		console.log('%c 🍸 valueTitleVideo: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', this.state.valueTitleVideo);
		console.log('%c 🥦 valueFileVideo: ', 'font-size:20px;background-color: #B03734;color:#fff;', this.state.valueFileVideo);
		console.log('%c 🍸 valueFileCoverVideo: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', this.state.valueFileCoverVideo);

		this.toggleModalsConfirmation("Save")
	}
 
	render() {
		const { showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, 
			valueTitleVideo, valueFileVideo, valueFileCoverVideo
		} = this.state

		const showModalConfirmationSave = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationSave}
				toggleModal={(e) => this.toggleModalsConfirmation("Save")}
				classNameModal={this.props.className}
				titleModalHeader="Save Question Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleSubmit}
			>
				are you sure to save this video interview ?
			</Modal> 
		)

		const showModalConfirmationCancel = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationCancel}
				toggleModal={(e) => this.toggleModalsConfirmation("Cancel")}
				classNameModal={this.props.className}
				titleModalHeader="Cancel Question Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleCancelAddQuestion}
			>
				are you sure to cancel this video interview ?
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
					<FormAddVideoInterview 
						title="Add Video Interview"
						dataTitleVideo={valueTitleVideo}
						dataFileVideo={valueFileVideo}
						dataFileCoverVideo={valueFileCoverVideo}
						onHandleChange={this.handleChange} 
						onHandleFileInputChange={this.handleFileInputChange}
						onHandleCheckbox={this.handleCheckbox}
						onHandleSelectOption={this.handleSelectOption}
						onHandleSubmit={this.toggleModalsConfirmation}
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
export default connect(state => state, mapDispatchToProps)(AddQuestion)