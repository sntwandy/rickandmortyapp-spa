const Header = () => {
    const view = `
        <div class="main-header">
            <div class="header-logo">
                <a href="/">
                    <h1>Rick and Morty | Characters</h1>
                </a>
            </div>
            <div class="header-nav">
                <a href="#/about">About</a>
                <a href="https://rickandmortyapi.com/" target="_blank">API</a>
            </div>
        </div>
    `;
    return view;
}

export default Header;