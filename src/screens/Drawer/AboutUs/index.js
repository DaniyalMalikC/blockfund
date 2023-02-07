import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

// Assets
import {width} from '../../../util/globalStyles';
import {H1, Para} from '../../../components/Text';
import {colors} from '../../../util/theme';
import CommonHeader from '../../../components/Header/CommonHeader';

const AboutUs = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <CommonHeader title="About Us" />
      <ScrollView>
        <View style={styles.innerContainer}>
          <H1 text="What is BlockFund?" />
          <Para containerStyle={{marginVertical: 20}}>
            Velit consectetur adipisicing do non incididunt fugiat elit
            adipisicing laborum velit. Tempor cillum deserunt sunt dolore enim
            veniam fugiat velit nulla sit dolore. Nisi sunt magna reprehenderit
            quis et. Voluptate dolor elit culpa consequat id et tempor ipsum.
            Incididunt excepteur esse culpa enim sit fugiat eu voluptate
            consequat nulla voluptate qui id irure. Ut minim consectetur do ea
            et cillum mollit aliquip culpa esse. Commodo enim duis ipsum aute
            ullamco cupidatat esse nostrud non culpa reprehenderit sunt. Mollit
            cupidatat reprehenderit officia ea nostrud enim laborum minim.
            Tempor officia in commodo enim duis non ex id labore commodo aliqua.
            Qui pariatur laborum Lorem eu magna. Officia dolor mollit
            adipisicing ea non dolore nisi eiusmod mollit ad duis nisi ullamco
            ea. Dolore esse aliquip voluptate nostrud nisi elit duis qui. Duis
            et veniam consequat commodo aliqua esse. Occaecat ad amet
            consectetur irure consectetur exercitation.
          </Para>
          <H1 text="Why do we use it?" />
          <Para containerStyle={{marginVertical: 20}}>
            Deserunt laboris fugiat minim dolor. Ut ut magna amet occaecat quis
            pariatur dolor. Amet minim laborum laborum magna nulla Lorem.
            Excepteur elit eu sit nulla mollit occaecat qui enim laboris
            reprehenderit aute reprehenderit nostrud. Nisi nostrud sint
            reprehenderit esse laboris culpa veniam dolor consequat proident
            velit consectetur elit. Tempor proident duis aute tempor deserunt
            non ea consequat tempor fugiat laborum. Quis enim nostrud minim est.
            Ut fugiat sunt labore dolor enim adipisicing occaecat magna
            incididunt non cupidatat. Culpa qui laboris non sint irure tempor eu
            duis. Velit esse culpa elit velit eu id dolore duis non qui.
            Occaecat laboris eiusmod eiusmod pariatur excepteur officia
            adipisicing non sunt. Dolor dolor enim ipsum laboris elit veniam
            aliqua anim duis. Non in ipsum deserunt et. Ullamco minim do ea
            incididunt ipsum culpa culpa nostrud aliqua magna occaecat.
            Consectetur tempor laboris ut veniam sint tempor dolor. Deserunt
            pariatur veniam ad ad eiusmod et.
          </Para>
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    marginTop: width / 5,
    padding: 20,
  },
});
