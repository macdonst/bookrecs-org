export default function FieldSet ({ html, state }) {
  const { attrs } = state
  const { legend } = attrs

  return html`
    <style>
      fieldset {
        border: 3px solid hsl(0deg 0% 35% / 15%);
      }

      @media (prefers-color-scheme: dark) {
        fieldset {
          border-color: hsla(0deg 0% 85% / 30%);
        }
      }
    </style>

    <fieldset class='mt0 mb0 p0 font-body'>
      <legend class='font-heading p-2 text3'>${legend}</legend>
      <slot></slot>
    </fieldset>
  `
}
