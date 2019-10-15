import { Label, Button, Badge } from 'reactstrap'
import ItemOneLineCard from '../../cards/ItemOneLineCard'
import ItemDetailWithChildrenItem from '../../cards/ItemDetailWithChildrenItem'
import { timestampToDateTime, capitalizeString } from '../../functions'

export default (props) => {

    const { 
        dataQuestion, title, toggleEditButton
    } = props

    console.dir(dataQuestion)

    return (
        <div className="bg-white rounded shadow-sm p-3 mb-3 overflow-visible">
            {title ? <Label className="font-16 text-primary mb-3">{title}</Label> : ""}
            <ItemOneLineCard 
                title="Answer Type"
                value={dataQuestion.answer_type ? dataQuestion.answer_type.name : "-"}
            />
            <ItemOneLineCard 
                title="Question"
                value={dataQuestion.question_title}
            />
            { dataQuestion.answer_type.id == 2 ? 
				dataQuestion.answer.map((data, key) => (
                    <ItemOneLineCard 
                        key={key}
                        styleRow="font-16 ml-3"
                        title={"Answer ( " + (key + 1) + " )"}
                        value={ data.answer }
                    />
                )) : (null)
            }
            <ItemOneLineCard 
                title="Zone"
                value={ dataQuestion.zone ? capitalizeString(dataQuestion.zone.value) : "-"}
            />
            <ItemOneLineCard 
                title="Marker"
                value={ dataQuestion.marker ? capitalizeString(dataQuestion.marker.value) : "-"}
            />
            <ItemOneLineCard 
                title="Created Date"
                value={ dataQuestion.created_date ? timestampToDateTime(dataQuestion.created_date) : "-"}
            />
            <ItemOneLineCard 
                title="Updated Date"
                value={ dataQuestion.updated_date ? timestampToDateTime(dataQuestion.updated_date) : "-"}
            />
            <ItemOneLineCard 
                title="Published Date"
                value={ dataQuestion.published_date ? timestampToDateTime(dataQuestion.published_date) : "-"}
            />
            <ItemDetailWithChildrenItem title="Status">
                { dataQuestion.published ?  <Badge color="success" className="my-1">Published</Badge> : <Badge color="secondary" className="my-1">Unpublished</Badge>}
            </ItemDetailWithChildrenItem>
            <ItemOneLineCard 
                title="Score"
                value={dataQuestion.score}
            />
             <Button size="lg" color="primary" onClick={(e) => toggleEditButton(dataQuestion.id)} className="float-right mt-4 px-5 text-uppercase font-12">Edit</Button>
        </div>
    )
}