import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentBox from '../components/contentBox'
import SliderImageCard from '../components/cards/SliderImageCard'
import { Container, Row, Col } from 'reactstrap'
import { getListBanner } from '../components/actions'

class SampleBanner extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true }
		let stores = await store.getState()
		try {
			if(!stores.listBanner) await store.dispatch(getListBanner())
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
			listBanners: props.listBanner
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			listBanners: nextProps.listBanner,
			navIsOpen: nextProps.navIsOpen
		})
	}

	render() {
		const { showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listBanners } = this.state
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
						<Col lg="12">
							<ContentBox className="w-100 p-0 overflow-auto">
								<SliderImageCard datas={listBanners} />
							</ContentBox>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListBanner: bindActionCreators(getListBanner, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(SampleBanner)