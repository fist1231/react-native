import React from "react"
import { withFormik } from "formik"
// import Yup from "yup";
import * as Yup from 'yup'

import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const LoginForm = () => {

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


    const _handleAction = (value) => {
    }


    return (
        <View style={styles.container}>
            <View>
              <Text>Username</Text>
            </View>
            <View>
              <TextInput
                onChangeText={text => setFieldValue('username', text)}
              />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
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
                />
            </View>
            <View>
                <Button
                  className="btn btn-primary btn-block mb-3"
                  icon="fa-close"
                  disabled={isSubmitting}
                  title="Log In"
                />
              </View>
              <View>
                <Button
                  type="reset"
                  className="btn btn-secondary btn-block"
                  icon="fa-close"
                  onPress={() => _handleAction()}
                  title="Cancel"
                  color="#841584"
                />
              </View>
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
  container2: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5F7F1',
    height: '100%'

  },
});
