import React,{PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {authorsFormatterForDropdown} from '../../selector/selector';

export class ManageCoursePage extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
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

    courseFormIsValid(){
        let formIsValid = true;
        let errors = {};

        if(this.state.course.title.length < 5){
            errors.title = "Title must be at least 5 characters";
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
 
    saveCourse(event){
        event.preventDefault();

        if(!this.courseFormIsValid()){
            return;
        }

        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(()=>{
                this.redirect();
            })
            .catch((error)=>{
                console.error(error);
                this.setState({saving: false});
            });
    }

    redirect(){
        this.setState({saving: false});
        this.context.router.push("/courses");
    }

    render(){
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                saving={this.state.saving}
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

    return {
        course: course,
        authors: authorsFormatterForDropdown(state.authors)
    };
}

function mapDispatchProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchProps)(ManageCoursePage);