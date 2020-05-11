import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StocksDisplayScreen from '../screens/StocksDisplayScreen';
import StockData from '../screens/StockData';

const StocksNavigator = createStackNavigator({
    StockList: StocksDisplayScreen,
    StockData: StockData,
});

export default createAppContainer(StocksNavigator);
