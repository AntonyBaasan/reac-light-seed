import React,{PropTypes} from "react";
import {Link} from "react-router";
import {connect} from 'react-redux';
import {createCourse} from '../../actions/courseActions';

class CoursesPage extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: ""}
        }; 

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
 
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClick() {
        this.props.dispatch(createCourse(this.state.course));
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return (
            <div>
                <h1>Course</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} 
                />

                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClick} 
                />

            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);