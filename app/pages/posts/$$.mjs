/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { post } = store
  const { frontmatter } = post
  const { published = '', title = '', rating = '' } = frontmatter

  return html`
      <site-layout>
      <article class="h-entry font-body leading4 mi-auto pb0 pb4-lg">
          <h1 class="p-name font-heading font-bold mbe0 text4 tracking-1 leading1">${title}</h1>
          <p class='date dt-published mbe4'>${published}</p>
          <section slot="doc">${post.html}</section>
          <p class='mb0 mb4-lg'>${rating} out of 5 stars</p>
        </article>
      </site-layout>
  `
}
