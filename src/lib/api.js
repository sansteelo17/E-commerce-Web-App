import emailjs from "@emailjs/browser";

export const getAllProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Could not fetch products");
  }
  const data = await response.json();
  return data.products;
};

export const getProductDetail = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Could not fetch products");
  }
  const data = await response.json();

  return data;
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );

  if (!response.ok) {
    throw new Error("Could not fetch products");
  }
  const data = await response.json();

  return data.products;
};

export const sendEmailToEmailjs = (serviceId, templateId, formCurrent, key) => {
  emailjs.sendForm(serviceId, templateId, formCurrent, key);
};

// export const getRandomProduct = async () => {
//   const randomNumber = Math.floor(Math.random() * (100 - 54)) + 54;
//   const response = await fetch(
//     `https://dummyjson.com/products/${randomNumber}`
//   );
//   if (!response.ok) {
//     throw new Error("Could not fetch products");
//   }
//   const data = await response.json();

//   return data;
// };
