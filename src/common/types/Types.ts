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
  label?: string; // labelはInputFormでのみ使用されるため、オプショナルにします。
  className?: string; // classNameはInputFormでのみ使用されるため、オプショナルにします。
};

export type ProfileType = {
  username?: string;
  imagePath: string;
};
