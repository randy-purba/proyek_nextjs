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
import DetailBankQuestionReducer from './DetailBankQuestionReducers';
import ListReportInterviewReducer from './ListReportInterviewReducers';
import TotalListReportInterviewReducer from './TotalListReportInterviewReducers';
import ListQuestionReducer from './ListQuestionReducers';
import TotalListQuestionReducer from './TotalListQuestionReducers';
import ListAnswerTypeReducer from './AnswerTypeReducers'
import DetailQuestionReducer from './DetailQuestionReducers'
import ListInterviewVideoReducer from './ListInterviewVideoReducers'
import TotalListInterviewVideoReducer from './TotalListInterviewVideoReducers'
import DetailInterviewVideoReducer from './DetailInterviewVideoReducers'
import DetailUserAdministratorReducer from './DetailUserAdministratorReducers'
import TotalListUserAdministratorReducer from './TotalListUserAdministratorReducers'
import AddUserAdministratorReducer from './AddUserAdministratorReducers'
import ListEventReducer from './ListEventReducers'
import TotalListEventReducer from './TotalListEventReducers'
import DetailEventReducer from './DetailEventReducers'
import ListApplicantReducer from './ListApplicantReducers'
import TotalListApplicantReducer from './TotalListApplicantReducers'

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
    listUser: ListUsersReducer,
    detailBankQuestion: DetailBankQuestionReducer,
    totalListReportInterview: TotalListReportInterviewReducer,
    listReportInterview: ListReportInterviewReducer,
    listQuestion: ListQuestionReducer,
    totalListQuestion: TotalListQuestionReducer,
    listAnswerType: ListAnswerTypeReducer,
    detailQuestion: DetailQuestionReducer,
    listInterviewVideo: ListInterviewVideoReducer,
    totalListInterviewVideo: TotalListInterviewVideoReducer,
    detailInterviewVideo: DetailInterviewVideoReducer,
    detailUserAdministrator : DetailUserAdministratorReducer,
    totalUserAdministrator: TotalListUserAdministratorReducer,
    responsePostAddUserAdmin: AddUserAdministratorReducer,
    listEvent: ListEventReducer,
    totalListEvent: TotalListEventReducer,
    detailEvent: DetailEventReducer,
    listApplicant: ListApplicantReducer,
    totalListApplicant: TotalListApplicantReducer
})
