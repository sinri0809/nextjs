import Gnb from "./Gnb";
// public/images => static 

const Header = () => {
  return <header>
    <Gnb />
    <img width={200} height={200} src={'images/logo.svg'} alt="logo" />
    header
  </header>
}

export default Header;