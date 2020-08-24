import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
// import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { fetchAllProductsRequest, deleteProductRequest } from '../../actions';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    deleteItem = (id) => {
        this.props.deleteProduct(id);
    }

    findIndex = (products, id) => {
        let result = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        let { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-info mb-10">
                    Thêm Sản Phẩm
                </Link>
                <ProductList>
                    {this.onShowProducts(products)}
                </ProductList>
            </div>
        );
    }
    onShowProducts = (products) => {
        let result = null;
        if (products !== null && products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} deleteItem={this.deleteItem} />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.Products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(fetchAllProductsRequest())
        },
        deleteProduct: (id) => {
            dispatch(deleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);