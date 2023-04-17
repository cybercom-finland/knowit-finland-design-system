export type Size = 'small' | 'medium' | 'large';
export type Variant = 'filled' | 'outlined' | 'text';
export type SelectVariant = Exclude<Variant, 'text'>;
