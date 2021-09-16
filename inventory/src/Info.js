import React from "react";

class Info extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const title = this.props.title;
        return(
            <div>
                <h1>{title}</h1>
            <p>Manage Your Stuff</p>
            </div>
        );
    }
}
Info.defaultProps = {
    title:"Title"
}
export default Info;