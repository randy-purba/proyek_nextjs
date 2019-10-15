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
        dataInterview, title, dataQuestion, questionPage, questionFetchLen, totalListQuestion,
        onPaginationClick, toggleToEditInterviewPage, toggleToAddQuestionPage
    } = props

    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <Label className="font-16 text-primary mb-3">{title}</Label> : ""}
            {
                dataInterview ? 
                (
                    <div>
                        <ItemOneLineCard 
                            title="Title"
                            value={dataInterview.title}
                        />172.20.2.153
                        <ItemOneLineCard 
                            title="Total Question"
                            value={dataInterview.total_question}
                        />
                        <ItemDetailWithImageCard 
                            title="Thumbnail"
                            srcImage={dataInterview.cover_video}
                            idImage="thumbnailCoverVideo" 
                            widthImage="200px" 
                            heightImage="100px"
                        />
                        <ItemDetailWithVideoPreviewCard 
                            title="Video"
                            srcVideo={dataInterview.video_url}
                            idVideo="videoInterview"
                            widthVideo="100%"
                            heightVideo="75%"
                        />
                        <TableBox 
                            title="List Question" 
                            isResponsive={false} 
                            tHead={["#", "Question", "Question Type", "Zona", "Marker","Action"]}
                            sortItems={[
                            ]}
                            // onSortClick={this.onSortInit}
                            sortValue="question"
                            deepSearch={false}
                            maxRangeDateFilter={5}
                            exportToFile={false}
                            exportData={dataQuestion}
                            exportFileName={`Question_of_video${(new Date()).getTime()}`}
                            // onFilterClick={this.onFilterInit}
                            // onKeySearch={this.onSearchKeyword}
                            // noResult={dataBankQuestion.questions.length === 0}
                            pagination={
                                <Pagination 
                                    ariaLabel="Page navigation"
                                    size="sm"
                                    totalContent={totalListQuestion}
                                    currentPage={questionPage}
                                    contentMaxLength={questionFetchLen}
                                    onClick={onPaginationClick}
                                />
                            }
                            showButtonHeader={true}
                            titleButtonHeader="Add Question"
                            onClickButtonHeader={(e) => toggleToAddQuestionPage(dataInterview.id)}
                        >
                            {
                                dataQuestion.map((data, key) => (
                                    <tr key={key}>
                                        <th scope="row">
                                            {(key + 1) }
                                        </th>
                                        <td>{data.question_title}</td>
                                        <td>{data.answer_type.name}</td>
                                        <td>{data.zone.value}</td>
                                        <td>{data.marker.value}</td>
                                        <td>
                                            <Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-eye"></i></Button>
                                            <Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-edit"></i></Button>
                                            <Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-trash"></i></Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </TableBox>
                        
                    </div>
                )
                : (null)
            }
            <Button size="sm" color="primary" className="float-right my-3 px-5 font-14" style={{marginTop: "5px", height: "31px"}} onClick={(e) => toggleToEditInterviewPage(dataInterview.id)}><i className="icon-edit"></i>Edit</Button>
        </div>
       
    )
}