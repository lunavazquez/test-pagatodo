import { useState, useEffect } from "react";
import Bank from "../../components/Bank";
import "./home.css";

export default function Home() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    async function BankObject() {
      const response = await fetch(
        "https://dev.obtenmas.com/catom/api/challenge/banks"
      );
      const data = await response.json();
      setBanks(data);
    }
    BankObject();
  }, []);

  if (!banks) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="home">
      <h1 className="title">Test Paga Todo</h1>
      <div className="container">
        {banks.map((bank) => (
          <Bank
            key={bank.bankName}
            description={bank.description}
            age={bank.age}
            name={bank.bankName}
            img={bank.url}
          />
        ))}
      </div>
    </div>
  );
}
