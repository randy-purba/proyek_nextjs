import Link from 'next/link'

export default (props) => {
    return (
        <div className={`navListItem d-inline-block w-100 ${props.className}`}>
            <Link href={props.href} as={props.link}>
                <a 
                    className="navItem animate-all position-relative d-inline-block w-100 py-2"
                    style={{paddingLeft: props.width, padding: "10"}}
                    title={props.title}
                >
                    <span 
                        className="position-absolute d-block h-100"
                        style={{width: props.width}}
                    >
                        <i className={`${props.iconName ? props.iconName : 'icon-plus-square'} font-22 absolute-center`} />
                    </span>
                    <span className="ml-1 h-100 d-flex">
                        <h5 className="info m-0 font-16">{props.title}</h5>
                    </span>
                </a>
            </Link>
        </div>
    )
}