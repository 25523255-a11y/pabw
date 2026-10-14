export const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error(
        "Gagal mengambil data: " +
          respons.status +
          " " +
          respons.statusText
      );
    }

    const data = await respons.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Kesalahan saat mengambil data API:", error);
    throw error;
  }
}