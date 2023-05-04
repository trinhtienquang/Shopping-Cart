import { React, Component } from 'react';
import { act_BUY_ITEM, act_CHANGE_NOTIFY } from '../Actions';
import { MSG_BUY_SUCCESS } from '../Constants/messages';
import { connect } from 'react-redux';
class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity:1,
        }
    }
    //BuyItem
    handleBuyItem = (product)=>{
        //Thực hiện chức năng mua hàng
        this.props.buyItem(product,this.state.quantity);
        //thực hiện thông báo
        this.props.changeNotify(MSG_BUY_SUCCESS);
    }
    //Change Input number
    handleChange = (e) =>{
        this.setState({
            quantity: e.target.value
        })
    }
    render() {
        let {product}= this.props;
        let check = product.quantity>0;
        let elementBy = "";
        if (check) {
            elementBy = <div>
                <input name="quantity-product-1" type="number" defaultValue={1} min={1} onChange={this.handleChange}/>
                <button data-product={1} className="btn btn-success" onClick={()=>this.handleBuyItem(product)}>Mua hàng</button>
                <a data-product={1} href="#" className="price"> {product.price} USD </a>
            </div>;
        } else {
            elementBy = <span className="price">12 USD</span>
        }
        return (
            <div className="media product">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src={`images/${product.image}`} alt={product.productName} />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{product.productName}</h4>
                    <p>{product.descriptions}</p>
                    {elementBy}
                </div>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch) =>{
    return{
        buyItem:(product,quantity)=>{
            dispatch(act_BUY_ITEM(product,quantity))
        },
        changeNotify:(content) =>{
            dispatch(act_CHANGE_NOTIFY(content));
        }
    }
}
export default connect(null,mapDispatchToProps) (Product);