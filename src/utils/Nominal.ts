export type Nominal<Type> = Type & { readonly _uniq: unique symbol };
