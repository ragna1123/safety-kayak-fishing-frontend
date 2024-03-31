import ToggleFavoriteIcon from "@/components/ui-parts/trip/favorite/ToggleFavoriteIcon";
import DailyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/DailyWeatherForecastTable";
import WeeklyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/WeeklyWeatherForecastTable";

export default function LocationLayout() {
  return (
    <div className="md:w-1/2 w-full">
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="flex justify-center p-4 mt-4 items-center">
          <h1 className="text-2xl font-bold">地点名</h1>
          <ToggleFavoriteIcon />
        </div>
        <h1 className="text-xl font-bold text-center mt-2 mb-1">地点名詳細</h1>

        <div className="card-body">
          {/* 週間天気を表示 */}
          <WeeklyWeatherForecastTable />
          {/* 1日の詳細な天気を表示 */}
          <DailyWeatherForecastTable />

        </div>
      </div>
    </div>
  );
}
