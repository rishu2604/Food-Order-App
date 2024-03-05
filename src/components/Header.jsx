import logoImg from '../assets/logo.jpg';

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Logo" />
                <h1>Order Food</h1>
            </div>
            <div>
                <nav>
                    <button>Cart (0)</button>
                </nav>
            </div>
        </header>
    )
}
