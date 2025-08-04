import { RouterProvider } from './providers/RouterProvider';
import StoreProvider from './providers/StoreProvider/ui/StoreProvider';

function App() {
    return (
        <StoreProvider>
            <RouterProvider />
        </StoreProvider>
    );
}

export default App;
