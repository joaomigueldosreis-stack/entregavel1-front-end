import SignInForm from "@/components/Signinform";
import TitleDescriptionInfo from "@/components/Titledescriptioninfo";
import PostCard from "@/components/Postcard";
import PersonalDataForm from "@/components/Personaldataform";
export default function Home() {
  return (
    <main style={{ padding: 24, display: "flex", flexDirection: "column", gap: 32 }}>
      <TitleDescriptionInfo
        title="Exercício de componentes"
        description="Página de teste reunindo todos os componentes criados."
      />
      <SignInForm />
      <PostCard />
      <PersonalDataForm />
    </main>
  );
}