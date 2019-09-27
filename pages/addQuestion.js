import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Button } from 'reactstrap'
import { regexHtmlTag, convertStringToBoolean } from '../components/functions'
import { getListCities } from '../components/actions'
import FormQuestion from '../components/fragments/question/questionFormNew'

class AddQuestion extends React.Component {
	static async getInitialProps({ store }) {
		let props = { showHeader: true, showFooter: true }
		let stores = await store.getState()
		try {
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
			valueQuestionTitle:"", 
			valueAnswerOption:2,
			valueZone:1,
			valueMarker:0,
			valueScore:0,
			valueAnswerChoiceA:"",
			valueAnswerChoiceB:"",
			valueAnswerChoiceC:"",
			valueAnswerChoiceD:"",
			valueCheckboxChoiceA:false, 
			valueCheckboxChoiceB:false, 
			valueCheckboxChoiceC:false, 
			valueCheckboxChoiceD:false,
			listCity: props.listCity
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			listCity: nextProps.listCity,
			navIsOpen: nextProps.navIsOpen
		})
	}

	handleCheckbox = (e) => {
		const target = e.target, value = target.value, name = target.name
		const checkboxChecked = !convertStringToBoolean(value)
		this.setState({ [name]: checkboxChecked })
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

	handleSubmit = (e) => {

		console.log('%c 🦀 valueQuestionTitle: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', this.state.valueQuestionTitle);
		console.log('%c 🥛 valueAnswerOption: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', this.state.valueAnswerOption);
		console.log('%c 🍿 valueZone: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', this.state.valueZone);
		console.log('%c 🥐 valueMarker: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', this.state.valueMarker);
		console.log('%c 🍾 valueScore: ', 'font-size:20px;background-color: #FCA650;color:#fff;', this.state.valueScore);
		console.log('%c 🥨 valueAnswerChoiceA: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', this.state.valueAnswerChoiceA);
		console.log('%c 🥖 valueAnswerChoiceB: ', 'font-size:20px;background-color: #42b983;color:#fff;', this.state.valueAnswerChoiceB);
		console.log('%c 🍮 valueAnswerChoiceC: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', this.state.valueAnswerChoiceC);
		console.log('%c 🥟 valueAnswerChoiceD: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', this.state.valueAnswerChoiceD);
		console.log('%c 🍋 valueCheckboxChoiceA: ', 'font-size:20px;background-color: #B03734;color:#fff;', this.state.valueCheckboxChoiceA);
		console.log('%c 🥟 valueCheckboxChoiceB: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', this.state.valueCheckboxChoiceB);
		console.log('%c 🥪 valueCheckboxChoiceC: ', 'font-size:20px;background-color: #FCA650;color:#fff;', this.state.valueCheckboxChoiceC);
		console.log('%c 🍠 valueCheckboxChoiceD: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', this.state.valueCheckboxChoiceD);
	
	}
 
	render() {
		const { showHeader, headerHeight, navIsOpen, navMinWidth, navMaxWidth, listCity,
				valueQuestionTitle, valueAnswerOption, valueZone, valueMarker, valueScore,
				valueAnswerChoiceA, valueAnswerChoiceB, valueAnswerChoiceC, valueAnswerChoiceD,
				valueCheckboxChoiceA, valueCheckboxChoiceB, valueCheckboxChoiceC, valueCheckboxChoiceD,
		} = this.state
		return (
			<div 
				role="main" 
				className="animate-all fast bg-light"
				style={{
					paddingTop: showHeader ? headerHeight : 0,
					paddingLeft: navMinWidth,
					overflowX: "hidden"
				}}>
				<Container 
					fluid 
					className="contentContainer px-4 pt-4 pb-2"
					style={{
						marginLeft: navIsOpen ? navMaxWidth-navMinWidth : 0,
						width: navIsOpen ? `calc(100% - ${navMaxWidth-navMinWidth}px)` : '100%'
					}}>
					<FormQuestion
						title="Add New Question"
						valueQuestionTitle={valueQuestionTitle}
						valueAnswerOption={valueAnswerOption}
						valueZone={valueZone}
						valueMarker={valueMarker}
						valueScore={valueScore}
						valueAnswerChoiceA={valueAnswerChoiceA} 
						valueAnswerChoiceB={valueAnswerChoiceB} 
						valueAnswerChoiceC={valueAnswerChoiceC} 
						valueAnswerChoiceD={valueAnswerChoiceD}
						valueCheckboxChoiceA={valueCheckboxChoiceA} 
						valueCheckboxChoiceB={valueCheckboxChoiceB} 
						valueCheckboxChoiceC={valueCheckboxChoiceC} 
						valueCheckboxChoiceD={valueCheckboxChoiceD}
						listAnswerOption={[
							{"id": 1, "name": "Single Choice", "value": "single_choice"},
							{"id": 2, "name": "Multiple Choice", "value": "multiple_choice"},
							{"id": 3, "name": "Essay", "value": "essay"},
						]} 
						listZone={listCity}
						onHandleChange={this.handleChange} 
						onHandleCheckbox={this.handleCheckbox}
						onHandleSelectOption={this.handleSelectOption}
						onHandleSubmit={this.handleSubmit}
					/>
				</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getListCities: bindActionCreators(getListCities, dispatch)
	}
}
export default connect(state => state, mapDispatchToProps)(AddQuestion)