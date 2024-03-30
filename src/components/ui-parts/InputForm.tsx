import Input from "@/components/ui-elements/input/Input";
import { InputFormType } from "@/common/types/Types";

export default function InputForm(props: InputFormType) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <Input type={props.type} placeholder={props.placeholder} id={props.id} />
    </div>
  );
}
