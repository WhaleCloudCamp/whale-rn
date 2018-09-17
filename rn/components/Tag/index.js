// import React from 'react'
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native"

// export default class Tag extends React.Component {

//     constructor(){
//         super();
//     }

//     render() {

//         const { selected, disabled } = this.props;

//         if (disabled) {
//             return (
//                 <View>
//                     <Text style={styles.title}>失效标签</Text>
//                 </View>
//             )
//         }
//         else if (selected) {
//             return (
//                 <View style={styles.tag}>
//                     <Text style={styles.title}>标签</Text>
//                 </View>
//             )
//         }
//         else {
//             return (
//                 <View style={styles.tag}>
//                     <Text style={styles.title}>正常标签</Text>
//                 </View>
//             )
//         }
//     }
// };

// const styles = StyleSheet.create({
//     tag: {
//         padding: 2
//     }
// })
