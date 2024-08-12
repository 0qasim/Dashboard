import  Axios  from "../axios";

const User_Url = "/user"
export const signinUser = async ({password,email}) => {
  try {
    const { data } =await Axios.post(`${User_Url}/signin`,{password,email})
    return data;
  } catch (error) {
    throw Error( error.response.data.message);
  }
};


export const signUpUser = async ({password,email,firstName,lastName}) => {
  try {
    const { data } =await Axios.post(`${User_Url}/signup`,{password,email,firstName,lastName})
    return data;
  } catch (error) {
    throw Error( error.response.data.message);
  }
};




export const sendVerificationMail = async ({email}) => {
  try {
    const { data } =await Axios.post(`${User_Url}/send-verfication-mail`,{email})
    return data;
  } catch (error) {
    throw Error( error.response.data.message);
  }
};

export const sendForgotMail = async ({email}) => {
  try {
    const { data } =await Axios.post(`${User_Url}/forgot-password`,{email,})
    return data;
  } catch (error) {
    throw Error( error.response.data.message);
  }
};


export const verifyEmailAddressSignUp = async ({token}) => {
  try {
    const { data } =await Axios.post(`${User_Url}/verify-user-mail`,{token})
    return data;
  } catch (error) {
    throw Error( error.response.data.message);
  }
};

export const verfiyForgotToken = async ({ token,password}) => {
  try {
    const { data } = await Axios.post(`${User_Url}/verify-forgot-mail`, {
      token,
    password
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
