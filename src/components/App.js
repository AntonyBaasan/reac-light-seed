import React, {PropTypes} from "react";
import {Link} from "react-router";

class App extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <p>here..</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App;