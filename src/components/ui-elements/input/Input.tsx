import { InputFormType } from "@/common/types/Types";

export default function Input(props: InputFormType) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input input-bordered"
        id={props.id}
      />
    </>
  );
}

