type ToggleSwitchProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function ToggleSwitch(props: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between mb-2">
      <span>{props.label}</span>
      <input
        type="checkbox"
        className="toggle toggle-accent"
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
}