export type Size = 'small' | 'medium' | 'large';
export type Variant = 'filled' | 'outlined' | 'text';
export type InputVariant = Exclude<Variant, 'text'>;

/**
 * Base props for components
 */
export interface ComponentBaseProps<T> {
  /**
   * Component id
   */
  id?: string;

  /**
   * Ref object for the native input element
   */
  ref?: React.RefObject<T>;

  /**
   * Change event handler passed from internal component
   */
  onChange?: (event: React.FormEvent<T>) => void;

  /**
   * Mouse click event handler passed from internal component
   */
  onClick?: (event: React.MouseEvent<T>) => void;

  /**
   * Blur event handler passed from internal component
   */
  onBlur?: (event: React.FocusEvent<T>) => void;
}

/**
 * Base props for input and select components
 */
export interface InputComponentBaseProps<T>
  extends Omit<ComponentBaseProps<T>, 'onChange'> {
  /**
   * Change event handler passed from internal component
   */
  onChange?: (event: React.ChangeEvent<T>) => void;
}
