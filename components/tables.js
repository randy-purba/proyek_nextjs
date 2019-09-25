import { useState } from 'react'
import { Table, Row, Col, Button, Label } from 'reactstrap'
import DatePicker from 'react-datepicker'
import FormSelect from './form/selectForm'
import FormInput from './form/inputForm'
import Workbook from 'react-excel-workbook'
import { addDays, timestampToDateTime } from './functions'

export default (props) => {

    const { 
        title, tHead, children, pagination, noResult, 
        deepSearch, onFilterClick, onKeySearch, 
        exportToFile, exportData, exportFileName,
        sortItems, sortValue, onSortClick, maxRangeDateFilter,
        showButtonHeader,titleButtonHeader, onClickButtonHeader
    } = props

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date(startDate))
    const [inputs, setInputs] = useState({keywords: ""})
    const [saveType, setSaveType] = useState({typeFile: undefined})
    const saveTypeOption = [{ id: 1, name: "EXCEL" }, { id: 2, name: "PDF"}]

    const handleExportSelect = (e) => {
        e.persist()
        setSaveType(() => ({typeFile: e.target.value}))
    }

    const handleSearchKeyword = (e) => {
        e.persist()
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
    }
    
    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            <Row>
                <Col xs="12" md="12">
                    {title ? <Label className="font-24 text-primary mb-3">{title}</Label> : ""}
                    {showButtonHeader ? <Button className="float-right px-lg-2" size="sm" color="info" onClick={onClickButtonHeader}>{titleButtonHeader}</Button> : ""}
                </Col>
                {
                    onKeySearch ?
                        <Col xs="12" md="6">
                            <div className="d-flex justify-content-start w-100">  
                                <FormInput 
                                    containerClassName="w-100"
                                    formClassName="px-2 bg-white mb-0"
                                    formId="yourFormFilterKeywords" 
                                    formType="text" 
                                    formName="keywords"
                                    formPlaceholder="Search Keywords" 
                                    formValue={inputs.keywords}
                                    formSize="sm"
                                    onChange={handleSearchKeyword} 
                                />
                                <Button size="sm" color="primary" onClick={() => onKeySearch(inputs.keywords)} className="mb-3 ml-2 px-2 font-12 text-uppercase" style={{marginTop: "5px"}}>Search</Button>
                            </div>
                        </Col> : ""
                }
                {
                    deepSearch && onFilterClick ?
                        <Col xs="12" md="6">
                            <div className="d-flex justify-content-start w-100">
                                <div className="mr-2 w-50" style={{paddingTop: "5px"}}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => {
                                            setStartDate(date)
                                            setEndDate(addDays(new Date(date), maxRangeDateFilter))
                                        }}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        dateFormat="dd/MM/yyyy"
                                        className="px-2 bg-white mb-0 form-control-sm form-control text-center"
                                    />
                                </div>
                                <div className="mr-2 w-50" style={{paddingTop: "5px"}}>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        minDate={startDate}
                                        maxDate={addDays(new Date(startDate), maxRangeDateFilter)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        dateFormat="dd/MM/yyyy"
                                        className="px-2 bg-white mb-0 form-control-sm form-control text-center"
                                    />
                                </div>
                                <Button size="sm" color="primary" onClick={() => onFilterClick(startDate.getTime(), endDate.getTime())} className="mb-3 px-2 font-12 text-uppercase" style={{marginTop: "5px", height: "31px"}}>Filter</Button>
                            </div>
                        </Col> : ""
                }
                {
                    exportToFile ?
                        <Col xs="12" md="4">
                            <div className="d-flex justify-content-end w-100">
                                <span className="mr-2 text-left font-14" style={{paddingTop: "10px", minWidth: "60px"}}>Save As :</span>
                                <FormSelect
                                    containerClassName="w-100"
                                    formId="yourExportToFile" 
                                    formName="ExportToFile" 
                                    formSize="sm"
                                    formPlaceholder="Select Format"
                                    formOptionData={saveTypeOption}
                                    formValue={saveType.typeFile}
                                    onChange={handleExportSelect}
                                />
                                {
                                    Number(saveType.typeFile) === 1 ?
                                        <Workbook 
                                            filename={`${exportFileName}.xlsx`} 
                                            element={
                                                <Button 
                                                    size="sm" 
                                                    color="primary" 
                                                    className="mb-3 ml-2 px-2 font-12 text-uppercase" 
                                                    style={{marginTop: "5px", height: "31px"}}
                                                ><i className="icon-arrow-down font-14" /></Button>
                                            }
                                        >
                                            <Workbook.Sheet data={exportData} name={exportFileName}>
                                                {
                                                    sortItems.map((item, key) => (
                                                        <Workbook.Column 
                                                            key={key} 
                                                            label={item.name} 
                                                            value={
                                                                item.name.toLowerCase().indexOf('date') > -1 ?
                                                                    row => timestampToDateTime(row.date, false)
                                                                    : item.id
                                                            }
                                                        />
                                                    ))
                                                }
                                            </Workbook.Sheet>
                                        </Workbook> 
                                        :
                                        Number(saveType.typeFile) === 2 ?
                                            <div>this is pdf</div> : ""
                                }
                                
                            </div>
                        </Col> : <Col xs="12" md="4" />
                }
                <Col xs="12" md="4" />
                {
                    sortItems && sortValue && onSortClick ?
                    <Col xs="12" md="4">
                        <div className="d-flex justify-content-end w-100">
                            <span className="mr-2 text-left font-14" style={{paddingTop: "10px", minWidth: "60px"}}>Sort By :</span>
                            <FormSelect
                                containerClassName="w-100"
                                withLabel={false}
                                formId="yourFormSortBy" 
                                formName="FormSortBy" 
                                formSize="sm"
                                formPlaceholder="Sort By"
                                formOptionData={sortItems}
                                formValue={sortValue}
                                onChange={onSortClick} 
                            />
                        </div>
                    </Col> : ""
                }
            </Row>
            <Table size="sm" responsive={props.isResponsive ? props.isResponsive : true}>
                {
                    tHead ?
                        <thead>
                            <tr>{tHead.map((data, key) => <th key={key} scope="col">{data}</th>)}</tr>
                        </thead> : ""
                }
                {
                    noResult ?
                        <tbody>
                            <tr>
                                <td className="pt-5 pb-2 text-center text-secondary" colSpan={tHead.length}>No Result Found</td>
                            </tr>
                        </tbody>
                        :
                        <tbody>{children}</tbody>
                }
                
            </Table>
            {pagination ? pagination : ""}
        </div>
    )
}