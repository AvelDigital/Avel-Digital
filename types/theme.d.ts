interface ITheme {
    fonts: {
        title: string
        subtitle: string
        description: string
    }
    colors: {
        primary: string
        secondary: string
    }
    backgrounds: {
        primary: string
        tertiary: string
        secondary: string
        tertiaryGlass: string
    }
}

export default ITheme