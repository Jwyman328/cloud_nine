import {withRouter,RouteComponentProps} from 'react-router-dom'

export interface MenuProps extends RouteComponentProps {
    title:string,
    route?:string,
}
