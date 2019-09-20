import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import TableBox from '../components/tables'
import Pagination from '../components/cards/PaginationCard'
import { getListBankQuestion, getListCities } from '../components/actions'
import { timestampToDateTime } from '../components/functions'
import Modal from '../components/modals'
import QuestionForm from '../components/fragments/question/questionForm'
import { createMemoryHistory } from 'history'
class QuestionBank extends React.Component {

	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, transanctionPage: 0, transactionMaxLen: 10 }
		let stores = await store.getState()
		try {
			// Scope List Transaction
			if(!stores.listBankQuestion) await store.dispatch(getListBankQuestion(props.transanctionPage, props.transactionMaxLen))

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
			transactionPage: props.transanctionPage,
			transactionFetchLen: props.transactionMaxLen,
			transactionDateFrom: undefined,
			transactionDateTo: undefined,
			transactionSortBy: "date",
			transactionSearchKey: "",
			listBankQuestion: props.listBankQuestion,
			totalBankQuestion: props.totalBankQuestion,
			modal:false,
			listCity: props.listCity,
			formKota: 2
		}

		this.toogleModalsNewQuestion = this.toogleModalsNewQuestion.bind(this);

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
			modal: !prevState.modal
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

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listCity,
			listBankQuestion, totalBankQuestion, transactionPage, transactionFetchLen, transactionSortBy
		} = this.state

		const listProvince = listCity.filter(data => data.id === this.state.formKota)[0].provinsi
		
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
													<Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-eye"></i></Button>
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
						modalIsOpen={this.state.modal}
						toggleModal={this.toogleModalsNewQuestion}
						classNameModal={this.props.className}
						titleModalHeader="Add New Question"
						sizeModal="lg"
						centeredModal={true}
					>
						<QuestionForm
							listZone={[
								{ id: "sea", name: "Sea"}, 
								{ id: "island", name: "Island" }, 
								{ id: "jungle", name: "Jungle" }, 
								{ id: "education", name: "Education"}
							]}
							listQuestionType={[
								{ id: "multiple_choice", name: "Multiple Choice"}, 
								{ id: "essay", name: "Essay" }
							]}
						/>
					</Modal>
				</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListBankQuestion: bindActionCreators(getListBankQuestion, dispatch),
		getListCities: bindActionCreators(getListCities, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(QuestionBank)