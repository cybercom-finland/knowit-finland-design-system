export type Size = 'small' | 'medium' | 'large';
export type Variant = 'filled' | 'outlined' | 'text';
export type InputVariant = Exclude<Variant, 'text'>;
