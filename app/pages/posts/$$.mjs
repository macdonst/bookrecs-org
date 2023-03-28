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
          <enhance-fieldset legend="Comment">
          <enhance-text-input label="Name" type="text" id="name" name="name" value="${comment?.name}" errors="${problems?.name?.errors}"></enhance-text-input>
          <enhance-text-input label="Email" type="email" id="email" name="email" value="${comment?.email}" errors="${problems?.email?.errors}"></enhance-text-input>
          <enhance-text-input label="Comment" type="text" id="comment" name="comment" value="${comment?.comment}" errors="${problems?.comment?.errors}"></enhance-text-input>
          <input type="hidden" id="slug" name="slug" value="${slug}" />
          <input type="hidden" id="key" name="key" value="${comment?.key}" />
          <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
          </enhance-fieldset>
        </enhance-form>
        <h3 class="font-heading font-bold mt1 text1 text3-lg tracking-1 leading1">${comments.length} comments:</h3>
        <dl class="font-body leading4 m-auto p0 p5-lg">
          ${comments.map(comment => `<dt class="font-bold mb-6">${comment.name}</dt>
            <dd class="">${comment.comment}</dd>
            <dd class="mb1">${comment.date}</dd>`).join('')}
        </dl>
      </site-layout>
  `
}
