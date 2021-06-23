import logo from './logo.svg';
import './App.css';
import {
  Route, 
  Link, 
  Switch, 
  Redirect,
} from 'react-router-dom'; 

import dashboard from './components/dashboard'; 
import admin from './components/admin/admin';
import studentplatform from './components/admin/studentplatform';  
import teacherplatform from './components/admin/teacherplatform'; 
import classplatform from './components/admin/classplatform';
import addteachers from './components/admin/addteachers';
import viewteachers from './components/admin/viewteachers';
import viewstudents from './components/admin/viewstudents'; 
import addstudents from './components/admin/addstudents'; 
import viewclasses from './components/admin/viewclasses';
import student from './components/student/student'; 
import studentsviewassignments from './components/student/viewassignments';
import teacher from './components/teacher/teacher';
import teacherviewassignments from './components/teacher/viewassignments'; 
import teacheraddassignment from './components/teacher/addassignments'; 
function App() {
  return (
    <div className = "App">
      <div>
      <Switch>
        <Route exact path="/" component = {dashboard}/>
        <Route exact path = "/admin" component = {admin}/>
        <Route exact path = "/admin/studentplatform" component = {studentplatform}/>
        <Route exact path = "/admin/teacherplatform" component = {teacherplatform}/>
        <Route exact path = "/admin/classplatform" component = {viewclasses}/>
        <Route exact path = "/admin/teacherplatform/addteachers" component = {addteachers}/>
        <Route exact path = "/admin/teacherplatform/viewteachers" component = {viewteachers}/>
        <Route exact path = "/admin/studentplatform/viewstudents" component = {viewstudents}/>
        <Route exact path = "/admin/studentplatform/addstudents" component = {addstudents}/>
        <Route exact path = "/admin/classplatform/viewclasses" component = {viewclasses}/>
        <Route exact path = "/student" component = {studentsviewassignments}/>
        <Route exact path = "/student/viewassignments" component = {studentsviewassignments}/>
        <Route exact path = "/teacher" component = {teacher}/>
        <Route exact path = "/teacher/viewassignments" component = {teacherviewassignments}/>
        <Route exact path = "/teacher/addassignment" component = {teacheraddassignment}/>

      </Switch>
    </div>
    </div>
  );
}

export default App;
