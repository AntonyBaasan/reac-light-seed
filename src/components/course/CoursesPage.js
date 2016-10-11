import React,{PropTypes} from "react";
import {Link} from "react-router";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component{

    constructor(props, context){
        super(props, context);
    }
 

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return (
            <div>
                <h1>Course</h1>
                <CourseList courses={this.props.courses}/>
                </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchProps(dispatch){
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchProps)(CoursesPage);