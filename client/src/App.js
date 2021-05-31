import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
import NewHotel from "./hotels/NewHotel";
import EditHotel from "./hotels/EditHotel";
import ViewHotel from "./hotels/ViewHotel";
import SearchResult from "./hotels/SearchResult";
import AgencyDetails from "./hotels/AgencyDetails";
import AnswerQuery from "./components/AnswerQuery";

//components
import Home from "./booking/Home";
import Login from "./auth/Login";
import TravelAgencyLogin from "./auth/TravelAgencyLogin";
import Register from "./auth/Register";
import TravelAgencyRegister from "./auth/TravelAgencyRegister";
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller";
import AdminDashboard from "./components/AgencyDashboard";
import Bookings from "./components/Bookings";
import PostAQuery from "./components/PostAQuery";
import Queries from "./components/Queries";
import TravelerActiveQueries from "./components/TravelerActiveQueries";
import SeeBids from "./components/SeeBids";
import CheckoutForm from "./components/CheckoutForm";
import CompleteTransaction from "./components/CompleteTransaction";
import AgencyBids from "./components/AgencyBids";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/travel-agency-login"
          component={TravelAgencyLogin}
        />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/travel-agency-register"
          component={TravelAgencyRegister}
        />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/dashboard/seller"
          component={DashboardSeller}
        />
        <PrivateRoute
          exact
          path="/dashboard/agency-dashboard"
          component={AdminDashboard}
        />
        <PrivateRoute exact path="/hotels/new" component={NewHotel} />
        <PrivateRoute exact path="/hotel/edit/:hotelId" component={EditHotel} />
        <Route exact path="/hotel/:hotelId" component={ViewHotel} />
        <Route exact path="/search-result" component={SearchResult} />
        <Route exact path="/travel-agency/:userId" component={AgencyDetails} />
        <PrivateRoute exact path="/bookings" component={Bookings} />
        <PrivateRoute exact path="/post-a-query" component={PostAQuery} />
        <PrivateRoute exact path="/queries" component={Queries} />
        <PrivateRoute
          exact
          path="/answer-query/:queryId"
          component={AnswerQuery}
        />
        <PrivateRoute
          exact
          path="/traveler-active-queries"
          component={TravelerActiveQueries}
        />
        <PrivateRoute exact path="/see-bids/:queryId" component={SeeBids} />
        <PrivateRoute exact path="/checkout-form" component={CheckoutForm} />
        <PrivateRoute
          exact
          path="/complete-transaction"
          component={CompleteTransaction}
        />
        <PrivateRoute exact path="/agency-bids" component={AgencyBids} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
