export const sizeList = ['small', 'default', 'large'] as const
export type ComponentSizeType = (typeof sizeList)[number]

export const themeList = ['solid', 'borderless', 'light', 'outline'] as const
export type ComponentThemeType = (typeof themeList)[number]

export const typeList = ['primary', 'secondary', 'tertiary', 'warning', 'danger'] as const
export type ComponentTypeType = (typeof typeList)[number]
