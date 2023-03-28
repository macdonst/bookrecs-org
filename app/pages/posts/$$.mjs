/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state }) {
  const { store } = state
  const { comments = [], comment = {}, post, problems = {}, slug = '' } = store
  const { frontmatter } = post
  const { published = '', title = '', rating = '' } = frontmatter

  return html`
      <site-layout>
        <article class="font-body leading4 m-auto p0 p5-lg">
          <h1 class="font-heading font-bold mb0 mb4-lg text3 text5-lg tracking-1 leading1 text-center">${title}</h1>
          <p class='text-center mb0 mb4-lg'>${published}</p>
          <section slot="doc">${post.html}</section>
          <p class='mb0 mb4-lg'>${rating} out of 5 stars</p>
        </article>
        <enhance-form
          action="/comments/${comment.key}"
          method="POST">
          <div class="${problems.form ? 'block' : 'hidden'}">
            <p>Found some problems!</p>
            <ul>${problems.form}</ul>
          </div>
          <field-set legend="Comment">
            <text-input label="Name" type="text" id="name" name="name" value="${comment?.name}" errors="${problems?.name?.errors}"></text-input>
            <text-input label="Email" type="email" id="email" name="email" value="${comment?.email}" errors="${problems?.email?.errors}"></text-input>
            <text-area label="Comment" type="text" id="comment" name="comment" value="${comment?.comment}" errors="${problems?.comment?.errors}"></text-area>
            <input type="hidden" id="slug" name="slug" value="${slug}" />
            <input type="hidden" id="key" name="key" value="${comment?.key}" />
            <submit-button style="float: right"></submit-button>
          </field-set>
        </enhance-form>
        <h2 class="font-heading mt4 pl0 pr0 pl5-lg pr5-lg text1 text3-lg tracking-1 leading1">${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}:</h2>
        <dl class="font-body leading4 m-auto p0 p5-lg">
          ${comments.map(comment => `<dt class="mb-6"><span class='font-semibold'>${comment.name}</span> <span class='text-1'>on ${comment.date}</span></dt>
            <dd class="mb4">${comment.comment}</dd>`).join('')}
        </dl>
      </site-layout>
  `
}
