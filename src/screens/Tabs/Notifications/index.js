import {View, ScrollView} from 'react-native';
import React from 'react';
import {BG2} from '../../../components/Backgrounds';
import {ListItem} from '../../../components/List';
import {height} from '../../../util/globalStyles';

const Notifications = () => {
  return (
    <BG2 title="Notifications">
      <View
        style={{
          flex: 1,
          height: height - 100,
          padding: 10,
        }}>
        <ScrollView>
          <ListItem
            icon="information-outline"
            title="Welcome"
            desc="Welcome Onboard! we are glad you are here and will be using our services for forever. Thank you for choosing us."
          />
        </ScrollView>
      </View>
    </BG2>
  );
};

export default Notifications;
