
```markdown
# 🟩 Green Lantern

Projeto simples em **React Native** criado para praticar conceitos básicos como **uso de estado (`useState`), estilização com `StyleSheet` e interação com `TouchableOpacity`**, com uma brincadeira visual: ligar e desligar o símbolo do **Lanterna Verde** na tela.

## 🚀 Sobre o projeto

O **Green Lantern** exibe na tela o símbolo do Lanterna Verde que pode ser **ativado/desativado com um toque**, alterando também o fundo da tela de **branco (desligado) para preto (ligado)**.

Este projeto foi criado **apenas para aprendizado** durante meu curso de React Native.

## 🎯 Funcionalidades

✅ Alternar o estado do símbolo ao tocar na imagem  
✅ Alterar a cor de fundo conforme o estado (ativo ou inativo)  
✅ Praticar organização de estado e manipulação de componentes visuais

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/)
- JavaScript
- Expo (caso esteja utilizando para rodar)

## 📸 Imagem

- `symbol-on.png`: símbolo do Lanterna Verde aceso  
- `symbol-off.png`: símbolo do Lanterna Verde apagado

## 📂 Estrutura de diretórios (simplificada)

```

green-lantern/
├── App.js
└── assets/
└── pictures/
├── symbol-on.png
└── symbol-off.png

````

## 🧩 Como rodar

1️⃣ Clone o repositório:
```bash
git clone https://github.com/seuusuario/green-lantern.git
````

2️⃣ Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

3️⃣ Rode o projeto:

```bash
npx expo start
```

4️⃣ Abra no seu emulador ou no seu dispositivo usando o app Expo Go.

## ✏️ Código principal

```jsx
const [isActive, setisActive] = useState(false);

function handleSymbol() {
    setisActive((oldValue) => !oldValue);
}
```

## 🎓 Aprendizados

✅ Manipulação de estado com `useState`
✅ Alteração de estilos dinamicamente no React Native
✅ Organização mínima de projeto
✅ Disparo de funções com `TouchableOpacity` para interação

## 📜 Licença

Este projeto é para fins de estudo e prática. Sinta-se à vontade para utilizar como referência nos seus estudos.

---

Feito com 💚 para treinar React Native.

```

