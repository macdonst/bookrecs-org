export default function SiteHeader ({ html }) {
  return html`
    <header class='pl0 pr0 pl5-lg pr5-lg'>
      <h1 class='text2 text4-lg text-center font-heading font-bold tracking-1 pt4 pt6-lg pb0 pb2-lg'>
        <a href='/' class='no-underline'>
          Book Recs by Simon MacDonald
        </a>
      </h1>
      <p class='text-center font-body pb4 pb6-lg'>
        Your human goodreads
      </p>
    </header>
  `
}
