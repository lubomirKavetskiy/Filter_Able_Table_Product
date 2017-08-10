import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
    render() {
        const {products} = this.props;

        return(
            <div>
                <SearchBar />
                <ProductTable product = {products} />
            </div>
        );
    }
}

export default FilterableProductTable;