import './Botao.css'

const Botao = (props) =>{
    return(
        <button className='btn'>
            {props.texto}
        </button>
    )
}

export default Botao