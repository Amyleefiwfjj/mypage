import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyPage.css';
import EditPage from './EditPage';

function MyPage() {
  const [IsEditPage, setIsEditPage] = useState(false);

  const handleEditPage = () => {
    setIsEditPage(true);
  };

  return (
    <div className="MyPage">
      <header className="login-header">
        <div className="return">
          <Link to="/">홈으로 돌아가기</Link>
        </div>
      </header>
      {IsEditPage ? (
        <EditPage onCancel={() => setIsEditPage(false)} />
      ) : (
        <>
          <div className="header-container">
            <h1>MY PAGE</h1>
            <button className="text-button" onClick={handleEditPage}>
            수정하기</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>회원 정보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이름</td>
                <td>ex-홍길동</td>
              </tr>
              <tr>
                <td>학번</td>
                <td>ex-20241234</td>
              </tr>
              <tr>
                <td>이메일</td>
                <td>ex-hong@example.com</td>
              </tr>
              <tr>
                <td>아이디</td>
                <td>hongexample</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <footer>
        <p>© 2024 CNU</p>
        <div className="footer-links">
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default MyPage;
