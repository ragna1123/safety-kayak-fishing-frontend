import FeedbackLayout from "@/components/layouts/feedback/FeedbackLayout";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";


export default function Feedback() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <MapLayout />
        <FeedbackLayout />
      </div>
    </>
  );
}