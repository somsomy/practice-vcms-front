import {useHistory} from "react-router-dom";

function JoinForm() {
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    history.push("/");
  }

  return (
    <body className="lbg">
    <main className="auth_join">
      <div className="header_top">
        <h1 className="logo"><a href="/">Yonsei Univ. <strong>MDDU</strong></a></h1>
      </div>
      <form className="auth-form" onSubmit={onSubmit}>
        <div className="auth_top">회원가입</div>
        <div className="form-group">
          <label htmlFor="user">아이디</label>
          <div className="user_box">
          <span className="id_box">
            <input type="text" id="user" placeholder="아이디" />
            <span className="lbl txt_red">사용불가</span>
          </span>
            <a href="#" className="id_btn">중복확인</a>
          </div>
          <span className="error_next_box">중복된 아이디입니다.</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <span className="ps_box">
          <input type="password" id="password" placeholder="비밀번호" />
          <span className="lbl txt_red">사용불가</span>
        </span>
          <span className="error_next_box">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>
        </div>
        <div className="form-group">
          <label htmlFor="password2">비밀번호 확인</label>
          <span className="ip_box">
          <input type="password" id="password2" placeholder="비밀번호 확인" />
          <span className="lbl txt_green">일치합니다.</span>
        </span>
        </div>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input type="text" id="name" placeholder="이름" />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <span className="ip_box">
          <input type="text" id="email" placeholder="이메일 주소" />
          <span className="lbl txt_green">정상</span>
        </span>
        </div>
        <div className="form-group">
          <label htmlFor="tel1">전화번호</label>
          <span className="ip_box">
          <input type="text" id="tel1" placeholder="- 없이 숫자만 입력" />
          <span className="lbl"></span>
        </span>
        </div>
        <div className="form-group">
          <label htmlFor="tel2">휴대전화번호</label>
          <span className="ip_box">
          <input type="text" id="tel2" placeholder="- 없이 숫자만 입력" />
          <span className="lbl"></span>
        </span>
        </div>
        <div className="form-group">
          <label htmlFor="part">부서</label>
          <input type="text" id="part" placeholder="부서" />
        </div>
        <div className="form-group">
          <label htmlFor="rank">직급</label>
          <input type="text" id="rank" placeholder="직급" />
        </div>
        <div className="form-group">
          <button className="btn_join" type="submit">회원가입</button>
          <button className="btn_back" type="submit">취소</button>
        </div>
      </form>
    </main>
    </body>
  )
}

export default JoinForm;