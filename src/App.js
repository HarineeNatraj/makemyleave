import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import Loader from './components/Loader/Loader'
import Model from './components/Login/model';
import Dashboard from './components/Dashboard/Dashboard';
import Cal from './components/Calender/Calender';
import LeaveForm from './components/LeaveForm/LeaveForm';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Admin from './components/admin/dashboard/dashboard'
import LeaveApprove from './components/admin/leave-approve/leave-approve';
import Studentedit from './components/admin/student-edit/studentedit';
import adminContact from './components/admin/Contact/Contact';
import adminProfile from './components/admin/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import timetable from './components/admin/timetable/timetable';
import Attendence from './components/admin/Attendence/Attendence';
import Recentactivity from './components/recentactivity/recentactivity'
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/recent_activity" component={Recentactivity} exact></Route>
    <Route path="/attendence" component={Attendence} exact></Route>
    <Route path="/admin_time_table" component={timetable} exact></Route>
    <Route path="/admin_contact" component={adminContact} exact></Route>
    <Route path="/admin_profile" component={adminProfile} exact></Route>
    <Route path="/student_edit" component={Studentedit} exact></Route>
    <Route path="/approval_leave" component={LeaveApprove} exact></Route>
    <Route path="/admin_home" component={Admin} exact></Route>
    <Route path="/my_profile" component={Profile} exact></Route>
    <Route path="/contact_us_make_my_leave" component={Contact} exact></Route>
    <Route path="/apply_leave" component={LeaveForm} exact></Route>
    <Route path="/time_table" component={Cal} exact></Route>
      <Route path="/student_home" component={Dashboard} exact></Route>
    <Route path="/forgot-password/:gender" component={Model} exact>
    </Route>this.props.history.push("/forgot-password/"+this.state.gender)
    <Route path="/login" component={Login} exact></Route>
    <Route path="/" exact>
      <Loader />
    </Route>
      </Switch>
      <ToastContainer />
      </Router>
  );
}

export default App;
