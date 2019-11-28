import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

/*
1.function      (React)
2.calss         (React, React-Native)
3.react-hooks   (React, React-Native)
*/

//<View> == <div>
//Text == span
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>4LEAF-EDU</Text>
        <TextInput style={styles.input} placeholder="email..." />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ width: 10 }}></View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //화면을 100% 사용해라
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    width: 220,
    height: 45,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginTop: 20
  },
  btnArea: {
    flexDirection: "row",
    borderRadius: 5
  },
  btn: {
    backgroundColor: "blue",
    opacity: 0.4,
    padding: 10,
    width: 110,
    marginTop: 20,
    borderRadius: 12
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;
