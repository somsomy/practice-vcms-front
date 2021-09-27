import {Link, useHistory} from "react-router-dom";

function LoginForm() {
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    history.push("/dashboard");
  }

  return (
    <body className="lbg">
    <main className="auth">
      <div className="header_top">
        <h1 className="logo"><a href="/">Yonsei Univ. <strong>MDDU</strong></a></h1>
      </div>
      <form className="auth-form" onSubmit={onSubmit}>
        <div className="auth_top">LOGIN<Link to="/join">회원가입</Link></div>
        <div className="form-group">
          <label htmlFor="user">사용자명</label>
          <input type="text" id="user" placeholder="사용자명"/>
        </div>
        <div className="form-group">
          <label htmlFor="pass">비밀번호</label>
          <input type="password" id="pass" placeholder="비밀번호"/>
        </div>
        <div className="form-group">
          <span class="error_next_box">입력된 로그인 정보가 올바르지 않습니다.</span>
          <button className="btn_login" type="submit">LOGIN</button>
        </div>
      </form>
    </main>
    </body>
  )
}

export default LoginForm;