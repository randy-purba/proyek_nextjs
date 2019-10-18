import { Label, Button } from 'reactstrap'
import ItemOneLineCard from '../../cards/ItemOneLineCard'
import ItemDetailWithImageCard from '../../cards/ItemDetailWithImagePreviewCard'
import ItemDetailWithVideoPreviewCard from '../../cards/ItemDetailWithVideoPreviewCard'
import TableBox from '../../tables'
import Pagination from '../../cards/PaginationCard'
import ItemValueLinkOneLineCard from '../../cards/ItemValueLinkOneLineCard'
import { timestampToDateTime, capitalizeString } from '../../functions'
import itemDetailWithVideoPreviewCard from '../../cards/ItemDetailWithVideoPreviewCard'

export default (props) => {

    const { 
        dataEvent, title, applicantsPage, applicantsFetchLen, totalListApplicant,
        onPaginationClick, toggleToEditInterviewPage, dataListApplicant, toggleToAddApplicantPage
    } = props

    console.dir(dataListApplicant)

    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <Label className="font-16 text-primary mb-3">{title}</Label> : ""}
            {
                dataEvent ? 
                (
                    <div>
                        <ItemOneLineCard 
                            title="Description"
                            value={capitalizeString(dataEvent.description)}
                        />
                        <ItemOneLineCard 
                            title="Max User & Zone"
                            value={dataEvent.max_user_and_zone}
                        />
                        <ItemOneLineCard 
                            title="Event Date"
                            value={timestampToDateTime(dataEvent.event_date)}
                        />
                        <ItemOneLineCard 
                            title="Expired Date"
                            value={timestampToDateTime(dataEvent.expired_event_date)}
                        />
                        <ItemOneLineCard 
                            title="Participants"
                            value={dataEvent.participants}
                        />
                        { dataListApplicant ? 
                            <TableBox 
                            title="List Applicant" 
                            isResponsive={false} 
                            tHead={["#", "Name", "Number Phone", "Registered Date","Action"]}
                            sortItems={[]}
                            // onSortClick={this.onSortInit}
                            sortValue="question"
                            deepSearch={false}
                            maxRangeDateFilter={5}
                            exportToFile={false}
                            exportData={dataListApplicant}
                            exportFileName={`List_Applicant_${(new Date()).getTime()}`}
                            // onFilterClick={this.onFilterInit}
                            // onKeySearch={this.onSearchKeyword}
                            // noResult={dataBankQuestion.questions.length === 0}
                            pagination={
                                <Pagination 
                                    ariaLabel="Page navigation"
                                    size="sm"
                                    totalContent={totalListApplicant}
                                    currentPage={applicantsPage}
                                    contentMaxLength={applicantsFetchLen}
                                    onClick={onPaginationClick}
                                />
                            }
                            showButtonHeader={true}
                            titleButtonHeader="Add Applicant"
                            onClickButtonHeader={(e) => toggleToAddApplicantPage(dataEvent.id)}>
                            {
                                dataListApplicant.map((data, key) => (
                                    <tr key={key}>
                                        <th scope="row">
                                            {(key + 1) + (applicantsPage * applicantsFetchLen) }
                                        </th>
                                        <td>{data.name}</td>
                                        <td>{data.number_phone}</td>
                                        <td>{timestampToDateTime(data.created_date)}</td>
                                        <td>
                                            <Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-eye"></i></Button>
                                            <Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-edit"></i></Button>
                                            <Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-trash"></i></Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </TableBox> : (null)
                    }
                        
                    </div>
                )
                : (null)
            }
            <Button size="sm" color="primary" className="float-right my-3 px-5 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => toggleToEditInterviewPage(dataEvent.id)}><i className="icon-edit"></i>Edit</Button>
        </div>
       
    )
}