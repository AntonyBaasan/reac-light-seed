import React,{PropTypes} from "react";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <h1>Course Form</h1>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired, 
    allAuthors: PropTypes.array, 
    onSave:PropTypes.func.isRequired, 
    onChange:PropTypes.func.isRequired, 
    loading:PropTypes.bool, 
    errors:PropTypes.object
};

export default CourseForm;