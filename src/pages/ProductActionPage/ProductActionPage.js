import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductRequest, editProductReuest, editProductItemRequest } from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            this.props.editProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.product) {
            let { product } = nextProps;
            this.setState({
                id: product.id,
                txtName: product.name,
                txtPrice: product.price,
                chkbStatus: product.status
            })
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        let { txtName, txtPrice, chkbStatus, id } = this.state;
        let { history } = this.props;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id) {
            this.props.editProductItem(product);
            history.goBack();
        } else {
            this.props.addProduct(product);
            history.goBack();
        }
    }

    render() {
        let { txtName, txtPrice, chkbStatus } = this.state;
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm : </label>
                        <input type="text" className="form-control" name='txtName' value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá : </label>
                        <input type="text" className="form-control" name='txtPrice' value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái : </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name='chkbStatus' checked={chkbStatus} onChange={this.onChange} />
                                Còn Hàng
                        </label>
                    </div>
                    <Link to='/product-list' className='btn btn-danger mr-10'>
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = props => {
    return {
        product: props.Editting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: product => {
            dispatch(addProductRequest(product))
        },
        editProduct: id => {
            dispatch(editProductReuest(id))
        },
        editProductItem: (product) => {
            dispatch(editProductItemRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);