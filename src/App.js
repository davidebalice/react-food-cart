import AppRouter from "./router/AppRouter";
import CartProvider from "./context/CartProvider";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <AppRouter />
    </CartProvider>
    </AuthProvider>
  );
}

export default App;