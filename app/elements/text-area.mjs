export default function TextArea ({ html, state }) {
  const { attrs } = state
  const { id, label, name, type } = attrs

  return`
    <style>
      textarea {
        background-color: transparent;
        box-shadow: 0 0 0 1px hsl(0deg 0% 30% / 50%);
        resize: vertical;
        min-height: 6rem;
      }

      textarea:focus {
        outline: none;
        box-shadow: 0 0 0 2px var(--color-dark);
      }

      @media (prefers-color-scheme: dark) {
        textarea {
          box-shadow: 0 0 0 1px hsla(0deg 0% 80% / 60%);
        }
        textarea:focus {
          box-shadow: 0 0 0 2px var(--color-light);
        }
      }
    </style>
    <label>
      <span class='block text-1 mb-3 font-semibold'>
        ${label}
      </span>
      <textarea id='${id}' name='${name}' type='${type}' class='mb0 p-2 w-full leading3'></textarea>
    </label>
  `
}
