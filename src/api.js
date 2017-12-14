import axios from "axios";
import API_BASE from "./config";

const API = {
  user: {
    login: credentials =>
      axios
        .post(`${API_BASE}/api/auth`, { credentials })
        .then(res => res.data.user),
    signup: user =>
      axios.post(`${API_BASE}/api/users`, { user }).then(res => res.data.user),
    confirm: token =>
      axios
        .post(`${API_BASE}/api/auth/confirmation`, { token })
        .then(res => res.data.user),
    resendConfirmation: email =>
      axios.post(`${API_BASE}/api/users/resend-confirmation`, { email }),
    resetPasswordRequest: email =>
      axios.post(`${API_BASE}/api/auth/reset_password_request`, { email }),
    validateToken: token =>
      axios.post(`${API_BASE}/api/auth/validate_token`, { token }),
    resetPassword: data =>
      axios.post(`${API_BASE}/api/auth/reset_password`, { data })
  }
};

export default API;
