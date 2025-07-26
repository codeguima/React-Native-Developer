
# Custom Camera App with Photo Saving 📸

Este projeto é uma aplicação em React Native que utiliza a câmera do dispositivo para capturar fotos e salvar essas fotos na galeria do dispositivo. Ele usa a biblioteca `expo-camera` para capturar as imagens e `expo-media-library` para salvar as imagens na galeria.

## Funcionalidades

- **Captura de foto**: Utiliza a câmera do dispositivo para tirar fotos.
- **Troca de câmera**: Permite alternar entre a câmera frontal e traseira.
- **Salvar foto**: Após capturar a foto, o usuário pode salvar a imagem na galeria do dispositivo.
- **Modal de visualização**: Exibe a foto capturada em um modal onde o usuário pode optar por salvar a foto ou fechar a visualização.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Utilizado para simplificar a construção e execução do aplicativo.
  - **expo-camera**: Para acessar e capturar fotos com a câmera do dispositivo.
  - **expo-media-library**: Para salvar fotos no dispositivo.
- **FontAwesome5**: Para ícones de interface.
- **TypeScript**: Utilizado para tipagem estática.

## Dependências

Para rodar esse projeto, você precisa ter as seguintes dependências:

- **expo-camera**: A biblioteca para capturar imagens da câmera.
- **expo-media-library**: A biblioteca para salvar imagens na galeria do dispositivo.
- **FontAwesome5**: Biblioteca de ícones.

### Instalação das dependências

Se você ainda não tem o projeto configurado, pode instalar as dependências com os seguintes comandos:

```bash
# Instalar as dependências do projeto
npm install

# Para adicionar expo-camera
expo install expo-camera

# Para adicionar expo-media-library
expo install expo-media-library

# Para adicionar FontAwesome5
npm install @expo/vector-icons
````

## Como Rodar o Projeto

1. Certifique-se de ter o **Expo CLI** instalado. Se não tiver, instale utilizando o comando:

   ```bash
   npm install -g expo-cli
   ```

2. Clone o repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/codeguima/react-native-cam.git
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd custom-camera-app
   ```

4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o projeto com o comando:

   ```bash
   expo start
   ```

Isso irá abrir o Expo DevTools no seu navegador. A partir daí, você pode rodar o aplicativo em um dispositivo ou emulador.

## Como Funciona

1. **Permissões**: O aplicativo solicita permissões para acessar a câmera e a galeria do dispositivo.
2. **Captura de Foto**: O usuário pode capturar uma foto pressionando o botão de captura. A imagem é exibida em um modal.
3. **Alternar Câmera**: O usuário pode alternar entre a câmera frontal e traseira pressionando o ícone de rotação.
4. **Salvar Foto**: O usuário pode salvar a foto capturada na galeria pressionando o ícone de cartão SD.

## Estrutura do Código

### `CustomCameraView.tsx`

* **takePicture()**: Captura a foto com a câmera do dispositivo.
* **savePicture()**: Salva a foto capturada na galeria do dispositivo utilizando a biblioteca `expo-media-library`.
* **saveToAlbum()**: Função auxiliar para salvar a foto em um álbum específico na galeria.

### `App.tsx`

* **Permissões**: Solicita as permissões necessárias para acessar a câmera e a galeria.
* **Alternar Câmera**: Permite alternar entre a câmera frontal e traseira.
* **Exibição da Câmera**: Exibe a câmera para o usuário capturar fotos.

## Permissões

O aplicativo solicita as seguintes permissões:

* **Câmera**: Para capturar fotos com a câmera do dispositivo.
* **Biblioteca de mídia**: Para salvar fotos na galeria do dispositivo.

## Melhorias Futuras

* Implementar um sistema de **edição de imagem** antes de salvar.
* Suporte a **filtros** e **efeitos especiais** nas fotos.
* Adicionar **notificações** para informar o usuário sobre o sucesso ou falha na operação.

## Licença

Este projeto é de código aberto e está licenciado sob a licença MIT.



