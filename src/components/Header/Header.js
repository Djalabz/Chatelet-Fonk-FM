import './Header.css';

import Logo from '../../assets/cfonkfm.svg';

export default function Header() {
    return (
        <div className="header">
           <img className='logo' src={Logo} />
        </div>
    )
}
