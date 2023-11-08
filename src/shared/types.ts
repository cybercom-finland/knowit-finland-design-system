export type Size = 'small' | 'medium' | 'large';
export type Variant = 'filled' | 'outlined' | 'text';
export type InputVariant = Exclude<Variant, 'text'>;

/**
 * Base props for components
 */
export interface ComponentBaseProps<T> extends React.AriaAttributes {
  /**
   * Component id
   */
  id?: string;

  /**
   * Ref for the native input element
   */
  ref?: React.Ref<T>;

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

/**
 * Base props for loading indicator
 */
export interface LoadingIndicatorBaseProps
  extends ComponentBaseProps<HTMLSpanElement> {
  /**
   * Progress (0-100)
   */
  progress?: number;

  /**
   * Is the indicator determinate (showing a specific progress bar value), or indeterminate (animated loading indicator)
   */
  determinate?: boolean;

  /**
   * Severity of the loading indicator
   */
  indicatorSeverity?: Severity;
}

/**
 * State of a component (loading indicators, etc.)
 */
export type Severity = 'default' | 'success' | 'warning' | 'error' | 'info';
