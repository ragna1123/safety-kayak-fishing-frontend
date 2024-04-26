import axios from "axios";

export default async function FetchLocationName(location: { latitude: number; longitude: number }): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // 環境変数からAPIキーを取得
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.location_data.latitude},${location.location_data.longitude}&key=${apiKey}&language=ja`;
  try {
    const response = await axios.get(url);
    if (response.data.results.length > 0) {
      return response.data.results[0].formatted_address; // 最も詳細な住所を返す
    } else {
      throw new Error("No results found for the given coordinates.");
    }
  } catch (error) {
    console.error("Failed to fetch location name:", error);
    throw error;
  }
}
