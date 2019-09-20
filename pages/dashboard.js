import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'reactstrap'
import TableBox from '../components/tables'
import Pagination from '../components/cards/PaginationCard'
import SimpleReportCard from '../components/cards/SimpleReportCard'
import { getListTransaction, getPointCollectionToday, getTotalSalesToday, getItemsSoldToday } from '../components/actions'
import { timestampToDateTime, numberToCurrency, numberWithDot } from '../components/functions'

class Dashboard extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true, transanctionPage: 0, transactionMaxLen: 10 }
		let stores = await store.getState()
		try {
			// Scope List Transaction
			if(!stores.listTransaction) await store.dispatch(getListTransaction(props.transanctionPage, props.transactionMaxLen))
			
			// Scope to get Points Collected Today
			if(!stores.pointsCollectedToday) await store.dispatch(getPointCollectionToday())

			// Scope to get Total Sales Today
			if(!stores.totalSalesToday) await store.dispatch(getTotalSalesToday())

			// Scope to get Items Sold Today
			if(!stores.itemSoldToday) await store.dispatch(getItemsSoldToday())

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
			listTransaction: props.listTransaction,
			totalTransaction: props.totalTransaction,
			pointsCollectedToday: props.pointsCollectedToday,
			totalSalesToday: props.totalSalesToday,
			itemSoldToday: props.itemSoldToday
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			navIsOpen: nextProps.navIsOpen,
			listTransaction: nextProps.listTransaction,
			totalTransaction: nextProps.totalTransaction,
			pointsCollectedToday: nextProps.pointsCollectedToday,
			totalSalesToday: nextProps.totalSalesToday,
			itemSoldToday: nextProps.itemSoldToday,
			lineChart: nextProps.lineChart
		})
	}

	onPaginationClick = (page) => {
		const { transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, transactionSearchKey } = this.state
		this.props.getListTransaction(page, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, transactionSearchKey)
		this.setState({transactionPage: page})
	}

	onFilterInit = (dateFrom, dateTo) => {
		const { transactionFetchLen, transactionSortBy, transactionSearchKey } = this.state
		this.props.getListTransaction(0, transactionFetchLen, dateFrom, dateTo, transactionSortBy, transactionSearchKey)
		this.setState({transactionPage: 0, transactionDateFrom: dateFrom, transactionDateTo: dateTo})
	}

	onSortInit = (e) => {
		const target = e.target, value = target.value
		const { transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSearchKey } = this.state
		this.props.getListTransaction(0, transactionFetchLen, transactionDateFrom, transactionDateTo, value, transactionSearchKey)
		this.setState({transactionPage: 0, transactionSortBy: value})
	}

	onSearchKeyword = (keywords) => {
		const { transactionPage, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy } = this.state
		this.props.getListTransaction(transactionPage, transactionFetchLen, transactionDateFrom, transactionDateTo, transactionSortBy, keywords)
		this.setState({transactionSearchKey: keywords})
	}

	render() {
		const { 
			showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, 
			listTransaction, totalTransaction, transactionPage, transactionFetchLen, transactionSortBy, 
			pointsCollectedToday, totalSalesToday,itemSoldToday
		} = this.state
		
		// Sample Data
		const date = new Date()

		// to set lastSync to current datetime
		pointsCollectedToday.lastSync = date.getTime()
		totalSalesToday.lastSync = date.getTime()
		itemSoldToday.lastSync = date.getTime()
		
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
						<Col xs="12" md="4">
							<SimpleReportCard className="bg-primary text-white" title="Today Total Sales">
								<div>
									<h4 className="m-0 text-right">
										<i className={`mr-2 ${totalSalesToday.today > totalSalesToday.yesterday ? 'icon-arrow-up' : 'icon-arrow-down'}`} />
										<b>{numberToCurrency(totalSalesToday.today, "IDR", false)}</b>
									</h4>
									<p className="text-right font-14">Yesterday: <b>{numberToCurrency(totalSalesToday.yesterday, "IDR", false)}</b></p>
									<p className="m-0 text-right font-10">
										{timestampToDateTime(totalSalesToday.lastSync, true)}
									</p>
								</div>
							</SimpleReportCard>
						</Col>
						<Col xs="12" md="4">
							<SimpleReportCard className="bg-success text-white" title="Today Points Collected">
								<div>
									<h4 className="m-0 text-right">
									<i className={`mr-2 ${pointsCollectedToday.today > pointsCollectedToday.yesterday ? 'icon-arrow-up' : 'icon-arrow-down'}`} />
										<b>{numberWithDot(pointsCollectedToday.today)} {pointsCollectedToday.today > 1 ? 'Points' : 'Point'}</b>
									</h4>
									<p className="text-right font-14">Yesterday: <b>{numberWithDot(pointsCollectedToday.yesterday)} {pointsCollectedToday.yesterday > 1 ? 'Points' : 'Point'}</b></p>
									<p className="m-0 text-right font-10">
										{timestampToDateTime(pointsCollectedToday.lastSync, true)}
									</p>
								</div>
							</SimpleReportCard>
						</Col>
						<Col xs="12" md="4">
							<SimpleReportCard className="bg-danger text-white" title="Today Item's Sold">
								<div>
									<h4 className="m-0 text-right">
										<i className={`mr-2 ${itemSoldToday.today > itemSoldToday.yesterday ? 'icon-arrow-up' : 'icon-arrow-down'}`} />
										<b>{numberWithDot(itemSoldToday.today)} {itemSoldToday.today > 1 ? 'Items' : 'Item'}</b>
									</h4>
									<p className="text-right font-14">Yesterday: <b>{numberWithDot(itemSoldToday.yesterday)} {itemSoldToday.yesterday > 1 ? 'Items' : 'Item'}</b></p>
									<p className="m-0 text-right font-10">
										{timestampToDateTime(itemSoldToday.lastSync, true)}
									</p>
								</div>
							</SimpleReportCard>
						</Col>
						<Col xs="12">
							<TableBox 
								title="Today's Item Sales" 
								isResponsive={true} 
								tHead={["#", "Item Name", "QTY", "Item Price", "Total Price", "Buy Date"]}
								sortItems={[
									{ id: "name", name: "Item Name"}, 
									{ id: "qty", name: "Quantity" }, 
									{ id: "price", name: "Item Price" }, 
									{ id: "total", name: "Total Price"}, 
									{ id: "date", name: "Buy Date" }
								]}
								onSortClick={this.onSortInit}
								sortValue={transactionSortBy}
								deepSearch={true}
								maxRangeDateFilter={5}
								exportToFile={true}
								exportData={listTransaction}
								exportFileName={`Transaction${(new Date()).getTime()}`}
								onFilterClick={this.onFilterInit}
								onKeySearch={this.onSearchKeyword}
								noResult={listTransaction.length === 0}
								pagination={
									<Pagination 
										ariaLabel="Page navigation"
										size="sm"
										totalContent={totalTransaction}
										currentPage={transactionPage}
										contentMaxLength={transactionFetchLen}
										onClick={this.onPaginationClick}
									/>
								}
							>
								{
									listTransaction.map((data, key) => (
										<tr key={key}>
											<th scope="row">
												{(key + 1) +  (transactionPage * transactionFetchLen)}
											</th>
											<td>{data.name}</td>
											<td>{data.qty}</td>
											<td>
												{numberToCurrency(data.price, data.currency, false)}
											</td>
											<td>
												{numberToCurrency((data.qty * data.price), data.currency, false)}
											</td>
											<td>
												{timestampToDateTime(data.date, false)}
											</td>
										</tr>
									))
								}
							</TableBox>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListTransaction: bindActionCreators(getListTransaction, dispatch),
		getPointCollectionToday: bindActionCreators(getPointCollectionToday, dispatch),
		getTotalSalesToday: bindActionCreators(getTotalSalesToday, dispatch),
		getItemsSoldToday: bindActionCreators(getItemsSoldToday, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(Dashboard)