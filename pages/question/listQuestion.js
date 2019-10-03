import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import TableBox from '../../components/tables'
import Pagination from '../../components/cards/PaginationCard'
import { getListQuestion, getListAnswerType } from '../../components/actions'
import { timestampToDateTime, numberToCurrency } from '../../components/functions'
import Modal from '../../components/modals'
import DetailQuestion from '../../components/fragments/question/detailQuestion'

class ListQuestion extends React.Component {

	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, questionPage: 0, questionMaxLen: 10 }
		let stores = await store.getState()
		try {
			
			if(!stores.listQuestion) await store.dispatch(getListQuestion(props.questionPage, props.questionMaxLen))

			if(!stores.listAnswerType) await store.dispatch(getListAnswerType())
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
			questionPage: props.questionPage,
			questionFetchLen: props.questionMaxLen,
			questionDateFrom: undefined,
			questionDateTo: undefined,
			questionSortBy: "date",
			questionSearchKey: "",
			listQuestion: props.listQuestion,
			totalListQuestion: props.totalListQuestion,
			listAnswerType: props.listAnswerType,
			dataDetailQuestion: props.dataDetailQuestion,
			modalDetailQuestion: false
		}

		this.toggleModalsDetailQuestion = this.toggleModalsDetailQuestion.bind(this)
	}

	toggleModalsDetailQuestion = (data) => {
		this.setState(prevState => ({
			modalDetailQuestion: !prevState.modalDetailQuestion,
			dataDetailQuestion: data
		}))
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen,
			listQuestion: nextProps.listQuestion,
			totalListQuestion: nextProps.totalListQuestion,
			listAnswerType: nextProps.listAnswerType
		})
	}

	onPaginationClick = (page) => {
		const { questionFetchLen, questionDateFrom, questionDateTo, questionSortBy, questionSearchKey } = this.state
		this.props.getListQuestion(page, questionFetchLen, questionDateFrom, questionDateTo, questionSortBy, questionSearchKey)
		this.setState({questionPage: page})
	}

	onFilterInit = (dateFrom, dateTo) => {
		const { questionFetchLen, questionSortBy, questionSearchKey } = this.state
		this.props.getListQuestion(0, questionFetchLen, dateFrom, dateTo, questionSortBy, questionSearchKey)
		this.setState({questionPage: 0, questionDateFrom: dateFrom, questionDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { questionFetchLen, questionDateFrom, questionDateTo, questionSearchKey } = this.state
		this.props.getListQuestion(0, questionFetchLen, questionDateFrom, questionDateTo, value, questionSearchKey)
		this.setState({questionPage: 0, questionSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { questionPage, questionFetchLen, questionDateFrom, questionDateTo, questionSortBy } = this.state
		this.props.getListQuestion(questionPage, questionFetchLen, questionDateFrom, questionDateTo, questionSortBy, keywords)
		this.setState({questionSearchKey: keywords})
	}

	redirectToEditQuestionPage(id){
		console.log("redirectToEditQuestionPage" + id)
		Router.push("/edit-question/"+ id)
	}

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listAnswerType,
			listQuestion, totalListQuestion, questionPage, questionFetchLen, questionSortBy
		} = this.state

		const modalDetailQuestion = (
			<Modal 
				modalIsOpen={this.state.modalDetailQuestion}
				toggleModal={this.toggleModalsDetailQuestion}
				classNameModal={this.props.className}
				titleModalHeader="Detail Question"
				sizeModal="lg"
				centeredModal={true}
			>
				<DetailQuestion
					dataQuestion={this.state.dataDetailQuestion}
				/>
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
								title="List Question" 
								isResponsive={true} 
								tHead={["#", "Question Title", "Answer Type", "Zone", "Marker", "Score", "Created Date", "Updated Date", "Published Date", "Published", "Action"]}
								sortItems={[
									{ id: "question_title", name: "Question Title"}, 
									{ id: "answer_type", name: "Answer Type" }, 
									{ id: "created_date", name: "Created Date" }, 
									{ id: "updated_date", name: "Updated Date" }, 
									{ id: "published_date", name: "Published Date" }, 
									{ id: "published", name: "Published"}
								]}
								onSortClick={this.onSortInit}
								sortValue={questionSortBy}
								deepSearch={true}
								maxRangeDateFilter={5}
								exportToFile={true}
								exportData={listQuestion}
								exportFileName={`List_Question_${(new Date()).getTime()}`}
								onFilterClick={this.onFilterInit}
								onKeySearch={this.onSearchKeyword}
								noResult={totalListQuestion === 0}
								pagination={
									<Pagination 
										ariaLabel="Page navigation"
										size="sm"
										totalContent={totalListQuestion}
										currentPage={questionPage}
										contentMaxLength={questionFetchLen}
										onClick={this.onPaginationClick}
									/>
								}
								tHead={["#", "Question Title", "Answer Type", "Zone", "Marker", "Score", "Created Date", "Updated Date", "Published Date", "Published", "Action"]}
							>
								{
									listQuestion.map((data, key) => (
										
										<tr key={key}>
											<th scope="row">
												{(key + 1) +  (questionPage * questionFetchLen)}
											</th>
											<td>{data.question_title}</td>
											<td>{listAnswerType.filter(dataAnswer => dataAnswer.id === data.answer_type.id)[0].name}</td>
											<td>{data.zone.value}</td>
											<td>{data.marker.value}</td>
											<td className="text-right">{data.score}</td>
											<td>
												{data.created_date ? timestampToDateTime(data.created_date, false) : (<i>-</i>)}
											</td>
											<td>
												{data.updated_date ? timestampToDateTime(data.updated_date, false) : (<i>-</i>)}
											</td>
											<td>
												{data.published_date ? timestampToDateTime(data.published_date, false) : (<i>-</i>)}
											</td>
											<td>{data.published ? <i className="icon-check-square font-22 float-right" /> : <i className="icon-x-square font-22 float-right" />}</td>
											<td>
												<Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleModalsDetailQuestion(data)}><i className="icon-eye"></i></Button>
												<Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.redirectToEditQuestionPage(data.id)}><i className="icon-edit"></i></Button>
												<Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-trash"></i></Button>
												<Button size="sm" color={data.published ? "info" : "primary" } className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="mr-1 icon-plus"></i>{data.published ? "Unpublish" : "Publish" }</Button>
											</td>
										</tr>
									))
								}
							</TableBox>	
						</Col>
					</Row>
					{ modalDetailQuestion }
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListQuestion: bindActionCreators(getListQuestion, dispatch),
		getListAnswerType: bindActionCreators(getListAnswerType, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(ListQuestion)