import { React, Component } from 'react';
import { MSG_DELETE_SUCCESS, MSG_UPDATE_SUCCESS } from '../Constants/messages';
import {connect} from 'react-redux';
import { act_CHANGE_NOTIFY, act_REMOVE_CARTITEM, act_UPDATE_CARTITEM } from '../Actions';
class CartItem extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity:0
        }
    }

    //cập nhật giỏ hàng
    HandleUpdateCart = (product) =>{
        this.props.updateCart(product,this.state.quantity);
        this.props.changeNotify(MSG_UPDATE_SUCCESS);
    }
    //xóa sản phẩm
    HandleDelete = (product) =>{
        this.props.deleteCart(product);
        this.props.changeNotify(MSG_DELETE_SUCCESS);
    }
    componentWillReceiveProps = (nextProps)=>{
        this.setState({
            quantity:nextProps.item.quantity
        })
    }
    render() {
        let {item, index} = this.props;
        let quantity = (this.state.quantity===0)?item.quantity:this.state.quantity;
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{item.product.productName}</td>
                <td>{item.product.price} USD</td>
                <td><input name="cart-item-quantity-1" type="number" value={quantity} min={1} onChange={(e)=>this.setState({quantity:e.target.value})}/></td>
                <td><strong>{item.product.price * quantity} USD</strong></td>
                <td>
                    <a className="label label-info update-cart-item" href="#" data-product="" onClick={()=>this.HandleUpdateCart(item.product)}>Update</a>
                    <a className="label label-danger delete-cart-item" href="#" data-product="" onClick={()=>this.HandleDelete(item.product)}>Delete</a>
                </td>
            </tr>
        );
    }
}
const mapStateToProps =(state)=>{
    return{
        cart:state.cart
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateCart:(product,quantity)=>{
            dispatch(act_UPDATE_CARTITEM(product, quantity))
        },
        deleteCart:(product)=>{
            dispatch(act_REMOVE_CARTITEM(product))
        },
        changeNotify:(content)=>{
            dispatch(act_CHANGE_NOTIFY(content));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartItem);