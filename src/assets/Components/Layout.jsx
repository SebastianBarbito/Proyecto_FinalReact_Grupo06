import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <h1>Pagina de Grupo 6</h1>
            <Outlet />
        </div>
    );
}

export default Layout;