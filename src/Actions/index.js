import * as types from '../Constants/actionTypes';
//Thông báo
export const act_CHANGE_NOTIFY = (content)=>{
    return{
        type:types.CHANGE_NOTIFY,
        content:content,
    }
}
//action khi mua hàng
export const act_BUY_ITEM =(product,quantity)=>{
    return {
        type:types.BUY_ITEM,
        product:product,
        quantity:quantity,
    }
}
//action khi cập nhật giỏ hàng
export const act_UPDATE_CARTITEM =(product,quantity)=>{
    return {
        type:types.UPDATE_CARTITEM,
        product:product,
        quantity:quantity,
    }
}
//xóa sản phẩm trong giỏ hàng
export const act_REMOVE_CARTITEM = (product)=>{
    return{
        type:types.REMOVE_CARTITEM,
        product
    }
}