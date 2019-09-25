import { Label } from 'reactstrap'
import ItemOneLineCard from '../../cards/ItemOneLineCard'
import ItemValueLinkOneLineCard from '../../cards/ItemValueLinkOneLineCard'
import ResultInterviewCard from '../../cards/ResultInterviewCard'

export default (props) => {

    const { 
        dataViewResult, title, onClickViewResult
    } = props

    console.dir(dataViewResult)

    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <Label className="font-16 text-primary mb-3">{title}</Label> : ""}
            <ItemOneLineCard 
                title="Type"
                value={dataViewResult.type}
            />
            { dataViewResult.type=="Pre Test" ? 
                dataViewResult.user_answer.map((data, key) => (
                    <ResultInterviewCard 
                        number={key}
                        question={data.question}
                        answer={data.answer}
                    />
                )) 
            : ""}
            <ItemOneLineCard 
                title="Score"
                value={dataViewResult.score}
            />
        </div>
    )
}