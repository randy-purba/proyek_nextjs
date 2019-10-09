import { Label } from 'reactstrap'
import ItemOneLineCard from '../../cards/ItemOneLineCard'
import ItemDetailWithImageCard from '../../cards/ItemDetailWithImagePreviewCard'
import ItemDetailWithVideoPreviewCard from '../../cards/itemDetailWithVideoPreviewCard'
import ItemValueLinkOneLineCard from '../../cards/ItemValueLinkOneLineCard'
import { timestampToDateTime, capitalizeString } from '../../functions'
import itemDetailWithVideoPreviewCard from '../../cards/itemDetailWithVideoPreviewCard'

export default (props) => {

    const { 
        dataInterview, title
    } = props

    console.dir(dataInterview)

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
                        />
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
                        <ItemOneLineCard 
                            title="Total Question"
                            value={dataInterview.total_question}
                        />
                    </div>
                )
                : (null)
            }
            
        </div>
       
    )
}