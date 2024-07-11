"use client";
import InputField from "@/components/ui-elements/input/InputField";

export default function FieldFrom() {
  return (
    <>
      <InputField label="出船時間" id="departureTime" type="time" />
      <p>日の出 6:00</p>
    </>
  );
}
