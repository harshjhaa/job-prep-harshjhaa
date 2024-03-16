const getAPI = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.products;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err; // Re-throw the error to be caught by the calling code if needed
  }
};

export { getAPI };
