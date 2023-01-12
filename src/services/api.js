export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(categoryID, QUERY) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&q=${QUERY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductById(productID) {
  const URL = `https://api.mercadolibre.com/items/${productID}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getItensFromCategories(categorieID) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categorieID}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
