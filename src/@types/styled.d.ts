import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secundary: string

      background: string
      font: string

      red: string
      orange: string
      yellow: string
      black: string
    }
  }
}
