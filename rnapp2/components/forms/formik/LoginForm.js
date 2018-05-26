import React from "react"
import { withFormik } from "formik"
// import Yup from "yup";
import * as Yup from 'yup'

import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableNativeFeedback } from 'react-native'

const LoginForm = ({ navProp }) => {

  const innerForm = (props) => {
    const {
      values,
      errors,
      touched,
      setFieldValue,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      // history
      setErrors
    } = props;


    const _handleLogin = (value) => {
      navProp.navigate('Users')
    }

    const _handleCancel = (value) => {
      navProp.navigate('About')
    }


    return (
        <View style={styles.container}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                  style={styles.inputText}
                  onChangeText={text => setFieldValue('username', text)}
                  autoCapitalize='none'
                  autoCorrect={false}
                  returnKeyType='done'
                  keyboardType='default'
                  name='username'
                  value={values.username}
                  underlineColorAndroid='transparent'
              />

                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.inputText}
                  enablesReturnKeyAutomatically={true}
                  autoCapitalize='none'
                  autoCorrect={false}
                  returnKeyType='done'
                  keyboardType='default'
                  enablesReturnKeyAutomatically={true}
                  name='pwd'
                  onChangeText={text => setFieldValue('pwd', text)}
                  value={values.pwd}
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                />

                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => _handleLogin()}
                  activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => _handleCancel()}
                  activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
          </View>
    );
  };

  const doSubmit = (values) => {
    // const { history } = props
    // console.log(
    //   "...........submitted modal with values: " +
    //     JSON.stringify(values, null, 2)
    // );

    if (values.username == "nress" && values.pwd == "nress") {
      // authenticate(values.username, values.pwd);

      // localStorage.setItem('loggedIn', true);
      // localStorage.setItem('username', 'Nress');
      // history.push("/");
      // hideModal();
    } else {
      setErrors({
        username: "Invalid Username or Password",
        pwd: "Invalid Username or Password"
      });
    }
    // e.preventDefault();
  };

  const Login = withFormik({
    mapPropsToValues: props => ({
      username: "",
      pwd: ""
    }),
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required!"),
      pwd: Yup.string().required("Password is required!")
    }),
    handleSubmit: (values, { setSubmitting, setErrors }) => {
      // doSubmit(values, hideModal, setErrors);
      setSubmitting(false);
      // {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 1000);
    },
    // handleChange: (values, { setSubmitting }) => {
    //   console.log('^^^^^^^^^^^values='+values);
    // },
    displayName: "LoginForm" // helps with React DevTools
  })(innerForm);

  return <Login />;
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#C5F7F1',
    height: '100%',
    width: '100%',

  },
  marg: {marginBottom: 20},
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: '#A7ABAD',
    // width: '60%',
    // textAlign: 'center',
    // alignItems: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    // paddingTop: 10,
    // paddingBottom: 10,
  },
  label: {
    color: '#A7ABAD',
    marginRight: 40,
    marginLeft: 40,
    // marginTop: 10,
    // marginBottom: 10,
    // paddingTop: 10,
    // paddingBottom: 10,
 },
  loginButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#6989DE',
    borderRadius: 10,
    // borderWidth: 0,
    // borderColor: '#000',
    // width: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  cancelButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#A7ABAD',
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#fff',
    // width: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
});
