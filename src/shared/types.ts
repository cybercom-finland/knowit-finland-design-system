export type Size = 'small' | 'medium' | 'large';
export type Variant = 'filled' | 'outlined' | 'text';
export type InputVariant = Exclude<Variant, 'text'>;

export interface ComponentBaseProps<T> {
  /**
   * Component id
   */
  id?: string | undefined;

  /**
   * Ref object for the native input element
   */
  ref?: React.RefObject<T>;

  /**
   * Change event handler passed from internal component
   */
  onChange?: (event: React.ChangeEvent<T>) => void;

  /**
   * Mouse click event handler passed from internal component
   */
  onClick?: (event: React.MouseEvent<T>) => void;

  /**
   * Blur event handler passed from internal component
   */
  onBlur?: (event: React.FocusEvent<T>) => void;
}
