"use client";
import FeedbackLayout from "@/components/layouts/feedback/FeedbackLayout";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";

export default function Feedback() {
  return (
    <>
      <CheckUserLoggedIn authRequired={true} />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <FeedbackLayout />
      </DisplayFlexWrapper>
    </>
  );
}
