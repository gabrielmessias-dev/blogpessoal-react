import axios from "axios";

const api = axios.create({
  baseURL: "https://blogpessoal-jjd1.onrender.com"
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  try {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
  }
};

export const login = async (url: string, dados: Object, setDados: Function) => {
  try {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};
