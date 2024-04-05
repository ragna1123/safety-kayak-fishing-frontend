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
