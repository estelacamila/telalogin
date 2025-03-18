import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet,
    Pressable 
} from "react-native";

import styled from 'styled-components/native';

export default function App() {
    return (
        <Tela>
            <Titulo>Login</Titulo>

            <CampoTexto
                placeholder="Digite seu e-mail..." 
               
            />
            
            <CampoTexto 
                placeholder="Digite sua senha..." 
               
               
            />

            <Pressable>
                <BotaoTexto>Entrar</BotaoTexto>
            </Pressable>

            <Links>
                <LinkTexto>Cadastre-se</LinkTexto>
                <LinkTexto>Esqueci a senha</LinkTexto>
            </Links>
        </Tela>
    );
}

const Tela = styled.View`
  flex: 1;
  background-color: #1C1C2D;
  padding: 26px;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #D1B2FF;
  margin-bottom: 40px;
  text-align: center;
`;

const CampoTexto = styled.TextInput`
  background-color: #F0F0F7;
  font-size: 18px;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 15px;
`;

const BotaoTexto = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 15px;
  background-color: #6C63FF;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Links = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const LinkTexto = styled.Text`
  color: #fff;
  font-size: 16px;
  text-decoration: solid #fff; 
`


