import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import ErrorLayout from "./components/UI/Error/ErrorLayout";
import CartContentPage from "./pages/CartContentPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import FurniturePage, {
  loader as FurniturePageLoader,
} from "./pages/FurniturePage";
import HomePage, { loader as HomePageLoader } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MenPage, { loader as MenPageLoader } from "./pages/MenPage";
import ProductDetail, {
  loader as ProductDetailLoader,
} from "./pages/ProductDetail";
import SignupPage from "./pages/SignupPage";
import SkincarePage, {
  loader as SkincarePageLoader,
} from "./pages/SkincarePage";
import WishlistPage from "./pages/WishlistPage";
import WomenPage, { loader as WomenPageLoader } from "./pages/WomenPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorLayout />}>
      <Route index element={<HomePage />} loader={HomePageLoader} />
      <Route
        path="/furniture"
        element={<FurniturePage />}
        loader={FurniturePageLoader}
      />
      <Route path="/women" element={<WomenPage />} loader={WomenPageLoader} />
      <Route
        path="/skincare"
        element={<SkincarePage />}
        loader={SkincarePageLoader}
      />
      <Route path="/men" element={<MenPage />} loader={MenPageLoader} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path=":id"
        element={<ProductDetail />}
        loader={ProductDetailLoader}
      />
      <Route path="/viewcart" element={<CartContentPage />} />
      {!localStorage.getItem("isLoggedIn") && (
        <Route path="/login" element={<LoginPage />} />
      )}
      {!localStorage.getItem("isLoggedIn") && (
        <Route path="/signup" element={<SignupPage />} />
      )}
      {localStorage.getItem("isLoggedIn") && (
        <Route path="/checkout" element={<CheckoutPage />} />
      )}
    </Route>
  )
);

function App() {
  const hours = 1; //number of hours, conversion below;
  const now = new Date().getTime();
  const setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }

  return <RouterProvider router={router} />;
}

export default App;
