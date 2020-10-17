import React from "react";

export const LoginIn = () =>{


    
    return(
        <div className="LoginIn">
            <div className="divForm">
            <div>
            <h1>Вход в личный кабинет</h1>
            </div>
            <div>
                   {/* // Table attention */}
            </div>
            
            <form className="login_form">
                <input type="text" placeholder="Логин" />
                <input type="text" placeholder="Пароль" />
                <button >Войти</button>
                 
            </form>
            </div>
        </div>
    );
}