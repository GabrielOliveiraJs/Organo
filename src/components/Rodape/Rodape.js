import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <ul className='icons'>
                <li>
                    <img src="./img/fb.png" alt="" />
                </li>
                <li>
                    <img src="./img/tw.png" alt="" />
                </li>
                <li>
                    <img src="./img/ig.png" alt="" />
                </li>
            </ul>
            <section className='logo'>
                <img src="./img/logo.png" alt="" />
            </section>
            <section className='text'>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape