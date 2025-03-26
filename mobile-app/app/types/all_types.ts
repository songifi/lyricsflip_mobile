export interface ButtonProps {
  title: string;
  onPress: () => void;
  primary?: boolean;
  disabled?: boolean;
  isFullWidth?: boolean;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export interface CustomInputProps {
  label: string;
  placeholder?: string;
  onBlur?: () => void;
  isValid?: boolean;
  validationMessage?: string;
  showValidation?: boolean;
  secureTextEntry?: boolean;
  // containerStyle?: ViewStyle;
  // labelStyle?: TextStyle;
  // inputStyle?: TextStyle;
  // validationStyle?: TextStyle;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad";
}

export interface DropdownOption {
  value: string;
  label: string;
}

export interface CustomDropdownProps {
  title: string;
  options: DropdownOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  containerStyle?: object;
  searchable?: boolean;
}
