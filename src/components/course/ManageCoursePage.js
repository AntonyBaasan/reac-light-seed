import React,{PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(!this.props.course || this.props.course.id != nextProps.course.id){
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }
 
    createCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push("/courses");
    }

    render(){
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.createCourse}
                />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object.isRequired // context that declared inside router.
};

function getCourseById(courses, courseId){
    const course = courses.filter(course=> course.id === courseId);
    if(course)
        return course[0];
    return null;
}

function mapStateToProps(state, ownProps){
    let courseId = ownProps.params.id; // from the path 'course/:id'

    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category:''};

    if(courseId){
        course = getCourseById(state.courses, courseId);
    }
    const authorsFormatterForDropdown = state.authors.map((author)=>{
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormatterForDropdown
    };
}

function mapDispatchProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchProps)(ManageCoursePage);