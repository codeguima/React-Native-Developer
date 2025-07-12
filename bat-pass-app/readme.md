
# 🦇 Bat Pass App

**Gerador de senhas aleatórias com tema Batman, criado em React Native para praticar conceitos do curso.**

---

## 🚀 Sobre o projeto

O **Bat Pass App** permite **gerar senhas aleatórias seguras** e copiá-las para a área de transferência com apenas um toque, utilizando um visual temático com o logo do Batman para tornar o aprendizado mais divertido.

Este projeto foi desenvolvido **para praticar conceitos importantes de React Native durante os estudos**, incluindo separação de componentes, controle de estado, interação com botões e manipulação de clipboard no dispositivo.

---

## 🎯 Funcionalidades

✅ Gerar senhas aleatórias seguras com 8 caracteres  
✅ Copiar a senha gerada para a área de transferência  
✅ Interface simples e responsiva com logo do Batman  
✅ Aprendizado de `useState`, `TextInput`, `Pressable`, `Clipboard`, e boas práticas de separação de componentes

---

## 🛠️ Tecnologias utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **expo-clipboard** (para cópia da senha gerada)

---

## 📂 Estrutura do projeto (simplificada)

```

bat-pass-app/
├── assets/
│   └── bat-logo.png
├── components/
│   ├── BatButton/
│   │   ├── BatButton.tsx
│   │   └── BatButtonStyle.ts
│   ├── BatLogo/
│   │   ├── BatLogo.tsx
│   │   └── BatLogoStyles.ts
│   └── BatTextInput/
│       ├── BatTextInput.tsx
│       └── BatTextInputStyles.ts
├── pages/
│   └── Home/
│       ├── Home.tsx
│       └── Style.ts
├── services/
│   └── passwordService.ts
└── App.tsx

````

---

## ⚡ Como funciona

🔹 O componente `BatLogo` exibe o título e o logo do Batman no topo.  
🔹 O `BatTextInput` exibe a senha gerada no campo de texto, sem edição direta.  
🔹 Dois botões são exibidos:
- **GENERATE:** Gera uma nova senha aleatória com letras maiúsculas, minúsculas, números e símbolos.
- **⚡COPY:** Copia a senha gerada para a área de transferência usando `expo-clipboard`.

🔹 A geração da senha é feita em `passwordService.ts`, retornando uma senha aleatória de **8 caracteres** com base em um conjunto de caracteres seguros.

---

## 🧠 O que foi estudado neste projeto

✅ **Componentização no React Native** (divisão em `BatLogo`, `BatButton`, `BatTextInput`)  
✅ **Gerenciamento de estado com `useState`** para atualizar a senha gerada dinamicamente  
✅ **Uso do `TextInput` como visualização somente leitura**  
✅ **Interação com `Pressable` para botões** ao invés de `TouchableOpacity`  
✅ **Uso do pacote `expo-clipboard` para copiar textos no dispositivo**  
✅ **Função de geração de senha aleatória utilizando `Math.random()`**  
✅ **Estilização modularizada com `StyleSheet` em arquivos separados**  
✅ Organização de pastas de **componentes, serviços e páginas**  
✅ Boas práticas de importação de imagens e recursos

---

## 🛠️ Como rodar o projeto

1️⃣ Clone o repositório:

```bash
git clone https://github.com/codeguima/bat-pass-app.git
````

2️⃣ Acesse a pasta:

```bash
cd bat-pass-app
```

3️⃣ Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

4️⃣ Rode o projeto com Expo:

```bash
npx expo start
```

5️⃣ Escaneie o QR code no seu dispositivo com o **Expo Go** ou rode no seu emulador.

---

## 🖼️ Interface prevista

* Logo do Batman com o título **BAT PASS GENERATOR**
* Campo de senha centralizado
* Botões **GENERATE** e **⚡COPY** em sequência, estilizados

---

## 📜 Licença

Este projeto foi desenvolvido **apenas para fins de estudo durante o curso de React Native**.
Sinta-se livre para utilizar o código para aprendizado e evolução pessoal.

---

🦇 Feito com disciplina para treinar **React Native** e **lógica de programação prática.**

```

