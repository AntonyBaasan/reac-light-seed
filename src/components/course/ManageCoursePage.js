import React,{PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{

    constructor(props, context){
        super(props, context);
    }
 

    render(){
        return (
            <CourseForm/>
        );
    }
}

ManageCoursePage.propTypes = {
    // actions: PropTypes.object.isRequired,
    // courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state
    };
}

function mapDispatchProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchProps)(ManageCoursePage);