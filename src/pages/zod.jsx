import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export function Zod() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = schema.safeParse({ email, password });

    if (result.success) {
      setError("");
      console.log("✅ To‘g‘ri:", result.data);
    } else {
      setError(result.error.issues[0].message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Parol" />
      <button>Jo‘natish</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}