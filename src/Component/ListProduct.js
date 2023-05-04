import { React, Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';
class ListProduct extends Component {
    render() {
        // console.log(this.props.products);
        let elementListProduct = this.props.products.map((product)=>{
            return <Product key={product.productId} product = {product}/>
        });
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"><h1 className="panel-title">List Products</h1></div>
                <div className="panel-body" id="list-product">
                    {/* PRODUCT : START */}
                    {elementListProduct}
                    {/* PRODUCT : END */}
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        products:state.ListProduct
    }
}
export default connect(mapStateToProps, null) (ListProduct);