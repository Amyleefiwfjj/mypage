import React, { useState} from 'react';
import './MyPage.css';

function EditPage({onCancel}){
    return (
    <div className="EditPage">
        <button onClick={onCancel}>뒤로가기</button>

    </div>
     );
    }
export default EditPage;