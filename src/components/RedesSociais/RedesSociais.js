import './RedesSociais.css'

const RedesSociais = () => {

  const ListaRedes = [
    { id: 1, urlNome: 'Instagram', url: 'https://www.instagram.com/n.__luan?igsh=MW54cjBjcGFyMWp4cw%3D%3D&utm_source=qr' },
    { id: 2, urlNome: 'Github', url: 'https://github.com/Nluan0' },
    { id: 3, urlNome: 'Linkedin', url: 'https://www.linkedin.com/in/nat%C3%A3-luan-rodrigues-dos-santos-072145306/' },
  ]

  const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className='conteudo_links'>
      <a href={props.url} target="_blank" rel="noreferrer">{props.urlNome}</a>
    </div>
  )

  return (
    <div className='redes_container'>
      {LinksRedes}
    </div>
  )

}

export default RedesSociais