import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import TableBox from '../../components/tables'
import Pagination from '../../components/cards/PaginationCard'
import { getListInterviewVideo, getDetailInterviewVideo, getListQuestion } from '../../components/actions'
import { timestampToDateTime, numberToCurrency } from '../../components/functions'
import Modal from '../../components/modals'
import DetailInterview from '../../components/fragments/interview/detailInterview'

class ListInterview extends React.Component {

	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, interviewVideoPage: 0, interviewVideoMaxLen: 10 }
		let stores = await store.getState()
		try {

			if(!stores.listInterviewVideo) await store.dispatch(getListInterviewVideo(props.interviewVideoPage, props.interviewVideoMaxLen))

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
			interviewVideoPage: props.interviewVideoPage,
			interviewVideoFetchLen: props.interviewVideoMaxLen,
			interviewVideoDateFrom: undefined,
			interviewVideoDateTo: undefined,
			interviewVideoSortBy: "created_date",
			interviewVideoSearchKey: "",
			listInterviewVideo: props.listInterviewVideo,
			totalListInterviewVideo:  props.totalListInterviewVideo,
			detailInterviewVideo: props.detailInterviewVideo,
			modalDetailInterview: false,
			//List Question on Detail Video Interview
			questionPage: 0,
			questionFetchLen:2,
			listQuestion: props.listQuestion,
			totalListQuestion: props.totalListQuestion
		}

		this.toggleModalsDetailQuestion = this.toggleModalsDetailQuestion.bind(this)
		
	}

	toggleModalsConfirmation = (status) => {
		this.setState(prevState => ({
			[`modalVideoInterviewConfirmation${status}`]: !prevState[`modalVideoInterviewConfirmation${status}`]
		}))
	}

	
	toggleModalsDetailQuestion = (id) => {
		this.onInitListQuestion()
		this.props.getDetailInterviewVideo(id)
		this.setState(prevState => ({
			modalDetailInterview: !prevState.modalDetailInterview,
		}))
	}

	toggleDeleteVideoInterview(id){
		this.setState({
			idVideoInterviewDeleted: id
		})
		this.toggleModalsConfirmation("Delete")
	}

	toogleChangeStatusVideoInterview(id, status){
		this.setState({
			idVideoInterviewChangedStatus: id,
			statusVideoInterviewChanged: status
		})
		this.toggleModalsConfirmation("ChangeStatus")
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen,
			listInterviewVideo: nextProps.listInterviewVideo,
			detailInterviewVideo:nextProps.detailInterviewVideo,
			totalListInterviewVideo: nextProps.totalListInterviewVideo,
			listQuestion: nextProps.listQuestion,
			totalListQuestion: nextProps.totalListQuestion
		})
	}

	onInitListQuestion = () => {
		const { questionPage, questionFetchLen } = this.state
		this.props.getListQuestion(questionPage, questionFetchLen)
	}

	onPaginationClickListQuestion = (page) => {
		const { questionFetchLen } = this.state
		this.props.getListQuestion(page,questionFetchLen)
		this.setState({questionPage: page})
	}

	onPaginationClick = (page) => {
		const { interviewVideoFetchLen, interviewVideoDateFrom, interviewVideoDateTo, interviewVideoSortBy, interviewVideoSearchKey } = this.state
		this.props.getListInterviewVideo(page, interviewVideoFetchLen, interviewVideoDateFrom, interviewVideoDateTo, interviewVideoSortBy, interviewVideoSearchKey)
		this.setState({interviewVideoPage: page})
	}


	onFilterInit = (dateFrom, dateTo) => {
		const { interviewVideoFetchLen, interviewVideoSortBy, interviewVideoSearchKey } = this.state
		this.props.getListInterviewVideo(0, interviewVideoFetchLen, dateFrom, dateTo, interviewVideoSortBy, interviewVideoSearchKey)
		this.setState({interviewVideoPage: 0, interviewVideoDateFrom: dateFrom, interviewVideoDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { interviewVideoFetchLen, interviewVideoDateFrom, interviewVideoDateTo, interviewVideoSearchKey } = this.state
		this.props.getListInterviewVideo(0, interviewVideoFetchLen, interviewVideoDateFrom, interviewVideoDateTo, value, interviewVideoSearchKey)
		this.setState({interviewVideoPage: 0, interviewVideoSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { interviewVideoPage, interviewVideoFetchLen, interviewVideoDateFrom, interviewVideoDateTo, interviewVideoSortBy } = this.state
		this.props.getListInterviewVideo(interviewVideoPage, interviewVideoFetchLen, interviewVideoDateFrom, interviewVideoDateTo, interviewVideoSortBy, keywords)
		this.setState({interviewVideoSearchKey: keywords})
	}

	redirectToEditInterviewPage(id){
		console.log("redirectToEditInterviewPage" + id)
		Router.push("/edit-interview/"+ id)
	}

	redirectToAddQuestionOfInterviewPage(id) {
		console.log("redirectToAddQuestionOfInterviewPage : " + id)
		Router.push("/add-question-interview/"+ id)
	}

	handleDelete = () => {
		console.dir(this.state.idVideoInterviewDeleted)
		console.log("handleDelete : ")
		this.toggleModalsConfirmation("Delete")
	}

	handleChangeStatus = () => {
		console.dir(this.state.idVideoInterviewChangedStatus)
		console.log(this.state.statusVideoInterviewChanged)
		this.toggleModalsConfirmation("ChangeStatus")
	}

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listInterviewVideo, detailInterviewVideo,
			interviewVideoPage, interviewVideoFetchLen, interviewVideoSortBy, totalListInterviewVideo, listQuestion,
			questionPage, questionFetchLen, totalListQuestion
		} = this.state
		
		console.dir(listInterviewVideo)


		const modalDetailInterview = (
			<Modal 
				modalIsOpen={this.state.modalDetailInterview}
				toggleModal={this.toggleModalsDetailQuestion}
				classNameModal={this.props.className}
				titleModalHeader="Detail Question"
				sizeModal="lg"
				centeredModal={true}
			>
				<DetailInterview
					dataInterview={detailInterviewVideo}
					dataQuestion={listQuestion}
					questionPage={questionPage}
					questionFetchLen={questionFetchLen}
					totalListQuestion={totalListQuestion}
					onPaginationClick={this.onPaginationClickListQuestion}
					toggleToEditInterviewPage={this.redirectToEditInterviewPage}
					toggleToAddQuestionPage={this.redirectToAddQuestionOfInterviewPage}
				/>
			</Modal> 
		)


		const showModalConfirmationDelete = (
			<Modal 
				modalIsOpen={this.state.modalVideoInterviewConfirmationDelete}
				toggleModal={(e) => this.toggleModalsConfirmation("Delete")}
				classNameModal={this.props.className}
				titleModalHeader="Delete Video Interview Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleDelete}
			>
				are you sure to delete this video interview ?
			</Modal> 
		)

		const showModalConfirmationChangeStatus = (
			<Modal 
				modalIsOpen={this.state.modalVideoInterviewConfirmationChangeStatus}
				toggleModal={(e) => this.toggleModalsConfirmation("ChangeStatus")}
				classNameModal={this.props.className}
				titleModalHeader={this.state.statusVideoInterviewChanged == 4 ? "Publish Video Interview Confirmation" : "Unpublish Video Interview Confirmation" }
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleChangeStatus}
			>
				are you sure to {this.state.statusVideoInterviewChanged == 4 ? "publish" : "unpublish" } video interview ?
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
				}}
			>
				<Container 
					fluid 
					className="contentContainer px-4 pt-4 pb-2"
					style={{
						marginLeft: navIsOpen ? navMaxWidth-navMinWidth : 0,
						width: navIsOpen ? `calc(100% - ${navMaxWidth-navMinWidth}px)` : '100%'
					}}
				>
					<Row>
						<Col xs="12">
							<TableBox 
								title="List Interview - Video Question" 
								isResponsive={true} 
								tHead={["#", "Title", "Thumbnail", "Total Question","Created By", "Created Date", "Action"]}
								sortItems={[
									{ id: "title", name: "Title"}, 
									{ id: "total_question", name: "Total Question"}, 
									{ id: "created_by", name: "Total Question"}, 
									{ id: "created_date", name: "Created Date" }
								]}
								onSortClick={this.onSortInit}
								sortValue={interviewVideoSortBy}
								deepSearch={true}
								maxRangeDateFilter={5}
								exportToFile={true}
								exportData={listInterviewVideo}
								exportFileName={`List_Video_Interview_${(new Date()).getTime()}`}
								onFilterClick={this.onFilterInit}
								onKeySearch={this.onSearchKeyword}
								noResult={totalListInterviewVideo === 0}
								pagination={
									<Pagination 
										ariaLabel="Page navigation"
										size="sm"
										totalContent={totalListInterviewVideo}
										currentPage={interviewVideoPage}
										contentMaxLength={interviewVideoFetchLen}
										onClick={this.onPaginationClick}
									/>
								}
								tHead={["#", "Title", "Cover Video", "Total Question", "Created By", "Created  Date", "Action"]}
							>
								{
									listInterviewVideo.map((data, key) => (
										
										<tr key={key}>
											<th scope="row">
												{(key + 1) +  (interviewVideoPage * interviewVideoFetchLen)}
											</th>
											<td>{data.title}</td>
											<td><img width="200px" height="100px" src={data.cover_video}/></td>
											<td>{data.total_question}</td>
											<td>{data.created_by.username}</td>
											<td>
												{data.created_date ? timestampToDateTime(data.created_date, false) : (<i>-</i>)}
											</td>
											<td>
												<Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleModalsDetailQuestion(data.id)}><i className="icon-eye"></i></Button>
												<Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.redirectToEditInterviewPage(data.id)}><i className="icon-edit"></i></Button>
												<Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleDeleteVideoInterview(data.id)}><i className="icon-trash"></i></Button>
												<Button size="sm" color="success" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.redirectToAddQuestionOfInterviewPage(data.id)}><i className="icon-plus-square"></i> Question </Button>
												<Button size="sm" color={data.status == 5 ? "info" : "primary" } className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toogleChangeStatusVideoInterview(data.id, data.status)}>{data.status == 5 ? "Unpublish" : "Publish" }</Button>
											</td>
										</tr>
									))
								}
							</TableBox>	
						</Col>
					</Row>
					{ modalDetailInterview }
					{ showModalConfirmationDelete }
					{ showModalConfirmationChangeStatus }
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListInterviewVideo: bindActionCreators(getListInterviewVideo, dispatch),
		getDetailInterviewVideo: bindActionCreators(getDetailInterviewVideo, dispatch),
		getListQuestion: bindActionCreators(getListQuestion, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(ListInterview)