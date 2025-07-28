
# 📹 React Native Video Recorder

Um aplicativo simples de gravação de vídeo usando **React Native** com **Expo**, que permite:

- Gravar vídeos com a câmera do dispositivo
- Assistir ao vídeo gravado
- Compartilhar, salvar ou descartar o vídeo

Este projeto utiliza os pacotes `expo-camera`, `expo-av`, `expo-media-library` e `expo-sharing` para fornecer uma experiência completa de captura e manipulação de vídeos.

---

## 🚀 Funcionalidades

- Permissão de uso de câmera, microfone e biblioteca de mídia
- Gravação de vídeos com limite de até 60 segundos
- Reprodução do vídeo com controles nativos
- Botões para **compartilhar**, **salvar** ou **descartar** o vídeo gravado

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- [expo-av](https://docs.expo.dev/versions/latest/sdk/av/)
- [expo-media-library](https://docs.expo.dev/versions/latest/sdk/media-library/)
- [expo-sharing](https://docs.expo.dev/versions/latest/sdk/sharing/)

---

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/video-recorder-app.git
   cd video-recorder-app
````

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npx expo start
   ```

> Certifique-se de ter o [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente.

---

## 📁 Estrutura do Projeto

```
.
├── App.tsx                         # Componente principal
├── src/
│   └── components/
│       ├── VideoPlayer.tsx        # Player de vídeo com botões de ação
│       ├── CameraView.tsx         # Interface personalizada da câmera
│       ├── props.ts               # Tipagens dos componentes
│       └── style.ts               # Estilos compartilhados
```

---

## 📸 Capturas de Tela (opcional)

> Você pode adicionar aqui screenshots do app em execução (gravação, preview, botões de ação, etc).

---

## ✅ Permissões Necessárias

O app solicita as seguintes permissões:

* Acesso à câmera
* Acesso ao microfone
* Acesso à biblioteca de mídia

Caso o usuário negue alguma delas, mensagens informativas são exibidas.

---

## ✍️ Autor

Feito com 💙 por [Jhonny Guimarães](https://github.com/codeguima)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).


