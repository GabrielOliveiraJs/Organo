import './CampoTexto.css'


const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
        <label htmlFor="">{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} type="text" required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto