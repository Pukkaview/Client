export default async function Fetcher(url = "", content = {}) {
  try {
    const res = await fetch(url, content);
    const data = await res.json();
    if (!res.ok || data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    return { failure: true, message: error.message };
  }
}