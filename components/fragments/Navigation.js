import React from 'react'
import NavMenu from '../cards/NavMenuCard'
import NavSubMenu from '../cards/NavItemMenuCard'

export default (props) => {
    const { headerHeight, navIsOpen, navMaxWidth, navMinWidth, stateParent, onHandleClick } = props

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

                {/* To create menu that have sub menu, NavSubMenu must have isOpenMenu that combination stateParent.isOpen + data of menuId */}
                <NavSubMenu width={navMinWidth} menuId="ManagementUser"  title="User Admin Management" iconName="icon-user" isOpenMenu={stateParent.isOpenManagementUser} onHandleClick={onHandleClick}>
                    {/* <NavMenu link="/add-user" href="/user/addUser" width={navMinWidth} title="Add User" iconName="icon-plus-square" /> */}
                    <NavMenu link="/list-users" href="/user/managementUser" width={navMinWidth} title="Administrator" iconName="icon-list1" />
                    <NavMenu link="/applicants" href="/user/managementApplicant" width={navMinWidth} title="Applicant" iconName="icon-list1" />
                </NavSubMenu>

                <NavSubMenu width={navMinWidth} menuId="Question" title="Question" iconName="icon-database" isOpenMenu={stateParent.isOpenQuestion} onHandleClick={onHandleClick}>
                    <NavMenu link="/add-question" href="/question/addQuestion" width={navMinWidth} title="Add Question" iconName="icon-plus-square" />
                    <NavMenu link="/list-question" href="/question/listQuestion" width={navMinWidth} title="List Question" iconName="icon-list1" />
                </NavSubMenu>

                <NavSubMenu width={navMinWidth} menuId="Interview" title="Interview" iconName="icon-user-tie" isOpenMenu={stateParent.isOpenInterview} onHandleClick={onHandleClick}>
                    <NavMenu link="/add-interview" href="/interview/addInterview" width={navMinWidth} title="Add Interview" iconName="icon-plus-square" />
                    <NavMenu link="/list-interview" href="/interview/listInter  view" width={navMinWidth} title="List Interview" iconName="icon-list1" />
                </NavSubMenu>

                <NavSubMenu width={navMinWidth} menuId="ReportInterview" title="Report Interview Video" iconName="icon-help-circle" isOpenMenu={stateParent.isOpenReportInterview} onHandleClick={onHandleClick}>
                    <NavMenu link="/report-interview" href="/reportInterview" width={navMinWidth} title="List Applicant" iconName="icon-users" />
                </NavSubMenu>

                {/* <NavMenu link="/applicants" href="/applicants" width={navMinWidth} title="Applicants" iconName="icon-users" />
                <NavMenu link="/bank-soal" href="/listBankQuestion" width={navMinWidth} title="Bank Soal" iconName="icon-database" /> */}
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