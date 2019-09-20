import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LineChartBox from '../components/charts/line'
import HorizontalBarChartBox from '../components/charts/horizontalBar'
import PieDoubleChartBox from '../components/charts/pieDouble'
import PieSimpleChartBox from '../components/charts/pie'
import RadarChartBox from '../components/charts/radar'
import SimpleAreaChartBox from '../components/charts/simpleArea'
import StackedAreaChartBox from '../components/charts/stackedArea'
import BrushBarChartBox from '../components/charts/brushBar'
import SpeedometerChart from '../components/charts/speedometer'
import { Container, Row, Col } from 'reactstrap'
import { getLineChart, getGlobalChart, getPieDoubleChart, getBrushBarChart } from '../components/actions'

class Statistic extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true }
		let stores = store.getState()
		try {
			if(!stores.lineChart) await store.dispatch(getLineChart())
			if(!stores.globalChart) await store.dispatch(getGlobalChart())
			if(!stores.pieDoubleChart) await store.dispatch(getPieDoubleChart())
			if(!stores.brushBarChart) await store.dispatch(getBrushBarChart())
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
			lineChart: props.lineChart,
			globalChart: props.globalChart,
			pieDoubleChart: props.pieDoubleChart,
			brushBarChart: props.brushBarChart
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			lineChart: nextProps.lineChart,
			globalChart: nextProps.globalChart,
			pieDoubleChart:  nextProps.pieDoubleChart,
			brushBarChart: nextProps.brushBarChart,
			navIsOpen: nextProps.navIsOpen
		})
	}

	render() {
		const { showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, lineChart, globalChart, pieDoubleChart, brushBarChart } = this.state

		const radarChartData = [
			{ subject: 'Math', A: 120, B: 110, fullMark: 150 },
			{ subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
			{ subject: 'English', A: 86, B: 130, fullMark: 150 },
			{ subject: 'Geography', A: 99, B: 100, fullMark: 150 },
			{ subject: 'Physics', A: 85, B: 90, fullMark: 150 },
			{ subject: 'History', A: 65, B: 85, fullMark: 150 },
		]
		
		const pieChartData = [
			{ name: 'Group A', value: 400 }, 
			{ name: 'Group B', value: 300 },
			{ name: 'Group C', value: 300 }, 
			{ name: 'Group D', value: 200 }
		]

		const speedometerChartData = {
			maxValue: 100,
			value: 87
		}

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
						<Col xs="12" md="6">
							<LineChartBox title="Line Chart" width={"100%"} height={300} data={lineChart} />
						</Col>
						<Col sm="12" md="6">
							<HorizontalBarChartBox title="Horizontal Bar Chart" width={"100%"} height={300} data={globalChart} />
						</Col>
						<Col sm="12" md="12">
							<BrushBarChartBox title="Brush Bar Chart" width={"100%"} height={300} data={brushBarChart}/>
						</Col>
						<Col sm="12" md="6">
							<SimpleAreaChartBox title="Simple Area Chart" width={"100%"} height={300} data={globalChart} />
						</Col>
						<Col sm="12" md="6">
							<StackedAreaChartBox title="Stacked Area Chart" width={"100%"} height={300} data={globalChart} />
						</Col>
						<Col sm="12" md="6">
							<PieDoubleChartBox title="Pie Double Chart" width={"100%"} height={300} data={pieDoubleChart} label={true} />
						</Col>
						<Col sm="12" md="6">
							<PieSimpleChartBox title="Pie Simple Chart" width={"100%"} height={300} data={pieChartData} label={true} />
						</Col>
						<Col sm="12" md="6">
							<RadarChartBox title="Radar Chart" width={"100%"} height={300} data={radarChartData} />
						</Col>
						<Col sm="12" md="6">
							<SpeedometerChart title="Speedometer Chart" width={"100%"} height={300} data={speedometerChartData} />
						</Col>
						<Col sm="12" md="6">
							<div className="bg-white rounded shadow-sm p-3 mb-4 overflow-auto">
								<h5 className="display-5 text-primary mb-3">Chart 10</h5>
								<div style={{width: "100%", height: 300}}>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getLineChart: bindActionCreators(getLineChart, dispatch),
		getGlobalChart: bindActionCreators(getGlobalChart, dispatch),
		getPieDoubleChart: bindActionCreators(getPieDoubleChart, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(Statistic)