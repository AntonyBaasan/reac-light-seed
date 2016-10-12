import React,{PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component{

    constructor(props, context){
        super(props, context);
    }
 

    render(){
        return (
            <h1>Manage course</h1>
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