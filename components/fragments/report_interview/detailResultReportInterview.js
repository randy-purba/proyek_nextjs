import { Label } from 'reactstrap'
import ItemOneLineCard from '../../cards/ItemOneLineCard'
import ItemValueLinkOneLineCard from '../../cards/ItemValueLinkOneLineCard'

export default (props) => {

    const { 
        dataResultReportInterview, title, onClickViewResult
    } = props

    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <Label className="font-16 text-primary mb-3">{title}</Label> : ""}
            <ItemOneLineCard 
                title="Name"
                value={dataResultReportInterview.name}
            />
            <ItemOneLineCard 
                title="Phone Number"
                value={dataResultReportInterview.phone_number}
            />
            <ItemValueLinkOneLineCard 
                title="Pre Test"
                value={dataResultReportInterview.detail_result ? dataResultReportInterview.detail_result.pre_test : "" }
                onClickButton={onClickViewResult}
                title_button="View Result"
            />
            <ItemValueLinkOneLineCard 
                title="Video 1"
                value={dataResultReportInterview.detail_result ? dataResultReportInterview.detail_result.video_1 : "" }
                onClickButton={onClickViewResult}
                title_button="View Result"
            />
            <ItemValueLinkOneLineCard 
                title="Video 2"
                value={dataResultReportInterview.detail_result ? dataResultReportInterview.detail_result.video_2 : "" }
                onClickButton={onClickViewResult}
                title_button="View Result"
            />
            <ItemValueLinkOneLineCard 
                title="Video 3"
                value={dataResultReportInterview.detail_result ? dataResultReportInterview.detail_result.video_3 : "" }
                onClickButton={onClickViewResult}
                title_button="View Result"
            />
            <ItemValueLinkOneLineCard 
                title="Video 4"
                value={dataResultReportInterview.detail_result ? dataResultReportInterview.detail_result.video_4 : "" }
                onClickButton={onClickViewResult}
                title_button="View Result"
            />
            <ItemValueLinkOneLineCard 
                title="Video 5"
                value={dataResultReportInterview.detail_result ? dataResultReportInterview.detail_result.video_5 : "" }
                onClickButton={onClickViewResult}
                title_button="View Result"
            />
            <ItemValueLinkOneLineCard 
                title="Video 6"
                value={dataResultReportInterview.detail_result ? dataResultReportInterview.detail_result.video_6 : "" }
                onClickButton={onClickViewResult}
                title_button="View Result"
            />
            <ItemOneLineCard 
                title="Score"
                value={dataResultReportInterview.total_score}
            />
        </div>
    )
}