
# 🗂️ React App Drawer Example

Um projeto em **React Native + Expo** para **estudo prático de navegação utilizando Drawer com React Navigation**.

---

## 🚀 Sobre o projeto

Este projeto demonstra **como implementar uma navegação com Drawer** em um app React Native utilizando **@react-navigation/drawer**, permitindo ao usuário alternar facilmente entre as telas **Home** e **Galeria** a partir de um menu lateral deslizante.

---

## 🎯 Funcionalidades

✅ Configuração do **React Navigation** com **Drawer Navigator**  
✅ **Duas telas implementadas**:
- 🏠 **Home** (Inicio)
- 🖼️ **Galeria** (Gallery)

✅ Navegação fluida via swipe ou botão de menu lateral  
✅ Organização limpa de rotas (`Routes`, `DrawerRoutes`)  
✅ Prática de estrutura modular para **facilitar escalabilidade de navegação em apps reais**

---

## 🛠️ Tecnologias utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **@react-navigation/native**
- **@react-navigation/drawer**
- **react-native-reanimated**
- **react-native-gesture-handler**

---

## 📂 Estrutura do projeto

```

react-app-drawer-example/
├── App.tsx
├── babel.config.js
├── src/
│   ├── routes/
│   │   ├── drawer.routes.tsx
│   │   └── index.tsx
│   └── screens/
│       ├── HomeScreen/
│       │   └── HomeScreen.tsx
│       └── GalleryScreen/
│           └── GalleryScreen.tsx

````

---

## 🧠 O que foi estudado neste projeto

✅ Configuração do **Drawer Navigator** com `createDrawerNavigator`  
✅ Criação de telas independentes para navegação  
✅ **Organização de rotas em arquivos separados** para escalabilidade  
✅ Uso do **NavigationContainer** como provedor de contexto de navegação  
✅ Integração com **react-native-reanimated e react-native-gesture-handler** para animações fluidas do Drawer  
✅ Configuração de `babel.config.js` para suportar corretamente o plugin do **react-native-reanimated**

---

## ⚡ Como rodar o projeto

1️⃣ Clone o repositório:

```bash
git clone https://github.com/codeguima/react-app-drawer-example.git
````

2️⃣ Acesse o diretório:

```bash
cd react-app-drawer-example
```

3️⃣ Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

4️⃣ Rode o projeto:

```bash
npx expo start
```

5️⃣ Abra o projeto em seu emulador ou dispositivo usando o **Expo Go**.

---

## 🖼️ O que você verá

✅ **Tela Home** ao abrir o app
✅ Deslize a partir da borda esquerda ou toque no ícone de menu para abrir o Drawer
✅ No Drawer, selecione **Galeria** para navegar para a tela de Galeria
✅ Navegação suave e sem reload entre as telas

---

## 📜 Licença

Este projeto foi desenvolvido **para fins de estudo durante o aprendizado de React Native**, sendo livre para ser utilizado por outros estudantes para aprendizado de **Drawer Navigator**.

---

🗂️ **Praticando para construir apps React Native escaláveis, modulares e com navegação eficiente.**

---



