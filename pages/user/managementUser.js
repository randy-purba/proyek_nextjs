import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button, Badge } from 'reactstrap'
import TableBox from '../../components/tables'
import Pagination from '../../components/cards/PaginationCard'
import { getListUser, getDetailUserAdministrator, postAddUserAdministrator } from '../../components/actions'
import { timestampToDateTime, regexHtmlTag, numberWithDot } from '../../components/functions'
import Modal from '../../components/modals'
import UserForm from '../../components/fragments/user/userForm'

class ManagementUser extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, usersPage: 0, usersMaxLen: 1, usersSearchKey: "", usersSortBy: "username" }
		let stores = await store.getState()
		try {
			if(!stores.listUser) await store.dispatch(getListUser(props.usersPage, props.usersMaxLen, props.usersSearchKey, props.usersSortBy ))

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
			usersSortBy: props.usersSortBy,
			usersSearchKey: props.usersSearchKey,
			listUser: props.listUser,
			detailUserAdministrator: props.detailUserAdministrator,
			totalUserAdministrator:props.totalUserAdministrator,	
			modalAddNewUserForm: false,
			modalUpdateUserForm: false,
			modalConfirmationInsert: false,
			modalConfirmationUpdate: false,
			modalConfirmationDelete: false,
			dataName: "", 
			dataEmail: "", 
			dataPassword: "",
			dataUserRole: ""
		}

		this.toggleModalsAddNewUserForm = this.toggleModalsAddNewUserForm.bind(this)

		this.toggleModalsUpdateUserForm = this.toggleModalsUpdateUserForm.bind(this)

		this.toggleDeleteUser = this.toggleDeleteUser.bind(this)

		this.toggleModalsConfirmationInsert = this.toggleModalsConfirmationInsert.bind(this)
		this.toggleModalsConfirmationUpdate = this.toggleModalsConfirmationUpdate.bind(this)
		this.toggleModalsConfirmationDelete = this.toggleModalsConfirmationDelete.bind(this)
	}

	toggleModalsAddNewUserForm() {
		this.setState(prevState => ({
			modalAddNewUserForm: !prevState.modalAddNewUserForm,
			dataName: "", 
			dataEmail: "", 
			dataPassword: "",
			dataUserRole: ""
		}))
	}

	toggleModalsUpdateUserForm(id) {
		if(!this.state.modalUpdateUserForm) this.props.getDetailUserAdministrator(id)
		this.setState(prevState => ({
			modalUpdateUserForm: !prevState.modalUpdateUserForm,
		}))
	}

	toggleDeleteUser(data) {
		this.setState({
			dataIdUser: data ? data.id : 0
		})
		this.toggleModalsConfirmationDelete()
	}

	toggleModalsConfirmationInsert() {
		this.setState(prevState => ({
			modalConfirmationInsert: !prevState.modalConfirmationInsert,
		}))
	}

	toggleModalsConfirmationUpdate() {
		this.setState(prevState => ({
			modalConfirmationUpdate: !prevState.modalConfirmationUpdate,
		}))
	}

	toggleModalsConfirmationDelete() {
		this.setState(prevState => ({
			modalConfirmationDelete: !prevState.modalConfirmationDelete,
		}))
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen,
			listUser: nextProps.listUser,
			detailUserAdministrator: nextProps.detailUserAdministrator,
			totalUserAdministrator: nextProps.totalUserAdministrator,
			resporesponsePostAddUserAdmin: nextProps.responsePostAddUserAdmin,
			dataName: nextProps.detailUserAdministrator ? nextProps.detailUserAdministrator.name : "", 
			dataEmail: nextProps.detailUserAdministrator ? nextProps.detailUserAdministrator.email : "", 
			dataPassword: nextProps.detailUserAdministrator ? nextProps.detailUserAdministrator.password : "",
			dataUserRole: nextProps.detailUserAdministrator ? nextProps.detailUserAdministrator.role : ""
		})
	}

	onPaginationClick = (page) => {
		const { usersFetchLen, usersDateFrom, usersDateTo, usersSortBy, usersSearchKey } = this.state
		this.props.getListUser(page, usersFetchLen, usersSearchKey, usersSortBy, usersDateFrom, usersDateTo)
		this.setState({usersPage: page})
	}

	onFilterInit = (dateFrom, dateTo) => {
		const { usersFetchLen, usersSortBy, usersSearchKey } = this.state
		this.props.getListUser(0, usersFetchLen, usersSearchKey, usersSortBy, dateFrom, dateTo)
		this.setState({usersPage: 0, usersDateFrom: dateFrom, usersDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { usersFetchLen, usersDateFrom, usersDateTo, usersSearchKey } = this.state
		this.props.getListUser(0, usersFetchLen, usersSearchKey, value, usersDateFrom, usersDateTo)
		this.setState({usersPage: 0, usersSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { usersPage, usersFetchLen, usersDateFrom, usersDateTo, usersSortBy } = this.state
		this.props.getListUser(usersPage, usersFetchLen, keywords, usersSortBy, usersDateFrom, usersDateTo)
		this.setState({usersSearchKey: keywords})
	}

	handleChange = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		this.setState({ [name]: regexHtmlTag(value) })
		if(related) this.setState({ [related]: regexHtmlTag(value) })
	}

	handleSelectOption = (e) => {
		const target = e.target, value = target.value, name = target.name, related = target.getAttribute('related')
		console.log(name +  ' / ' + value)
		this.setState({ [name]: Number(value) })
		if(related) this.setState({ [related]: 0 })
	}

	handleSubmitAdd = (e) => {
		console.log("handleSubmitAdd")
		console.log('%c 🌰 this.state.dataName: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataName);
		console.log('%c 🌰 this.state.dataEmail: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataEmail);
		console.log('%c 🍹 dataPassword: ', 'font-size:20px;background-color: #42b983;color:#fff;', this.state.dataPassword);
		console.log('%c 🍎 dataUserRole: ', 'font-size:20px;background-color: #465975;color:#fff;', this.state.dataUserRole);
		this.props.postAddUserAdministrator(this.state.dataName, this.state.dataEmail, this.state.dataPassword)
		this.toggleModalsConfirmationInsert()
		this.toggleModalsAddNewUserForm()
	}

	handleSubmitUpdate = (e) => {
		console.log("handleSubmitUpdate")
		console.log('%c 🌰 this.state.dataName: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataName);
		console.log('%c 🌰 this.state.dataEmail: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', this.state.dataEmail);
		console.log('%c 🍹 dataPassword: ', 'font-size:20px;background-color: #42b983;color:#fff;', this.state.dataPassword);
		console.log('%c 🍎 dataUserRole: ', 'font-size:20px;background-color: #465975;color:#fff;', this.state.dataUserRole);
		this.toggleModalsConfirmationUpdate()
		this.toggleModalsUpdateUserForm()
	}

	handleSubmitDelete = (e) => {
		console.log("user with id_user:" + this.state.dataIdUser + " has been deleted.");
		this.toggleModalsConfirmationDelete()
	}

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listUser, 
			usersPage, usersFetchLen, usersSortBy, totalUserAdministrator
		} = this.state

		console.dir(listUser)

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
					onHandleChange={this.handleChange}			
					onHandleSelectOption={this.handleSelectOption}					
					onHandleSubmit={this.toggleModalsConfirmationInsert}	
					dataName={this.state.dataName} 
					dataEmail={this.state.dataEmail} 
					dataPassword={this.state.dataPassword} 
					dataUserRole={this.state.dataUserRole}
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
					onHandleChange={this.handleChange}
					onHandleSelectOption={this.handleSelectOption}
					onHandleSubmit={this.toggleModalsConfirmationUpdate}	
					dataName={this.state.dataName} 
					dataEmail={this.state.dataEmail} 
					dataPassword={this.state.dataPassword} 
					dataUserRole={this.state.dataUserRole}
					statusForm="update"																				
				/>
			</Modal> 
		)

		const showModalsConfirmationInsert = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationInsert}
				toggleModal={this.toggleModalsConfirmationInsert}
				classNameModal={this.props.className}
				titleModalHeader="Add User Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleSubmitAdd}
			>
				are you sure to add this user ?
			</Modal> 
		)

		const showModalsConfirmationUpdate = (
			<Modal 
				modalIsOpen={this.state.modalConfirmationUpdate}
				toggleModal={this.toggleModalsConfirmationUpdate}
				classNameModal={this.props.className}
				titleModalHeader="Update User Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleSubmitUpdate}
			>
				are you sure to update this user ?
			</Modal> 
		)

		const showModalsConfirmationDelete =  (
			<Modal 
				modalIsOpen={this.state.modalConfirmationDelete}
				toggleModal={this.toggleModalsConfirmationDelete}
				classNameModal={this.props.className}
				titleModalHeader="Delete User Confirmation"
				sizeModal="md"
				centeredModal={true}
				showModalFooter={true}
				onClickButtonSubmit={this.handleSubmitDelete}
			>
				are you sure to delete this user ?
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
								title="List User Administrator" 
								isResponsive={true} 
								tHead={["#", "Name", "Email", "Registered Date", "Role", "Actions"]}
								sortItems={[
									{ id: "username", name: "Name"}, 
									{ id: "email", name: "Email" },
									{ id: "registered_date", name: "Registered Date"}
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
								noResult={totalUserAdministrator === 0}
								pagination={
									<Pagination 
										ariaLabel="Page navigation"
										size="sm"
										totalContent={totalUserAdministrator}
										currentPage={usersPage}
										contentMaxLength={usersFetchLen}
										onClick={this.onPaginationClick}
									/>
								}
								showButtonHeader={true}
								titleButtonHeader="Add New User"
								onClickButtonHeader={this.toggleModalsAddNewUserForm}
							>
								{ listUser ? 
									listUser.map((data, key) => (
										
										<tr key={key}>
											<th scope="row">
												{(key + 1) +  (usersPage * usersFetchLen)}
											</th>
											<td>{data.username}</td>
											<td>{data.email}</td>
											<td>
												{timestampToDateTime(new Date(data.registered_date).getTime())}
											</td>
											<td>{
													data.role == 1 ? <Badge color="primary">Super Admin</Badge> 
													: <Badge color="info">Admin</Badge>
												}
											</td>
											<td>
												<Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleModalsUpdateUserForm(data.id)}><i className="icon-edit"></i></Button>
												<Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => this.toggleDeleteUser(data)}><i className="icon-trash"></i></Button>
											</td>
										</tr>
									)) : (null)
								}
							</TableBox>
						</Col>
					</Row>
				</Container>
				 { showModalAddNewUser }
				 { showModalUpdateUser }
				 { showModalsConfirmationInsert }
				 { showModalsConfirmationUpdate }
				 { showModalsConfirmationDelete }
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListUser: bindActionCreators(getListUser, dispatch),
		getDetailUserAdministrator: bindActionCreators(getDetailUserAdministrator, dispatch),
		postAddUserAdministrator: bindActionCreators(postAddUserAdministrator, dispatch)
	}
}

export default connect(state => state, mapDispatchToProps)(ManagementUser)
