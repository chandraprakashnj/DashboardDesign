// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Image,TouchableOpacity,
} from 'react-native';

import {Icon,SearchBar} from 'react-native-elements';

const App: () => React$Node = () => {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex:1,backgroundColor:'#000'}}>
          <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#7f6d1c',padding:10}}>
            <View style={{flex:1,}}>
              <Image style={{width:'100%',height:'100%',resizeMode:'cover'}} source={{uri:'http://isitindia.in/images/04.jpg'}} />

            </View>
            <View style={{flex:3,textAlign:"center",justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>New Application Production Path</Text>

            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon 
                name="bell"
                type="font-awesome"
                size={30}
                color="#fff"
              />

            </View>
          </View>
          <ScrollView style={{flex:1,}}>
            <View style={{flex:0.1,padding:15,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>
                Leadership Dashboard
              </Text>
            </View>
            <View style={{flex:1,flexDirection:'row',padding:4,borderWidth:1,borderColor:'#7f6d1c',borderRadius:20,marginHorizontal:60,justifyContent:'center'}}>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#7f6d1c',borderRadius:20}}>
                <Text style={{color:'#fff'}}>On Track</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff'}}>At Risk</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff'}}> Delayed</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:0.1,padding:15,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',textTransform:'uppercase'}}>
                 On Track
              </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:300, height:300,resizeMode:'contain'}} source={require('./imgs/2.png')}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                <Text style={{textAlign:'center',alignItems:'center',textTransform:'uppercase',fontWeight:'bold',color:'#18bb9c',fontSize:20}}>On track</Text>
                <Text style={{textAlign:'center',alignItems:'center',fontWeight:'bold',color:'#18bb9c',fontSize:40}}>12</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',alignItems:'center',textTransform:'uppercase',fontWeight:'bold',color:'#fff',fontSize:20}}>At Risk</Text>
                <Text style={{textAlign:'center',alignItems:'center',fontWeight:'bold',color:'#fff',fontSize:40}}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',alignItems:'center',textTransform:'uppercase',fontWeight:'bold',color:'#fff',fontSize:20}}>Delayed</Text>
                <Text style={{textAlign:'center',alignItems:'center',fontWeight:'bold',color:'#fff',fontSize:40}}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <SearchBar
              value={''}
              placeholder='Type Here...' />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
    };

    export default App;