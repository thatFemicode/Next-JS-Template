import { useRouter } from "next/router";
import Transition from "./Transition/Transition";
import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import { MainStyled } from "Styling/MainStyled";

const Laying = ({ children }) => {
  const router = useRouter();
  return (
    <MainStyled>
      <Navbar />
      <Transition location={router.pathname}>
        <main style={{ height: "100%" }}>{children}</main>
      </Transition>
      <Footer />
    </MainStyled>
  );
};

export default Laying;
