export type InputFormType = {
  type: string;
  placeholder: string;
  id: string;
  label?: string; // labelはInputFormでのみ使用されるため、オプショナルにします。
};
