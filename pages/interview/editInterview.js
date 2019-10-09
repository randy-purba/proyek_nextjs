import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import { regexHtmlTag, convertStringToBoolean } from '../../components/functions'
import { getDetailInterviewVideo } from '../../components/actions'
import FormQuestion from '../../components/fragments/question/questionFormNew'
import FormAddVideoInterview from '../../components/fragments/interview/interviewForm'
import Modal from '../../components/modals'

class EditQuestion extends React.Component {
	static async getInitialProps({ store, req }) {
		let props = { showHeader: true, showFooter: true, idInterview: req.params.id }
		let stores = await store.getState()
		try {
            if(!stores.detailInterviewVideo) await store.dispatch(getDetailInterviewVideo(props.idInterview))
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
			valueTitleVideo: props.detailInterviewVideo.title,
			valueFileVideo: props.detailInterviewVideo.video_url,
			valueFileCoverVideo: props.detailInterviewVideo.cover_video,
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
			detailInterviewVideo: nextProps.detailInterviewVideo,
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
		this.toggleModalsConfirmation("Save")
	}
 
	render() {
		const { showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, 
			valueTitleVideo, valueFileVideo, valueFileCoverVideo
		} = this.state

        console.dir(this.state.detailInterviewVideo)

        console.log(this.state.idInterview)

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
				{ showModalConfirmationPublish }
				{ showModalConfirmationCancel }
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getDetailInterviewVideo: bindActionCreators(getDetailInterviewVideo, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(EditQuestion)