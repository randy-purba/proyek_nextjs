import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col,Button } from 'reactstrap'
import TableBox from '../components/tables'
import Pagination from '../components/cards/PaginationCard'
import { getListUser } from '../components/actions'
import { timestampToDateTime, regexHtmlTag, numberWithDot } from '../components/functions'
import Modal from '../components/modals'
import UserForm from '../components/fragments/user/userForm'


class ManagementUser extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, usersPage: 0, usersMaxLen: 10 }
		let stores = await store.getState()
		
		try {

			if(!stores.listUser) await store.dispatch(getListUser(props.usersPage, props.usersMaxLen))

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
			usersPage: props.usersPage,
			usersFetchLen: props.usersMaxLen,
			usersDateFrom: undefined,
			usersDateTo: undefined,
			usersSortBy: "created_date",
			usersSearchKey: "",
			listUser: props.listUser,
			modalAddNewUserForm: false,
			modalUpdateUserForm: false,
			dataName: "", 
			dataPassword: "", 
			dataEmail: "", 
			dataNoTelp: "", 
			dataRole: 0
		}

		this.toggleModalsAddNewUserForm = this.toggleModalsAddNewUserForm.bind(this);

		this.toggleModalsUpdateUserForm = this.toggleModalsUpdateUserForm.bind(this);
	}

	toggleModalsAddNewUserForm() {
		this.setState(prevState => ({
			modalAddNewUserForm: !prevState.modalAddNewUserForm,
			dataName: "", 
			dataPassword: "", 
			dataEmail: "", 
			dataNoTelp: "", 
			dataRole: 0
		}))
	}

	toggleModalsUpdateUserForm(data) {
		console.dir(data)
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
			listUser: nextProps.listUser
		})
	}

	onPaginationClick = (page) => {
		const { usersFetchLen, usersDateFrom, usersDateTo, usersSortBy, usersSearchKey } = this.state
		this.props.getListUser(page, usersFetchLen, usersDateFrom, usersDateTo, usersSortBy, usersSearchKey)
		this.setState({usersPage: page})
		this.props.getListUser()
	}

	onFilterInit = (dateFrom, dateTo) => {
		const { usersFetchLen, usersSortBy, usersSearchKey } = this.state
		this.props.getListUser(0, usersFetchLen, dateFrom, dateTo, usersSortBy, usersSearchKey)
		this.setState({usersPage: 0, usersDateFrom: dateFrom, usersDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { usersFetchLen, usersDateFrom, usersDateTo, usersSearchKey } = this.state
		this.props.getListUser(0, usersFetchLen, usersDateFrom, usersDateTo, value, usersSearchKey)
		this.setState({usersPage: 0, usersSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { usersPage, usersFetchLen, usersDateFrom, usersDateTo, usersSortBy } = this.state
		this.props.getListUser(usersPage, usersFetchLen, usersDateFrom, usersDateTo, usersSortBy, keywords)
		this.setState({usersSearchKey: keywords})
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
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listUser, usersPage, usersFetchLen, usersSortBy
		} = this.state

		const showModalAddNewUser = ( 
			<Modal 
				modalIsOpen={this.state.modalAddNewUserForm}
				toggleModal={this.toggleModalsAddNewUserForm}
				classNameModal={this.props.className}
				titleModalHeader="Add New User"
				sizeModal="lg"
				centeredModal={true}
			>
				<UserForm 
					listRole={[
						{ "id": 2, "role": "user", "name": "User"},
						{ "id": 1, "role": "admin", "name": "Admin"}
					]}	
					onHandleChange={this.handleChange}			
					onHandleSelectOption={this.handleSelectOption}	
					onHandleSubmit={this.handleSubmitAdd}	
					statusForm="add"																														
				/>
			</Modal> 
		)
		const showModalUpdateUser = ( 
			<Modal 
				modalIsOpen={this.state.modalUpdateUserForm}
				toggleModal={this.toggleModalsUpdateUserForm}
				classNameModal={this.props.className}
				titleModalHeader="Update User"
				sizeModal="lg"
				centeredModal={true}
			>
				<UserForm 
					listRole={[
						{ "id": 2, "role": "user", "name": "User"},
						{ "id": 1, "role": "admin", "name": "Admin"}
					]}							
					onHandleChange={this.handleChange}		
					onHandleSelectOption={this.handleSelectOption}
					onHandleSubmit={this.handleSubmitUpdate}	
					dataName={this.state.dataName} 
					dataPassword={this.state.dataPassword}
					dataEmail={this.state.dataEmail}
					dataNoTelp={this.state.dataNoTelp}
					dataRole={this.state.dataRole}					
					statusForm="update"																				
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
								title="List User" 
								isResponsive={true} 
								tHead={["#", "Name", "Email", "No HP", "Created Date", "Updated Date", "Actions"]}
								sortItems={[
									{ id: "name", name: "Name"}, 
									{ id: "username", name: "Email" }, 
									{ id: "no_hp", name: "No.HP" }, 
									{ id: "created_date", name: "Created Date"}, 
									{ id: "updated_date", name: "Updated Date" }
								]}
								onSortClick={this.onSortInit}
								sortValue={usersSortBy}
								deepSearch={true}
								maxRangeDateFilter={5}
								exportToFile={true}
								exportData={listUser}
								exportFileName={`Transaction${(new Date()).getTime()}`}
								onFilterClick={this.onFilterInit}
								onKeySearch={this.onSearchKeyword}
								exportData={listUser}
								noResult={listUser.length === 0}
								pagination={
									<Pagination 
										ariaLabel="Page navigation"
										size="sm"
										totalContent={listUser.length}
										currentPage={usersPage}
										contentMaxLength={usersFetchLen}
										onClick={this.onPaginationClick}
									/>
								}
								showButtonHeader={true}
								titleButtonHeader="Add New User"
								onClickButtonHeader={this.toggleModalsAddNewUserForm}
							>
								{
									listUser.map((data, key) => (
										<tr key={key}>
											<th scope="row">
												{(key + 1) +  (usersPage * usersFetchLen)}
											</th>
											<td>{data.name}</td>
											<td>{data.email}</td>
											<td>{data.no_hp}</td>
											<td>
												{timestampToDateTime(data.created_date, false)}
											</td>
											<td>
												{timestampToDateTime(data.updated_date, false)}
											</td>
											<td>
												<Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-eye"></i></Button>
												<Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleModalsUpdateUserForm(data)}><i className="icon-edit"></i></Button>
												<Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-trash"></i></Button>
											</td>
										</tr>
									))
								}
							</TableBox>
						</Col>
					</Row>
				</Container>
				 { showModalAddNewUser }
				 { showModalUpdateUser }
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListUser: bindActionCreators(getListUser, dispatch)
	}
}

export default connect(state => state, mapDispatchToProps)(ManagementUser)