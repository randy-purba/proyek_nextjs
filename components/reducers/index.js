import { combineReducers } from 'redux'
import BannerReducer from './BannerReducers'
import ListCityReducer from './ListCityReducers'
import ListTransactionReducer from './ListTransactionReducers'
import LineChartReducer from './LineChartReducers'
import TotalTransactionReducer from './TotalTransactionReducers'
import GlobalChartReducer from './GlobalChartReducers'
import PieDoubleChartReducer from './PieDoubleChartReducers'
import PointsCollectedTodayReducer from './PointsCollectedTodayReducers'
import TotalSalesTodayReducer from './TotalSalesTodayReducers'
import ItemSoldTodayReducer from './ItemSoldTodayReducers';
import BrushBarChartReducer from './BrushBarChartReducers';
import ListBankQuestionReducer from './ListBankQuestionReducers';
import TotalBankQuestionReducer from './TotalBankQuestionReducers';
import ListUsersReducer from './ListUsersReducers';

export default combineReducers({
    listBanner: BannerReducer,
    listCity: ListCityReducer,
    listTransaction: ListTransactionReducer,
    totalTransaction: TotalTransactionReducer,
    lineChart: LineChartReducer,
    globalChart: GlobalChartReducer,
    pieDoubleChart: PieDoubleChartReducer,
    pointsCollectedToday: PointsCollectedTodayReducer,
    totalSalesToday: TotalSalesTodayReducer,
    itemSoldToday: ItemSoldTodayReducer,
    brushBarChart: BrushBarChartReducer,
    listBankQuestion: ListBankQuestionReducer,
    totalBankQuestion: TotalBankQuestionReducer,
    listUser: ListUsersReducer
})
