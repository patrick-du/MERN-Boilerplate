import api from '../api';

const logOut = async () => {
  await api.get('/auth/logout', { withCredentials: true }).then((res) => {
    alert('You have been successfully logged out.');
  });
  window.location = '/';
};

export default logOut;