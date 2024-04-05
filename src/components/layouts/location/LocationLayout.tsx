import ToggleFavoriteIcon from "@/components/ui-parts/button/ToggleFavoriteIcon";
import DailyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/DailyWeatherForecastTable";
import WeeklyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/WeeklyWeatherForecastTable";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../layoutWrapper/card/CardWrapper";

export default function LocationLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="flex justify-center p-4 mt-4 items-center">
          <h1 className="text-2xl font-bold">地点名</h1>
          <ToggleFavoriteIcon />
        </div>
        <h2 className="text-xl font-bold text-center mt-2 mb-1">地点名詳細</h2>

        <div className="card-body py-1">
          {/* 週間天気を表示 */}
          <WeeklyWeatherForecastTable />
          {/* 1日の詳細な天気を表示 */}
        </div>
        <div className="card-body py-1">
          <DailyWeatherForecastTable />
          {/* 潮位情報を含める */}
        </div>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
