import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button, Badge } from 'reactstrap'
import TableBox from '../../components/tables'
import Pagination from '../../components/cards/PaginationCard'
import { getListEvent } from '../../components/actions'
import { timestampToDateTime, capitalizeString } from '../../components/functions'
import Modal from '../../components/modals'
// import DetailEvent from '../../components/fragments/event/detailEvent'
import cookies from 'next-cookies'

class ListEvent extends React.Component {

	static async getInitialProps({ store, req }) {
		let { token } = cookies({ req })
		console.dir(token)
        const access_token = token ? JSON.parse(token).access_token : ''
		let props = { access_token: access_token, showHeader: true, showFooter: true, eventPage: 0, eventMaxLen: 2 }
		let stores = await store.getState()
		try {
			
			if(!stores.listEvent) await store.dispatch(getListEvent(props.access_token, props.eventPage, props.eventMaxLen))

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
            access_token: props.access_token,
			eventPage: props.eventPage,
			eventFetchLen: props.eventMaxLen,
			eventDateFrom: undefined,
			eventDateTo: undefined,
			eventSortBy: "date",
			eventSearchKey: "",
			listEvent: props.listEvent,
			totalListEvent: props.totalListEvent,
			dataDetailEvent: props.dataDetailEvent,
			modalDetailEvent: false
		}

		this.toggleModalsDetailEvent = this.toggleModalsDetailEvent.bind(this)
		this.toggleModalsConfirmation = this.toggleModalsConfirmation.bind(this)
	}

	toggleModalsDetailEvent = (data) => {
		this.setState(prevState => ({
			modalDetailEvent: !prevState.modalDetailEvent,
			dataDetailEvent: data
		}))
	}

