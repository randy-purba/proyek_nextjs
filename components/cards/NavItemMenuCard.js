import {
    Collapse,
    NavItem,
    NavLink,
    Label
} from 'reactstrap'

export default (props) => {
    return (
        <div>
            <NavItem
              className={`navListItem d-inline-block w-100 ${props.className}`}
              onClick={(e) => props.onHandleClick(props.menuId)}
            >
              <NavLink className="navItem animate-all position-relative d-inline-block w-100" 
                style={{paddingLeft: props.width, padding: "10px 0"}}>

                <span className="position-absolute d-block h-100"
                  style={{width: props.width}}>
                  <i className={`${props.iconName ? props.iconName : 'icon-plus-square'} font-22 absolute-center`} />
                </span>

                <h5 className="info m-0 font-16 absolute-center" style={{display: "inherit", width: "111px"}}>{props.title}</h5>

                <i className="icon-chevron-right font-22 float-right mx-3"
                  style={{
                    padding: "10px 0px",
                    transform: props.isOpenMenu
                      ? 'rotate(90deg)'
                      : 'rotate(0deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </NavLink>
            </NavItem>

            <Collapse isOpen={props.isOpenMenu}>
                {props.children}
            </Collapse>
        </div>
    )
}