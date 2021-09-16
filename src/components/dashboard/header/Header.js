import HeaderMenu from "./menu/HeaderMenu";


function Header() {

  return (
    <header id="header">
      <div className="header_top">
        <h1 className="logo"><a href="/">Yonsei Univ. <strong>MDDU</strong></a></h1>
        <HeaderMenu />
      </div>
    </header>
  )
}

export default Header;