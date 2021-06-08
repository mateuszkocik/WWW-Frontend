import React, {Component} from "react";
import './Prices.css';

const data = require('./PriceTable.json');

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    };

    return {items: sortedItems, requestSort, sortConfig};
};

const PricesTable = (props) => {
    const {items, requestSort, sortConfig} = useSortableData(props.services);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table className="prices_table">
            <thead>
            <tr>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('name')}
                        className={getClassNamesFor('name')}
                    >
                        Name
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('price')}
                        className={getClassNamesFor('price')}
                    >
                        Price
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('duration')}
                        className={getClassNamesFor('duration')}
                    >
                        Duration
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => {
                const hours = Math.floor(item.duration / 60);
                const minutes = item.duration % 60;
                let duration = '';
                if (hours !== 0) {
                    duration = hours + 'h';
                }
                if (minutes !== 0) {
                    duration += ' ' + minutes + 'min';
                }

                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{duration}</td>
                    </tr>
                    )
            })}
            </tbody>
        </table>
    );
};


class Prices extends Component {
    render() {
        return (
            <div className="prices_container">
                <PricesTable
                    services={data}
                />
            </div>
        );
    }
}

export default Prices;