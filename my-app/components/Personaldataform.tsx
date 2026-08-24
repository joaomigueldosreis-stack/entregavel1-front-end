"use client";

import Button from "./Button";
import Input from "./Input";

export default function PersonalDataForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Dados pessoais enviados");
  }

  return (
    <form className="personal-data-form" onSubmit={handleSubmit}>
      <h2>Dados pessoais</h2>
      <Input placeholder="Nome completo" />
      <Input placeholder="CPF" />
      <Input placeholder="Telefone" />
      <Input placeholder="Endereço" />
      <Button>Salvar</Button>
    </form>
  );
}