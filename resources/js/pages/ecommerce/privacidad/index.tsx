import { CookiesContainer } from "@/components/privacidad/CookiesContainer";
import { Faqs } from "@/components/privacidad/Faqs";
import { HeaderPriv } from "@/components/privacidad/header-priv";
import { ManageYourPersonal } from "@/components/privacidad/ManageYourPersonal";
import { ProcessedData } from "@/components/privacidad/ProcessedData";
import { ProtectedYourData } from "@/components/privacidad/ProtectedYourData";
import { SetYourPreferences } from "@/components/privacidad/SetYourPreferences";
import LayoutPrincipal from "@/layouts/layout";
import { Head } from "@inertiajs/react";

export default function index() {
  return (
    <LayoutPrincipal>
      <Head title="Privacidad |"/>
      <HeaderPriv/>
      <ManageYourPersonal/>
      <SetYourPreferences/>
      <CookiesContainer/>
      <ProcessedData/>
      <Faqs/>
      <ProtectedYourData/>
    </LayoutPrincipal>
  )
}
