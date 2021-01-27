import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList197345Navigator from '../features/ArticleList197345/navigator';
import ArticleList197344Navigator from '../features/ArticleList197344/navigator';
import ArticleList197343Navigator from '../features/ArticleList197343/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList197345: { screen: ArticleList197345Navigator },
ArticleList197344: { screen: ArticleList197344Navigator },
ArticleList197343: { screen: ArticleList197343Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
