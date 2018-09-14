import FrontPage from '../Pages/FrontPage/FrontPage'
import DetailsPage from '../Pages/DetailsPage/DetailsPage'

const Routes = [
    {
        path:'/',
        component:FrontPage,
        exact:true
    },
    {
        path:/^\/[0-9]+\/[0-9]+\/[0-9a-zA-Z-]+$/,
        component:DetailsPage,
        exact:true
    }
]

export default Routes