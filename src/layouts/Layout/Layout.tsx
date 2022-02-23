import { FC } from 'react';


const Layout: FC = ({ children }) => {
    return (
        <div className="root">
            <header>
                HEADER
            </header>
            {children}
            <footer>
                FOOTER
            </footer>
        </div>
    );
};

export default Layout;
