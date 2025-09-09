export const sizeList = ['small', 'default', 'large'] as const
export type ComponentSizeType = (typeof sizeList)[number]

export const themeList = ['solid', 'borderless', 'light', 'outline'] as const
export type ComponentThemeType = (typeof themeList)[number]

export const typeList = ['primary', 'secondary', 'tertiary', 'warning', 'danger'] as const
export type ComponentTypeType = (typeof typeList)[number]

export const iconSizeList = ['extra-small', 'small', 'default', 'large', 'extra-large'] as const
export type IconSizeType = (typeof iconSizeList)[number]

export const alignList = ['start', 'center', 'end', 'baseline'] as const
export type ComponentAlignType = (typeof alignList)[number]

export const spacingList = ['tight', 'medium', 'loose'] as const
export type ComponentSpacingType = (typeof spacingList)[number]
