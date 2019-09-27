import React from 'react'
import { Container } from 'reactstrap'
import Navigation from './Navigation'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navLogo: props.companyName
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name) {
        this.setState(prevState => {
          const isOpen = prevState[`isOpen${name}`];
    
          return {
            [`isOpen${name}`]: !isOpen,
          };
        });
      };

    render() {
        const { showHeader, companyName, headerHeight, onClick, navIsOpen, navMaxWidth, navMinWidth } = this.props
        return (
            showHeader ?
                <div className="fixed-top">
                    <div 
                        className="navBar position-relative bg-primary" 
                        style={{height: headerHeight, zIndex: 2}}
                    >
                        <Container fluid className="position-relative h-100 border-bottom text-white">
                            <div className="navBarWrapper animate-all fast position-absolute w-100">
                                <div 
                                    className={`navButtonWrapper animate-all fast h-100 position-absolute ${navIsOpen ? 'bg-white' : 'bg-transparent'}`}
                                    style={{width: navIsOpen ? navMaxWidth : navMinWidth}}
                                >
                                    <div className="position-relative d-block w-100 h-100">
                                        <div 
                                            className={`navButton animate-all rounded-circle d-block ${navIsOpen ? 'opened mr-2' : 'closed m-auto'}`} 
                                            onClick={onClick}
                                        >
                                            <i className={`icon ${navIsOpen ? 'icon-chevron-left' : 'icon-menu'} absolute-center font-22`} />
                                        </div>
                                    </div>
                                </div>
                                <div 
                                    className="navLogo shadow-sm text-white h-100 d-flex position-relative" 
                                    style={{
                                        zIndex: 2,
                                        marginLeft: navIsOpen ? navMaxWidth : navMinWidth
                                    }}
                                >
                                    <h5 className="ml-4 mb-0 align-self-center">{companyName}</h5>
                                    <div 
                                        className="userSettings position-absolute h-100 text-right"
                                        style={{top: 0, right: 0, zIndex: 1}}
                                    >
                                        <h5 style={{padding: "8px"}} className="text-center bg-transparent d-inline-block rounded-circle mb-0 mt-2">
                                            <span className="icon-bell font-22 text-white" />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Navigation {...this.props} stateParent={this.state} onHandleClick={this.handleClick}/>
                </div> : ""
        )
    }
}