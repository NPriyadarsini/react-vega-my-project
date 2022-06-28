import { map, values } from '@laufire/utils/collection';

const ChartManager = {
	addProduct: (product, props) => values(map(props, (value, key) => ({
		xField: product,
		yField: value,
		group: key,
	}))),

	getProductsGroupChart: ({ config: { products }}) =>
		products.reduce((acc, { product, ...props }) =>
			acc.concat(ChartManager.addProduct(product, props)), []),
};

export default ChartManager;
