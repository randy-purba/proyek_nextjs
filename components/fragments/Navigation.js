import React from 'react'
import NavMenu from '../cards/NavMenuCard'

export default (props) => {
    const { headerHeight, navIsOpen, navMaxWidth, navMinWidth } = props
    return (
        <div 
            className="navList position-fixed d-block overflow-hidden border-right animate-width fast" 
            style={{width: navIsOpen ? navMaxWidth : navMinWidth}}
        >
            <div 
                className="navListWrapper pl-0 m-0"
                style={{
                    zIndex: 1, 
                    paddingTop: headerHeight,
                    width: navMaxWidth
                }} 
            >
                {/* <NavMenu link="/dashboard" href="/dashboard" width={navMinWidth} title="Dashboard" iconName="icon-trello" className="pt-2" />
                <NavMenu link="/statistic" href="/statistic" width={navMinWidth} title="Statistic" iconName="icon-trending-up" />
                <NavMenu link="/sample-form" href="/sampleForm" width={navMinWidth} title="Sample Form" iconName="icon-hash" />
                <NavMenu link="/sample-banner" href="/sampleBanner" width={navMinWidth} title="Sample Banner" iconName="icon-image" /> */}
                <NavMenu link="/management-users" href="/managementUser" width={navMinWidth} title="Management User" iconName="icon-users" />
                <NavMenu link="/bank-soal" href="/listBankQuestion" width={navMinWidth} title="Bank Soal" iconName="icon-database" />
                <NavMenu link="/report-interview" href="/reportInterview" width={navMinWidth} title="Report Interview" iconName="icon-headphones" />
                <div className="navListItem d-inline-block w-100">
                    <div 
                        className="navItem animate-all position-relative d-inline-block w-100"
                        style={{
                            paddingLeft: navMinWidth,
                            cursor: "pointer"
                        }}
                    >
                        <span className="position-absolute d-block h-100" style={{width: navMinWidth}}>
                            <i className="icon-power font-22 absolute-center" />
                        </span>
                        <span className="ml-1 h-100 d-flex">
                            <h5 className="info m-0 font-16">Keluar</h5>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}