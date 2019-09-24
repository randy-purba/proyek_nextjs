import { Label, Row, Col, Button } from 'reactstrap'
import { timestampToDateTime } from '../../functions'
import TableBox from '../../tables'


export default (props) => {

    const { 
        dataBankQuestion, title, totalQuestions, questionSortBy
    } = props

    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <Label className="font-16 text-primary mb-3">{title}</Label> : ""}
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Question Bank Category</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{dataBankQuestion.name}</Label>
                </Col>
            </Row>
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Question Type</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{dataBankQuestion.question_type}</Label>
                </Col>
            </Row>
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Created Date</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{dataBankQuestion.date ? timestampToDateTime(dataBankQuestion.date) : ""}</Label>
                </Col>
            </Row>
            <Row>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16 text-primary">Education</Label>
                </Col>
                <Col xs="2" sm="2" md="2">
                    <Label className="font-16 text-primary">:</Label>
                </Col>
                <Col xs="5" sm="5" md="5">
                    <Label className="font-16">{dataBankQuestion.education}</Label>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12" md="12">
                    <Label className="font-16 text-primary">List Question</Label>
                    <TableBox 
                        title="Bank Soal" 
                        isResponsive={false} 
                        tHead={["#", "Zona", "Question Type", "Question","Action"]}
                        sortItems={[
                            { id: "name", name: "Category"}, 
                            { id: "question_type", name: "Question Type" }, 
                            { id: "date", name: "Created Date" }, 
                            { id: "education", name: "Education"}
                        ]}
                        // onSortClick={this.onSortInit}
                        sortValue={questionSortBy}
                        deepSearch={false}
                        maxRangeDateFilter={5}
                        exportToFile={false}
                        exportData={dataBankQuestion.questions}
                        exportFileName={`Category_Bank_Soal_${(new Date()).getTime()}`}
                        // onFilterClick={this.onFilterInit}
                        // onKeySearch={this.onSearchKeyword}
                        noResult={dataBankQuestion.questions.length === 0}
                        // pagination={
                        //     <Pagination 
                        //         ariaLabel="Page navigation"
                        //         size="sm"
                        //         totalContent={totalQuestions}
                        //         currentPage={transactionPage}
                        //         contentMaxLength={transactionFetchLen}
                        //         // onClick={this.onPaginationClick}
                        //     />
                        // }
                    >
                        {
                            dataBankQuestion.questions.map((data, key) => (
                                <tr key={key}>
                                    <th scope="row">
                                        {(key + 1) }
                                    </th>
                                    <td>{data.zona}</td>
                                    <td>{data.question_type}</td>
                                    <td>{data.question}</td>
                                    <td>
                                        <Button size="sm" color="secondary" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-eye"></i></Button>
                                        <Button size="sm" color="warning" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-edit"></i></Button>
                                        <Button size="sm" color="danger" className="mr-2 px-2 font-14" style={{marginTop: "5px", height: "31px"}}><i className="icon-trash"></i></Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </TableBox>
                </Col>
            </Row>

        </div>
    )
}