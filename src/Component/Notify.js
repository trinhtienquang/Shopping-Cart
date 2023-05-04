import { React, Component } from 'react';
import { connect } from 'react-redux';

class Notify extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert" id="mnotification">message <b>{this.props.message}</b></div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        message:state.notify //notify lấy từ reducer index
    }
}
export default connect(mapStateToProps,null) (Notify);