import { createContext, useState, useEffect, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import { UserValidations } from "./UserValidation";

export const UserAdminContext = createContext()



const UserAdminContextProvider = (props) => {
  const avatarDefault = "https://res.cloudinary.com/caraguatay/image/upload/v1705884354/avatar/user-avatar_d4x7se.png"
  ;

  const initialForm = {
    email: "",
    name: "",
    lastName: "",
    password: "",
    role: "",
    avatar: avatarDefault,
  };

  const formErrors = {
    email: false,
    name: false,
    lastName: false,
    password: false,
    role: false,
    avatar: false,
  };

  const inputs = {
    email: useRef(),
    name: useRef(),
    lastName: useRef(),
    password: useRef(),
    role: useRef(),
    avatar: useRef(),
  }

  const {
    setResponseMsg,
    setShowResOk,
    setShowResBad,
    showResOk,
    showResBad,
    responseMsg,
    form,
    handleChange,
    setForm,
    setErrors,
    setFiles,
    files,
    handleReset,
    setLoading,
    errors,
  } = useForm(initialForm, UserValidations, inputs);


  const handleBlur = (e) => {
    if (e.target.name !== "avatar") {
      handleChange(e);
      setErrors(UserValidations(form, e, inputs, errors));
    } else {
      // Handle avatar-specific logic here if needed
      setErrors(UserValidations(form, e, inputs, errors));
    }
  };

  const handleKeyUp = (e) => {
    handleChange(e);
    setErrors(UserValidations(form, e, inputs, errors));
  }
  const handleMouseup = (e) => {
    handleChange(e);
    setErrors(UserValidations(form, e, inputs, errors));
  }


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowResOk(false);
      setShowResBad(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [showResBad, showResOk]);


  return (
    <UserAdminContext.Provider value={{
      initialForm,
      formErrors,
      inputs,
      setResponseMsg,
      setShowResOk,
      setShowResBad,
      showResOk,
      showResBad,
      responseMsg,
      form,
      handleChange,
      handleKeyUp,
      handleBlur,
      handleMouseup,
      setForm,
      setErrors,
      setFiles,
      files,
      handleReset,
      setLoading,
      errors,
      UserValidations,
      avatarDefault

    }}>
      {props.children}
    </UserAdminContext.Provider>
  )
}

export default UserAdminContextProvider;