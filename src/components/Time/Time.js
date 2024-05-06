import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {
  return (
    // (props.colaboradores.length > 0) && (Também pode ser feito dessa forma. Renderiza o componente somente se o array possuir algo dentro dele (for maior do que 0))
    (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)}
      </div>
    </section>
    : ''
  )
}

export default Time