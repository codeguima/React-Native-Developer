
# 🚗 Lamborghini Garage

Aplicativo mobile desenvolvido com **React Native + Expo**, que exibe uma galeria de modelos da Lamborghini com imagens, preços e botão de compra. Os dados são obtidos a partir de uma API pública com informações fictícias.

---

## 📱 Funcionalidades

- Visualizar modelos de carros Lamborghini
- Ver nome, ano de lançamento e preço
- Alternar entre os carros com botões de navegação
- Imagens carregadas dinamicamente
- Interface estilizada com tema escuro

---

## 📦 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🧱 Estrutura de Pastas

```

.
├── assets/
│   ├── icon.png           # Ícone do app
│   ├── logo.png           # Imagem do splash screen
├── src/
│   ├── components/
│   │   ├── CardView/
│   │   │   ├── index.tsx
│   │   │   ├── style.ts
│   │   │   ├── props.ts
│   │   │   ├── actions.ts
│   │   ├── BuyButton.tsx
│   │   ├── Divider.tsx
│   ├── constants/
│   │   ├── car.ts
│   ├── services/
│   │   ├── api.ts
├── App.tsx
├── app.json

````

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/codeguima/lamborghini-garage.git
cd lamborghini-garage

# Instale as dependências
npm install

# Inicie o projeto com cache limpo
expo start -c
````

---

## 🔗 API utilizada

* [Fake Lamborghini API](https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json)

Formato esperado da resposta:

```json
{
  "cars": [
    {
      "id": 1,
      "carName": "2015 Lamborghini Huracán GT3",
      "releaseYear": 2015,
      "price": "$450,000"
    },
    ...
  ]
}
```

---

## 🖼️ Assets

* O ícone do app é definido em `app.json`:

```json
"icon": "./assets/icon.png"
```

* Splash screen (tela inicial):

```json
"splash": {
  "image": "./assets/logo.png",
  "resizeMode": "contain",
  "backgroundColor": "#000000"
}
```

* Para ícones no Android:

```json
"android": {
  "adaptiveIcon": {
    "foregroundImage": "./assets/icon.png",
    "backgroundColor": "#000000"
  }
}
```

---

## 🚀 Como usar

* Inicie o app com `expo start`
* Use os botões `<` e `>` para navegar entre os carros
* Toque em **"Buy"** (sem função no momento)

---

## ❗ Problemas comuns

* Se as imagens ou ícones não aparecerem, tente:

  ```bash
  expo start -c
  ```
* Verifique se o arquivo `icon.png` realmente existe em `./assets/` e tem tamanho mínimo de 1024x1024px

---

## 📄 Licença

MIT © \ by Codeguima


