import React from "react";
class RederPropsComponent extends React.Component {
    render() {
        return (
            <div>
                This is a child component
                {this.props.render}
            </div>
        )
    }
}
export default RederPropsComponent;