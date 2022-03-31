import { useRouter } from "next/router";
import Transition from "./Transition/Transition";
const Laying = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Transition location={router.pathname}>
        <main className="main">{children}</main>
      </Transition>
    </>
  );
};

export default Laying;
