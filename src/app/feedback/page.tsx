import FeedbackLayout from "@/components/layouts/feedback/FeedbackLayout";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";

export default function Feedback() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <FeedbackLayout />
      </DisplayFlexWrapper>
    </>
  );
}
