# 📱 React Native App com Navegação em Pilha (Stack)

Este projeto usa o **React Navigation** com a navegação **Stack** (pilha), ideal para organizar telas em sequência, com transições típicas de navegação empilhada.

---

## 🚀 Passo a Passo para Criar o Projeto

### 1. Criar um novo projeto Expo
```bash
npx create-expo-app react-app-stack-navigation --template
```
### 2. Instalar o núcleo de navegação
```bash
npm install @react-navigation/native
```
📘 Documentação oficial: https://reactnavigation.org/docs

### 3. Instalar dependências nativas (obrigatórias)

```bash
npx expo install react-native-screens react-native-safe-area-context
```

### 4. Instalar o método de navegação Stack

```bash
npm install @react-navigation/stack
```

### 🔗 Links Úteis

📘 React Navigation Docs (Stack Navigator): https://reactnavigation.org/docs/stack-navigator

🔸 FontAwesome (ícones para botões customizados): https://fontawesome.com/icons

🔸 MaterialCommunityIcons (ícones Material Design): https://pictogrammers.com/library/mdi/

### 📌 Observações

A navegação stack permite controle fácil da hierarquia de telas e navegação tradicional "para frente e para trás".

Você pode customizar os headers, botões e animações para adequar o fluxo do seu app.

Para navegação com abas, considere usar também bottom-tabs, mas aqui focamos apenas em pilha (stack).

