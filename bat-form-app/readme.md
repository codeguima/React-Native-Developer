

# 🦇 Bat Form App

**Um app em React Native para praticar formulários, estados e histórico de envio de dados, utilizando tema Batman para tornar o aprendizado divertido e visualmente agradável.**

---

## 🚀 Sobre o projeto

O **Bat Form App** permite abrir um formulário onde o usuário pode preencher **Nome**, **Telefone** e **Endereço**, enviá-los, visualizar o histórico de envios e limpar o histórico quando desejar. O app também possui **botão de voltar para a tela inicial com o logo do Batman**, tornando a navegação intuitiva.

Este projeto foi desenvolvido durante o curso de **React Native**, com o objetivo de treinar:

✅ Gerenciamento de múltiplos estados  
✅ Criação e manipulação de formulários controlados  
✅ Renderização condicional de telas  
✅ Armazenamento e exibição de histórico de dados em listas  
✅ Componentização e reutilização de botões e inputs

---

## 🎯 Funcionalidades

✅ Tela inicial com logo do Batman e botão para abrir formulário  
✅ Formulário com campos de Nome, Telefone e Endereço  
✅ Botão de envio de dados com validação (campos obrigatórios)  
✅ Exibição do histórico de envios abaixo do formulário  
✅ Botão para limpar histórico  
✅ Botão para retornar à tela inicial  
✅ Layout limpo e responsivo, adaptado para aprendizado prático

---

## 🛠️ Tecnologias utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **Componentização reutilizável**
- `useState` para controle de estado
- `TextInput`, `Pressable`, `View`, `Text`, `Image` para interface
- `StyleSheet` para estilização modular

---

## 📂 Estrutura do projeto (simplificada)

```

bat-form-app/
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
├── screens/
│   └── Home/
│       ├── Home.tsx
│       └── Style.ts
├── App.tsx

````

---

## ⚡ Como funciona

🔹 Ao abrir o app, o usuário vê o **logo do Batman** e o botão **"Abrir Formulário"**.

🔹 Ao clicar, o formulário aparece com campos:
- Nome
- Telefone (com teclado numérico)
- Endereço

🔹 O botão **"Enviar"** salva os dados no **histórico de envios** exibindo-os abaixo do formulário.

🔹 É possível:
- Voltar para a tela inicial clicando em "⬅️ Voltar".
- Limpar todo o histórico de envios clicando em "Limpar Histórico".

---

## 🧠 O que foi estudado neste projeto

✅ **Gerenciamento de múltiplos estados com `useState`**  
✅ **Formulários controlados (inputs controlados pelo estado)**  
✅ **Validação simples de campos obrigatórios**  
✅ **Armazenamento e exibição de histórico de objetos no estado**  
✅ **Renderização condicional (`showForm` para alternar telas)**  
✅ **Mapeamento de listas com `.map` e `key`**  
✅ **Componentização limpa: `BatButton`, `BatTextInput`, `BatLogo` reutilizáveis**  
✅ **Estilização modular com `StyleSheet` em arquivos separados**  
✅ **Prática de organização de projeto por pastas (`components`, `screens`)**

---

## 🛠️ Como rodar o projeto

1️⃣ Clone o repositório:

```bash
git clone https://github.com/codeguima/bat-form-app.git
````

2️⃣ Acesse a pasta:

```bash
cd bat-form-app
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

5️⃣ Abra no **Expo Go** no celular ou rode em seu emulador.

---

## 🖼️ Interface prevista

* Tela inicial:

  * Logo Batman
  * Botão "Abrir Formulário"
* Formulário:

  * Campos Nome, Telefone, Endereço
  * Botão "Enviar"
  * Histórico exibindo ícones:

    * 👤 Nome
    * 📞 Telefone
    * 🏠 Endereço
  * Botão "Limpar Histórico"
  * Botão "⬅️ Voltar" no topo esquerdo

---

## 📜 Licença

Este projeto foi criado **exclusivamente para fins de estudo durante o curso de React Native**.
Sinta-se à vontade para utilizar como base para praticar seu aprendizado.

---

🦇 Feito com disciplina e foco para praticar **formulários no React Native**.




