# BlueWave - Unofficial Desktop Version of BlueSky

**BlueWave** is an unofficial adaptation of BlueSky redesigned for desktop environments using Electron.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js**
- **Git**

## How to Build

Follow these steps to clone the repository and build the application:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Syirezz/BlueWave.git
    cd BlueWave
    ```

2. **Install dependencies**: 
    ```sh
    npm install
    ```

3. **Build the project**:
   - For macOS:
        ```sh
        npm run build_mac
        ```
   - For Windows:
        ```sh
        npm run build_win
        ```
   - For Linux:
        ```sh
        npm run build_linux
        ```

The resulting application will be located in the `dist` folder.

## How to Use

1. Navigate to the `dist` folder:
    ```sh
    cd dist
    ```

2. Run the application:
    ```sh
    ./BlueWave
    ```

## License

**BlueWave** is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Todos

- [ ] Add more features
- [ ] Fix Blue+ plugin
- [ ] Implement CI/CD for automatic building and releasing

## Contributions

Contributions are welcome! Please fork the repository and submit pull requests.

---

Feel free to let me know if there are any additional improvements or features you'd like to see in BlueWave! :3
