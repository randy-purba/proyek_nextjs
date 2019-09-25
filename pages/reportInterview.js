import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col,Button } from 'reactstrap'
import TableBox from '../components/tables'
import Pagination from '../components/cards/PaginationCard'
import {  getListReportInterview } from '../components/actions'
import { timestampToDateTime, regexHtmlTag, numberWithDot } from '../components/functions'
import Modal from '../components/modals'
import DetailResult from '../components/fragments/report_interview/detailResultReportInterview'
import ViewResult from '../components/fragments/report_interview/viewResultReportInterview'

class ReportInterview extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, reportInterviewPage: 0, reportInterviewMaxLen: 10 }
		let stores = await store.getState()
		
		try {

			if(!stores.listReportInterview) await store.dispatch(getListReportInterview(props.reportInterviewPage, props.reportInterviewMaxLen))

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
			reportInterviewPage: props.reportInterviewPage,
			reportInterviewFetchLen: props.reportInterviewMaxLen,
			reportInterviewDateFrom: undefined,
			reportInterviewDateTo: undefined,
			reportInterviewSortBy: "created_date",
			reportInterviewSearchKey: "",
			listReportInterview: props.listReportInterview,
			modalDetailResultReportInterview: false,
			modalViewResultResportInterviewNested: false,
			modalUpdateUserForm: false,
			dataReportInterview: null,
			dataViewResult: null
		}

		this.toggleModalsDetailResultReportInterview = this.toggleModalsDetailResultReportInterview.bind(this)
		this.toggleModalsViewResultResportInterviewNested = this.toggleModalsViewResultResportInterviewNested.bind(this)

	}

	toggleModalsDetailResultReportInterview(data) {
		this.setState(prevState => ({
			modalDetailResultReportInterview: !prevState.modalDetailResultReportInterview,
			dataReportInterview: data
		}))
	}

	toggleModalsViewResultResportInterviewNested(data) {
		this.setState(prevState => ({
			modalViewResultResportInterviewNested: !prevState.modalViewResultResportInterviewNested,
			dataViewResult: data
		}))
	}

	toggleModalsUpdateUserForm(data) {
		this.setState(prevState => ({
			modalUpdateUserForm: !prevState.modalUpdateUserForm,
			dataName: data.name, 
			dataPassword: data.password, 
			dataEmail: data.email, 
			dataNoTelp: data.no_hp, 
			dataRole: data.role
		}))
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen,
			listReportInterview: nextProps.listReportInterview
		})
	}

	onPaginationClick = (page) => {
		const { reportInterviewFetchLen, reportInterviewDateFrom, reportInterviewDateTo, reportInterviewSortBy, reportInterviewSearchKey } = this.state
		this.props.getListReportInterview(page, reportInterviewFetchLen, reportInterviewDateFrom, reportInterviewDateTo, reportInterviewSortBy, reportInterviewSearchKey)
		this.setState({reportInterviewPage: page})
		this.props.getListReportInterview()
	}

	onFilterInit = (dateFrom, dateTo) => {
		const { reportInterviewFetchLen, reportInterviewSortBy, reportInterviewSearchKey } = this.state
		this.props.getListReportInterview(0, reportInterviewFetchLen, dateFrom, dateTo, reportInterviewSortBy, reportInterviewSearchKey)
		this.setState({reportInterviewPage: 0, reportInterviewDateFrom: dateFrom, reportInterviewDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { reportInterviewFetchLen, reportInterviewDateFrom, reportInterviewDateTo, reportInterviewSearchKey } = this.state
		this.props.getListReportInterview(0, reportInterviewFetchLen, reportInterviewDateFrom, reportInterviewDateTo, value, reportInterviewSearchKey)
		this.setState({reportInterviewPage: 0, reportInterviewSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { reportInterviewPage, reportInterviewFetchLen, reportInterviewDateFrom, reportInterviewDateTo, reportInterviewSortBy } = this.state
		this.props.getListReportInterview(reportInterviewPage, reportInterviewFetchLen, reportInterviewDateFrom, reportInterviewDateTo, reportInterviewSortBy, keywords)
		this.setState({reportInterviewSearchKey: keywords})
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

	handleSubmitAdd = (e) => {
		console.log("handleSubmitAdd")
		console.log('%c 🌰 this.state.dataName: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataName);
		console.log('%c 🌰 this.state.dataPassword: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataPassword);
		console.log('%c 🌰 this.state.dataEmail: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataEmail);
		console.log('%c 🌰 this.state.dataNoTelp: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataNoTelp);
		console.log('%c 🌰 this.state.dataRole: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataRole);
	}

	handleSubmitUpdate = (e) => {
		console.log("handleSubmitUpdate")
		console.log('%c 🌰 this.state.dataName: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataName);
		console.log('%c 🌰 this.state.dataPassword: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataPassword);
		console.log('%c 🌰 this.state.dataEmail: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataEmail);
		console.log('%c 🌰 this.state.dataNoTelp: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataNoTelp);
		console.log('%c 🌰 this.state.dataRole: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataRole);
	}

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listReportInterview, reportInterviewPage, reportInterviewFetchLen, reportInterviewSortBy
		} = this.state

		const showModalDetailResultReportInterview = ( 
			<Modal 
				modalIsOpen={this.state.modalDetailResultReportInterview}
				toggleModal={this.toggleModalsDetailResultReportInterview}
				classNameModal={this.props.className}
				titleModalHeader="Detail Result Report Interview"		
				sizeModal="md"
				centeredModal={true}
			>
				<DetailResult 
					dataResultReportInterview={this.state.dataReportInterview} 
					onClickViewResult={this.toggleModalsViewResultResportInterviewNested}																					
				/>
			</Modal> 
		)

		const showModalViewResultReportInterview = (
			<Modal 
				modalIsOpen={this.state.modalViewResultResportInterviewNested}
				toggleModal={this.toggleModalsViewResultResportInterviewNested}
				classNameModal={this.props.className}
				titleModalHeader="Detail Result Report Interview"		
				sizeModal="md"
				centeredModal={true}
			>
				<ViewResult 
					dataViewResult={this.state.dataViewResult} 																				
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
								title="List Report Interview" 
								isResponsive={true} 
								tHead={["#", "Name", "Team", "Test Date", "Actions"]}
								sortItems={[
									{ id: "name", name: "Name"}, 
									{ id: "team", name: "Team" }, 
									{ id: "test_date", name: "Test Date"}
								]}
								onSortClick={this.onSortInit}
								sortValue={reportInterviewSortBy}
								deepSearch={true}
								maxRangeDateFilter={5}
								exportToFile={true}
								exportData={listReportInterview}
								exportFileName={`Report_Interview_${(new Date()).getTime()}`}
								onFilterClick={this.onFilterInit}
								onKeySearch={this.onSearchKeyword}
								exportData={listReportInterview}
								noResult={listReportInterview.length === 0}
								pagination={
									<Pagination 
										ariaLabel="Page navigation"
										size="sm"
										totalContent={listReportInterview.length}
										currentPage={reportInterviewPage}
										contentMaxLength={reportInterviewFetchLen}
										onClick={this.onPaginationClick}
									/>
								}
								showButtonHeader={false}
							>
								 {
									listReportInterview.map((data, key) => (
										<tr key={key}>
											<th scope="row">
												{(key + 1) +  (reportInterviewPage * reportInterviewFetchLen)}
											</th>
											<td>{data.name}</td>
											<td>{data.team}</td>
											<td>
												{timestampToDateTime(data.test_date, false)}
											</td>
											<td>
												<Button outline size="sm" color="info" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleModalsDetailResultReportInterview(data)}><i className="icon-eye"></i> Detail</Button>
											</td>
										</tr>
									))
								} 
							</TableBox>
						</Col>
					</Row>
				</Container>
				 { showModalDetailResultReportInterview }
				 { showModalViewResultReportInterview }
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListReportInterview: bindActionCreators(getListReportInterview, dispatch)
	}
}

export default connect(state => state, mapDispatchToProps)(ReportInterview)