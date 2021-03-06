const user = {
  name: "danya",
  email: "danyakotkot@gmail.com",
  avatar: "../images/logo.jpeg",
};

const delay = 400;

const fetchUser = () => {
  return new Promise((respnose, reject) => {
    return setTimeout(() => {
      respnose(user);
    }, delay);
  });
};

export default { fetchUser };
