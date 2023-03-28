// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const comment = store.comment || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
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
  <enhance-text-input label="Slug" type="text" id="slug" name="slug" value="${comment?.slug}" errors="${problems?.slug?.errors}"></enhance-text-input>
  <input type="hidden" id="key" name="key" value="${comment?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</enhance-page-container>`
}
