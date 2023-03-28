// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  let comments = store.comments || []
  const comment = store.comment || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <main>
    <h1 class="mb1 font-semibold text3">Comments page</h1>
    ${comments.map(item => `<article class="mb2">
<div class="mb0">
  <p class="pb-2"><strong class="capitalize">name: </strong>${item?.name || ''}</p>
  <p class="pb-2"><strong class="capitalize">email: </strong>${item?.email || ''}</p>
  <p class="pb-2"><strong class="capitalize">comment: </strong>${item?.comment || ''}</p>
  <p class="pb-2"><strong class="capitalize">slug: </strong>${item?.slug || ''}</p>
  <p class="pb-2"><strong class="capitalize">key: </strong>${item?.key || ''}</p>
</div>
<p class="mb-1">
  <enhance-link href="/comments/${item.key}">Edit this comment</enhance-link>
</p>
<form action="/comments/${item.key}/delete" method="POST" class="mb-1">
  <enhance-submit-button><span slot="label">Delete this comment</span></enhance-submit-button>
</form>
</article>`).join('\n')}
<details class="mb0" ${Object.keys(problems).length ? 'open' : ''}>
    <summary>New comment</summary>
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
</details>
</main>
</enhance-page-container>
  `
}
