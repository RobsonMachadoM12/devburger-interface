import { CartProvider } from './CartContext';
import { UserProvider } from './UserContaxt';

const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>{children}</CartProvider>;
        </UserProvider>
    );
};


export default AppProvider;