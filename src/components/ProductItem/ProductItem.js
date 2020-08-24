import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    deleteItem = (id) => {
        if(confirm('Bạn có chấc muốn xóa ?')){//eslint-disable-line
            this.props.deleteItem(id);
        }
    }

    render() {
        let { product, index } = this.props;
        const statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        const statusClass = product.status ? 'success' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link type="button" to={`/product/${product.id}/edit`} className="btn btn-primary mr-10">Sửa</Link>
                    <button type="button" onClick={() => this.deleteItem(product.id)} className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;