	toggleModalsConfirmation = (status) => {
		console.log(status + " / " + typeof status)
		this.setState(prevState => ({
			[`modalConfirmation${status}`]: !prevState[`modalConfirmation${status}`]
		}))
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen,
			listEvent: nextProps.listEvent,
			totalListEvent: nextProps.totalListEvent,
		})
	}

	onPaginationClick = (page) => {
		const { access_token, eventFetchLen, eventDateFrom, eventDateTo, eventSortBy, eventSearchKey } = this.state
		this.props.getListEvent(access_token, page, eventFetchLen, eventDateFrom, eventDateTo, eventSortBy, eventSearchKey)
		this.setState({eventPage: page})
	}

	onFilterInit = (dateFrom, dateTo) => {
		const { access_token, eventFetchLen, eventSortBy, eventSearchKey } = this.state
		this.props.getListEvent(access_token, 0, eventFetchLen, dateFrom, dateTo, eventSortBy, eventSearchKey)
		this.setState({eventPage: 0, eventDateFrom: dateFrom, eventDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { access_token, eventFetchLen, eventDateFrom, eventDateTo, eventSearchKey } = this.state
		this.props.getListEvent(access_token, 0, eventFetchLen, eventDateFrom, eventDateTo, value, eventSearchKey)
		this.setState({eventPage: 0, eventSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { access_token, eventPage, eventFetchLen, eventDateFrom, eventDateTo, eventSortBy } = this.state
		this.props.getListEvent(access_token, eventPage, eventFetchLen, eventDateFrom, eventDateTo, eventSortBy, keywords)
		this.setState({eventSearchKey: keywords})
	}

	toggleDeleteEvent(id){
		this.setState({
			idEventDeleted: id
		})
		this.toggleModalsConfirmation("Delete")
	}

	toggleChangeStatusEvent(id, status){
		this.setState({
			idEventChangeStatus: id,
			statusModalsChangeStatusEvent: status 
		})
		this.toggleModalsConfirmation("ChangeStatus")
	}

	toggleButtonSubmitModalsDelete = () => {
		console.log(this.state.idEventDeleted)
		this.toggleModalsConfirmation("Delete")
	}

	toggleButtonSubmitModalsChangeStatus = () => {
		console.log(this.state.idEventChangeStatus)
		this.toggleModalsConfirmation("ChangeStatus")
	}

	redirectToEditEventPage(id){
		Router.push("/edit-event/"+ id)
	}

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth,
			listEvent, totalListEvent, eventPage, eventFetchLen, eventSortBy
		} = this.state

		console.dir(listEvent)

		// const modalDetailEvent = (
		// 	<Modal 
		// 		modalIsOpen={this.state.modalDetailEvent}
		// 		toggleModal={this.toggleModalsDetailEvent}
		// 		classNameModal={this.props.className}
		// 		titleModalHeader="Detail Event"
		// 		sizeModal="lg"
		// 		centeredModal={true}
		// 	>
		// 		{
		// 			this.state.modalDetailEvent ? 
		// 				<DetailEvent
		// 					dataEvent={this.state.dataDetailEvent}
		// 					toggleEditButton={this.redirectToEditEventPage}
		// 				/> : 
		// 				(null)
		// 		}
		// 	</Modal> 
		// )

		const showModalConfirmationUpdate = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationUpdate}
				toggleModal={(e) => this.toggleModalsConfirmation("Update")}
				classNameModal={this.props.className}
				titleModalHeader="Update Event Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.toggleButtonSubmitModalsUpdate}
			>
				are you sure to update this event ?
			</Modal> 
		)

		const showModalConfirmationDelete = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationDelete}
				toggleModal={(e) => this.toggleModalsConfirmation("Delete")}
				classNameModal={this.props.className}
				titleModalHeader="Delete Event Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.toggleButtonSubmitModalsDelete}
			>
				are you sure to delete this event ?
			</Modal> 
		)

		const showModalConfirmationChangeStatus = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationChangeStatus}
				toggleModal={(e) => this.toggleModalsConfirmation("ChangeStatus")}
				classNameModal={this.props.className}
				titleModalHeader= {this.state.statusModalsChangeStatusEvent + " Event Confirmation"}
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.toggleButtonSubmitModalsChangeStatus}
			>
				are you sure to { this.state.statusModalsChangeStatusEvent ? this.state.statusModalsChangeStatusEvent.toLowerCase() : ""} this event ?
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
								title="List Event" 
								isResponsive={true} 
								tHead={["#", "Name", "Event Date", "Expired Date", "Participants", "Status", "Action"]}
								sortItems={[
									{ id: "name", name: "Name"}, 
									{ id: "event_date", name: "Event Date" }, 
									{ id: "expired_event_date", name: "Expired Date" }, 
									{ id: "participants", name: "Participants" }, 
									{ id: "status", name: "Status" }
								]}
								onSortClick={this.onSortInit}
								sortValue={eventSortBy}
								deepSearch={true}
								maxRangeDateFilter={5}
								exportToFile={true}
								exportData={listEvent}
								exportFileName={`List_Event_${(new Date()).getTime()}`}
								onFilterClick={this.onFilterInit}
								onKeySearch={this.onSearchKeyword}
								noResult={totalListEvent === 0}
								pagination={
									<Pagination 
										ariaLabel="Page navigation"
										size="sm"
										totalContent={totalListEvent}
										currentPage={eventPage}
										contentMaxLength={eventFetchLen}
										onClick={this.onPaginationClick}
									/>
								}
								tHead={["#", "Name", "Event Date", "Expired Date", "Participants", "Status", "Action"]}
							>
								{
									listEvent.map((data, key) => (
										
										<tr key={key}>
											<th scope="row">
												{(key + 1) +  (eventPage * eventFetchLen)}
											</th>
											<td>{data.name}</td>
											<td>
												{data.event_date ? timestampToDateTime(data.event_date, false) : (<i>-</i>)}
											</td>
											<td>
												{data.expired_event_date ? timestampToDateTime(data.expired_event_date, false) : (<i>-</i>)}
											</td>
											<td>{data.participants}</td>
											<td>{data.status == 0 ? <Badge color="primary">Draft</Badge> : (data.status == 1 ? <Badge color="secondary">Unpublish</Badge> : <Badge color="success">Publish</Badge>)}</td>
											<td>
												<Button size="sm" color="info" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleModalsDetailEvent(data)}><i className="icon-eye"></i></Button>
												<Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.redirectToEditEventPage(data.id)}><i className="icon-edit"></i></Button>
												<Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleDeleteEvent(data.id)}><i className="icon-trash"></i></Button>
												<Button size="sm" color={data.status == 2  ? "secondary" : "success"} className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleChangeStatusEvent(data.id, data.status == 2 ? "Unpublish" : "Publish" )}><i className="mr-1 icon-plus"></i>{data.status == 2 ? "Unpublish" : "Publish" }</Button>
											</td>
										</tr>
									))
								}
							</TableBox>	
						</Col>
					</Row>
					{/* { modalDetailEvent } */}
					{ showModalConfirmationDelete }
					{ showModalConfirmationChangeStatus }
					{ showModalConfirmationUpdate }
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {    
	return {
		getListEvent: bindActionCreators(getListEvent, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(ListEvent)