"use client";

import Button from "./Button";
import Input from "./Input";

export default function SignInForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login enviado");
  }

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <h2>Entrar</h2>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button>Entrar</Button>
    </form>
  );
}