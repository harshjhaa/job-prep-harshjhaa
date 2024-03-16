const getAPI = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
      return data;
    }
  } catch (err) {
    // console.log(err.message)
    throw err;
  }
};

export { getAPI };
