export default function SiteFooter ({ html }) {
  return html`
    <footer class='pt4 pt6-lg pb4 pb6-lg'>
      <p class='text-center pb-4'>
        <a rel='me' href='https://mastodon.online/@macdonst' class='font-body text-1 uppercase tracking3 underline'>Mastodon</a>
      </p>
      <p class='text-center'>
        <a href='/rss' class='font-body text-1 uppercase tracking3 underline'>RSS</a>
      </p>
    </footer>
  `
}
