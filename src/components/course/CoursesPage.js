import React from "react";
import {Link} from "react-router";

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
        alert('Saving '+this.state.course.title);
    }

    render(){
        return (
            <div>
                <h1>Course</h1>

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

export default CoursesPage;