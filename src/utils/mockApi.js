const BASE_URL = "http://fubar.com/";

const getPerson = async id => {
  await fetchData(`${BASE_URL}person/${id}`);
  return {
    val1: randomNumber(),
    val2: randomNumber(),
  };
};

const getFacility = async id => {
  await fetchData(`${BASE_URL}facility/${id}`);
  return {
    val3: randomNumber(),
    val4: randomNumber(),
  };
};

const getExposure = async id => {
  await fetchData(`${BASE_URL}exposure/${id}`);
  return {
    val5: randomNumber(),
  };
};

const fetchData = async url => {
  console.log(url); // eslint-disable-line
  return new Promise(resolve => setTimeout(() => resolve(), 700));
};

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

export default { getPerson, getFacility, getExposure };
