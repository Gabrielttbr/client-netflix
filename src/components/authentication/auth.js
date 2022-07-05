import React from "react";
import { AuthContext } from "../../providers/auth";

export const IsAutheticed = () => {
    const {user, setUser} = React.useContext(AuthContext);
    // ==========================================
    // condição necessaria para rodar no chorme
    //=========================================
    if(localStorage.getItem('token') == null){
        localStorage.setItem('token', '');
    }
    // =====================================================================================
    //  VERIFICA SE POSSUI UMA PROPRIEDADE TOKEN DENTRO DO CONTEXTO USER
    //  TAMBÉM OLHA SE POSSUI UM TOKEN NO LOCALSTORE
    //  SE ALGUMA DESSA CONDIÇÃO FOR VERDADEIRA ELE RETORNA TRUE, OU SEJA, USUÁRIO AUTENTICADO COM SUCESSO
    //  SE NÃO RETORNA false
    // ===========================================================================================
    if(user.hasOwnProperty('token') || localStorage.getItem('token').length > 1){
        return true;
    }else{
        return false;
    }
};