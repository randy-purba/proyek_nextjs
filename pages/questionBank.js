import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import TableBox from '../components/tables'
import Pagination from '../components/cards/PaginationCard'
import { getListBankQuestion } from '../components/actions'
import { timestampToDateTime, regexHtmlTag, convertStringToBoolean } from '../components/functions'
import Modal from '../components/modals'
import QuestionForm from '../components/fragments/question/questionForm'
import ViewCategoryQuestion from '../components/fragments/question/viewCategoryQuestion'
import { createMemoryHistory } from 'history'

class QuestionBank extends React.Component {

	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, transanctionPage: 0, transactionMaxLen: 10 }
		let stores = await store.getState()
		try {
			// Scope List Transaction
			if(!stores.listBankQuestion) await store.dispatch(getListBankQuestion(props.transanctionPage, props.transactionMaxLen))

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
			transactionPage: props.transanctionPage,
			transactionFetchLen: props.transactionMaxLen,
			transactionDateFrom: undefined,
			transactionDateTo: undefined,
			transactionSortBy: "date",
			transactionSearchKey: "",
			listBankQuestion: props.listBankQuestion,
			totalBankQuestion: props.totalBankQuestion,

			modalAddNewQuestion:false,
			modalViewCategoryQuestion:false,

			fieldZone: 0,
			fieldQuestionType: 1,
			fieldQuestion: "",
			fieldChoiceAnswerA: "",
			fieldCheckboxChoiceAnswerA: false,
			fieldChoiceAnswerB: "",
			fieldCheckboxChoiceAnswerB: false,
			fieldChoiceAnswerC: "",
			fieldCheckboxChoiceAnswerC: false,
			fieldChoiceAnswerD: "",
			fieldCheckboxChoiceAnswerD: false,
			fieldAnswerEssay:"",
			fieldVideoLink:""
		}

		this.toogleModalsNewQuestion = this.toogleModalsNewQuestion.bind(this);

		this.toogleModalsViewCategoryQuestion = this.toogleModalsViewCategoryQuestion.bind(this);

		this.history = createMemoryHistory();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen,
			listBankQuestion: nextProps.listBankQuestion,
			totalBankQuestion: nextProps.totalBankQuestion
		})
	}

	toogleModalsNewQuestion() {
		this.setState(prevState => ({
			modalAddNewQuestion: !prevState.modalAddNewQuestion
		}));
	}

	toogleModalsViewCategoryQuestion() {
		this.setState(prevState => ({
			modalViewCategoryQuestion: !prevState.modalViewCategoryQuestion
		}));
	}

	onPaginationClick = (page) => {
		const { transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, transactionSearchKey } = this.state
		this.props.getListBankQuestion(page, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, transactionSearchKey)
		this.setState({transactionPage: page})
	}

	onFilterInit = (dateFrom, dateTo) => {
		const { transactionFetchLen, transactionSortBy, transactionSearchKey } = this.state
		this.props.getListBankQuestion(0, transactionFetchLen, dateFrom, dateTo, transactionSortBy, transactionSearchKey)
		this.setState({transactionPage: 0, transactionDateFrom: dateFrom, transactionDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSearchKey } = this.state
		this.props.getListBankQuestion(0, transactionFetchLen, transactionDateFrom, transactionDateTo, value, transactionSearchKey)
		this.setState({transactionPage: 0, transactionSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { transactionPage, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy } = this.state
		this.props.getListBankQuestion(transactionPage, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, keywords)
		this.setState({transactionSearchKey: keywords})
	}

	handleChange = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: regexHtmlTag(value) })
		if(related) this.setState({ [related]: regexHtmlTag(value) })
	}

	handleCheckbox = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		const checkboxChecked = !convertStringToBoolean(value)
		this.setState({ [name]: checkboxChecked })
	}

	handleSelectOption = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: Number(value) })
		if(related) this.setState({ [related]: 0 })
	}

	handleSubmit = (e) => {
		console.log("handleSubmit");
		console.log('%c 🍝 fieldZone: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', this.state.fieldZone);
		console.log('%c 🍇 fieldQuestionType: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', this.state.fieldQuestionType);
		console.log('%c 🍣 fieldQuestion: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', this.state.fieldQuestion);
		console.log('%c 🥔 fieldChoiceAnswerA: ', 'font-size:20px;background-color: #B03734;color:#fff;', this.state.fieldChoiceAnswerA);
		console.log('%c 🌽 fieldCheckboxChoiceAnswerA: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.fieldCheckboxChoiceAnswerA);
		console.log('%c 🍩 fieldChoiceAnswerB: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', this.state.fieldChoiceAnswerB);
		console.log('%c 🥧 fieldCheckboxChoiceAnswerB: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', this.state.fieldCheckboxChoiceAnswerB);
		console.log('%c 🎂 fieldChoiceAnswerC: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', this.state.fieldChoiceAnswerC);
		console.log('%c 🍇 fieldCheckboxChoiceAnswerC: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', this.state.fieldCheckboxChoiceAnswerC);
		console.log('%c 🍎 fieldChoiceAnswerD: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', this.state.fieldChoiceAnswerD);
		console.log('%c 🍇 fieldCheckboxChoiceAnswerD: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', this.state.fieldCheckboxChoiceAnswerD);
		console.log('%c 🍔 fieldAnswerEssay: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.fieldAnswerEssay);
		console.log('%c 🍡 fieldVideoLink: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', this.state.fieldVideoLink);
	}

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth,
			listBankQuestion, totalBankQuestion, transactionPage, transactionFetchLen, transactionSortBy
		} = this.state

			
		
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
									title="Bank Soal" 
									isResponsive={true} 
									tHead={["#", "Category", "Question Type", "Created Date", "Education", "Action"]}
									sortItems={[
										{ id: "name", name: "Category"}, 
										{ id: "question_type", name: "Question Type" }, 
										{ id: "date", name: "Created Date" }, 
										{ id: "education", name: "Education"}
									]}
									onSortClick={this.onSortInit}
									sortValue={transactionSortBy}
									deepSearch={true}
									maxRangeDateFilter={5}
									exportToFile={true}
									exportData={listBankQuestion}
									exportFileName={`Category_Bank_Soal_${(new Date()).getTime()}`}
									onFilterClick={this.onFilterInit}
									onKeySearch={this.onSearchKeyword}
									noResult={listBankQuestion.length === 0}
									pagination={
										<Pagination 
											ariaLabel="Page navigation"
											size="sm"
											totalContent={totalBankQuestion}
											currentPage={transactionPage}
											contentMaxLength={transactionFetchLen}
											onClick={this.onPaginationClick}
										/>
									}
								>
									{
										listBankQuestion.map((data, key) => (
											<tr key={key}>
												<th scope="row">
													{(key + 1) +  (transactionPage * transactionFetchLen)}
												</th>
												<td>{data.name}</td>
												<td>{data.question_type}</td>
												<td>
													{timestampToDateTime(data.date, false)}
												</td>
												<td>{data.education}</td>
												<td>
													<Button size="sm" color="info" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={this.toogleModalsNewQuestion}><i className="mr-1 icon-plus"></i>Soal</Button>
													<Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={this.toogleModalsViewCategoryQuestion}><i className="icon-eye"></i></Button>
													<Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-edit"></i></Button>
													<Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-trash"></i></Button>
												</td>
											</tr>
										))
									}
								</TableBox>
							</Col>
						</Row>
					</Container>

					<Modal 
						modalIsOpen={this.state.modalAddNewQuestion}
						toggleModal={this.toogleModalsNewQuestion}
						classNameModal={this.props.className}
						titleModalHeader="Add New Question"
						sizeModal="lg"
						centeredModal={true}
					>
						<QuestionForm
							dataZone={this.state.fieldZone}
							dataQuestionType={this.state.fieldQuestionType}
							dataQuestion={this.state.fieldQuestion}
							dataChoiceAnswerA={this.state.fieldChoiceAnswerA}
							dataCheckboxChoiceAnswerA={this.state.fieldCheckboxChoiceAnswerA}
							dataChoiceAnswerB={this.state.datafieldChoiceAnswerB}
							dataCheckboxChoiceAnswerB={this.state.fieldCheckboxChoiceAnswerB}
							dataChoiceAnswerC={this.state.fieldChoiceAnswerC}
							dataCheckboxChoiceAnswerC={this.state.fieldCheckboxChoiceAnswerC}
							dataChoiceAnswerD={this.state.fieldChoiceAnswerD}
							dataCheckboxChoiceAnswerD={this.state.fieldCheckboxChoiceAnswerD}
							dataAnswerEssay={this.state.fieldAnswerEssay} 
							dataVideoLink={this.state.fieldVideoLink}
							onHandleSubmit={this.handleSubmit}
							onHandleChange={this.handleChange}
							onHandleCheckbox={this.handleCheckbox}
							onHandleSelectOption={this.handleSelectOption}
							listZone={[
								{ id: 1, name: "Sea"}, 
								{ id: 2, name: "Island" }, 
								{ id: 3, name: "Jungle" }, 
								{ id: 4, name: "Education"}
							]}
							listQuestionType={[
								{ id: 1, name: "Multiple Choice"}, 
								{ id: 2, name: "Essay" }
							]}
						/>
					</Modal>
					<Modal 
						modalIsOpen={this.state.modalViewCategoryQuestion}
						toggleModal={this.toogleModalsViewCategoryQuestion}
						classNameModal={this.props.className}
						titleModalHeader="View Category Question"
						sizeModal="lg"
						centeredModal={true}
					>
						<ViewCategoryQuestion 
							category="Test Category"
							questionType="Gamification"
							createdDate="05-06-2019 02:13"
							education="All" 
						/>
					</Modal> 
				</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListBankQuestion: bindActionCreators(getListBankQuestion, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(QuestionBank)