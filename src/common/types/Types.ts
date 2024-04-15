export type TextareaFormType = {
  placeholder: string;
  row: number;
  id: string;
  label?: string;
  className?: string;
};

export type InputFormType = {
  type: string;
  placeholder: string;
  id: string;
  value: string;
  label?: string; // labelはInputFormでのみ使用されるため、オプショナルにします。
  className?: string; // classNameはInputFormでのみ使用されるため、オプショナルにします。
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ProfileType = {
  username?: string;
  imagePath: string;
};

export type FlashMessageProps = {
  message: string;
};

export interface TripDataInterface {
  id: number;
  user_id: number;
  location_id: number;
  departure_time: string; // ISO8601形式の日付文字列
  estimated_return_time: string; // ISO8601形式の日付文字列
  details: string;
  safety_score: number | null;
  sunrise_time: string; // ISO8601形式の日付文字列
  sunset_time: string; // ISO8601形式の日付文字列
  return_time: string | null; // ISO8601形式の日付文字列、またはnull
  return_details: string | null;
  created_at: string; // ISO8601形式の日付文字列
  updated_at: string; // ISO8601形式の日付文字列
}

export interface WeatherDataInterface {
  time: string; // おそらくISO8601形式の日付文字列です
  airTemperature: number | null;
  pressure: number | null;
  cloudCover: number | null;
  gust: number | null;
  humidity: number | null;
  precipitation: number | null;
  swellDirection: number | null;
  swellHeight: number | null;
  swellPeriod: number | null;
  visibility: number | null;
  waterTemperature: number | null;
  waveDirection: number | null;
  waveHeight: number | null;
  wavePeriod: number | null;
  windWaveDirection: number | null;
  windWaveHeight: number | null;
  windWavePeriod: number | null;
  windDirection: number | null;
  windSpeed: number | null;
}

export interface TripCardProps {
  tripData: TripDataInterface | null;
  weatherData: WeatherDataInterface | null;
}