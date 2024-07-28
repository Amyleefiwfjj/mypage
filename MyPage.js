import React from 'react';
import { useHistory } from 'react-router-dom';
import './MyPage.css';

function MyPage() {
    const history = useHistory();

    const handleEditClick = () => {
        history.push('/edit');
    };

    return (
        <div className="MyPage">
            <h1>MY PAGE</h1>
            <button onClick={handleEditClick}>수정하기</button>
            <table>
                <thead>
                    <tr>
                        <th>회원 정보</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>홍길동</td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>hong@example.com</td>
                    </tr>
                    {/* 다른 회원 정보 추가 */}
                </tbody>
            </table>
        </div>
    );
}

export default MyPage;
