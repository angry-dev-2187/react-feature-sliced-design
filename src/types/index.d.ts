type SvgrComponent = React.FC<
  React.SVGProps<SVGSVGElement> & {
    /** SVG accessible name provided by `title` tag */
    title?: string
  }
>

declare module '*.svg' {
  const value: SvgrComponent
  export default value
}
