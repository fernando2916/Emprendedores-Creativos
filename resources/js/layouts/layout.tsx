import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function LayoutPrincipal( {children}: PropsWithChildren) {
  return (
  <>
    <Navbar/>
    <main className="pt-20">
      {children}
    </main>
    <Footer/>
  </>
  )
}
