import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
import CustomDrawer from './CustomDrawer';

// Screen
import Home from '../../screens/Tabs/Home';
import AboutUs from '../../screens/Drawer/AboutUs';
import PrivacyPolicy from '../../screens/Drawer/PrivacyPolicy';
import Ticket from '../../screens/Drawer/Ticket';
import Feedback from '../../screens/Drawer/Feedback';
import WebViewScreens from '../../screens/WebViewScreens';

// Assets
import {colors} from '../../util/theme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerItemStyle: {
          backgroundColor: colors.secondary,
          paddingHorizontal: 10,
          marginHorizontal: 10,
          height: 50,
          justifyContent: 'center',
        },
        drawerActiveBackgroundColor: colors.primary,
        drawerInactiveBackgroundColor: colors.secondary,
        drawerLabelStyle: {
          fontFamily: 'Montesserat-Bold',
          fontSize: 14,
          width: 140,
          textAlign: 'left',
          color: colors.placeholder,
        },
      }}
      initialRouteName="HOME-DRAWER"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HOME-DRAWER"
        component={Home}
        options={{drawerItemStyle: {display: 'none'}}}
      />
      <Drawer.Screen name="WEBVIEW" component={WebViewScreens} />
      <Drawer.Screen
        name="ABOUT US"
        component={AboutUs}
        // options={{drawerIcon: () => <IconBtn img={icon3} size={20} />}}
      />
      <Drawer.Screen
        name="PRIVACY POLICY"
        component={PrivacyPolicy}
        // options={{drawerIcon: () => <IconBtn img={icon4} size={20} />}}
      />
      <Drawer.Screen
        name="TICKET"
        component={Ticket}
        // options={{drawerIcon: () => <IconBtn img={icon4} size={20} />}}
      />
      <Drawer.Screen
        name="FEEDBACK"
        component={Feedback}
        // options={{drawerIcon: () => <IconBtn img={icon4} size={20} />}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
