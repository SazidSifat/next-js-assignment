export async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
