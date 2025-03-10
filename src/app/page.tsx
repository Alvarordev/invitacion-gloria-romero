"use client";

import { literata, montserrat } from "@/lib/fonts";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState(""); // Agregamos estado para el nombre

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Por favor, ingresa tu nombre.");
      return;
    }

    setLoading(true);
    setMessage("");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz_Rt3odJKPb2mEe0pFhNuTQaSjCSRRy8xj80_syoKeApUwTdxuPCCECdK-YWVQiI24/exec";

    try {
      const formData = new FormData();
      formData.append("Name", name); // Ahora agregamos el valor manualmente

      console.log("FormData enviado:", formData.get("Name")); // Verifica si tiene valor

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log(response)
        setMessage("¡Asistencia confirmada! 🎉");
        setName(""); // Reiniciar el input
      } else {
        setMessage("Hubo un error al enviar los datos. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error en la conexión. Revisa tu internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#faf1e9] text-[#502916]  ${montserrat.className} relative overflow-hidden`}
    >
      <div>
        <img
          src="flower5.png"
          alt=""
          className="absolute -top-5 -left-8 h-60 rotate-[25deg]"
        />
        <img
          src="insect3.png"
          alt=""
          className="absolute -top-2 left-2/5 h-16 rotate-[25deg]"
        />
        <img
          src="flower4.png"
          alt=""
          className="absolute -bottom-8 left-1/3 h-20 "
        />
        <img
          src="flower2.png"
          alt=""
          className="absolute bottom-0 -left-10 h-60"
        />
        <img
          src="flower3.png"
          alt=""
          className="absolute -bottom-8 -right-8 h-52"
        />
        <img
          src="flower4.png"
          alt=""
          className="absolute top-1/3 -right-10 h-20 "
        />
        <img
          src="flower3.png"
          alt=""
          className="absolute -top-16 right-0 h-44 rotate-[145deg]"
        />
        <img
          src="insect1.png"
          alt=""
          className="absolute top-3/6 -left-10 h-20 "
        />
      </div>

      <div className="w-full max-w-[420px] mx-auto">
        <div
          className={`flex flex-col justify-center items-center pt-16 text-center`}
        >
          <div
            className={`flex flex-col justify-center items-center text-center ${literata.className} font-light gap-3`}
          >
            <p className={`font-light ${montserrat.className}`}>
              Únete a nosotros para celebrar un cumpleaños en honor a{" "}
            </p>
            <p className="text-9xl font-medium">80</p>
            <p className="text-4xl">GLORIA ROMERO</p>
            <div className="flex gap-3 items-center pt-4">
              <span className=" h-[1px] w-9 bg-[#502916]"></span>
              <p className="text-2xl">15 de Marzo</p>
              <span className=" h-[1px] w-9 bg-[#502916]"></span>
            </div>
            <p className={`font-light ${montserrat.className}`}>
              Inicio 18:00 pm
            </p>
          </div>

          <div className="flex flex-col items-center text-center py-12 gap-1 font-light">
            <p className="font-bold text-lg pb-2">LUGAR</p>
            <p>Jr. Carlos de los Heros 277, Pueblo Libre</p>
            <p>Hora: 06:00 PM - 12:00 AM</p>
            <a
              href="https://maps.app.goo.gl/WoH5McuZEfVd765j6"
              target="_blank"
              className="bg-[#502916] text-[#faf1e9] px-4 py-2 rounded-lg mt-4 cursor-pointer hover:scale-105 transition-all font-medium"
            >
              Ver Ubicación
            </a>
          </div>

          <div className="flex flex-col items-center pb-12 text-center">
            <img src="shirt.svg" alt="shirt" className="h-14" />
            <p className="font-bold text-lg pb-3 pt-1">VESTIMENTA</p>
            <p className="font-light">
              La vestimenta para el evento sera sport elegante. Se recomienda el
              uso de prendas como pantalones de vestir, camisas o polos con
              cuello, y zapatos formales o zapatillas elegantes.
            </p>
          </div>

          <div className="flex flex-col items-center text-center pb-16">
            <img src="letter.svg" alt="letter" className="h-14" />
            <p className="font-bold text-lg pb-3 pt-1">
              CONFIRMA TU ASISTENCIA
            </p>
            <p className="font-light pb-3">
              Nos encantaría contar con tu presencia en este momento tan
              memorable. Ingresa tu nombre y confirma tu asistencia.
            </p>
            <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          value={name} // Conectamos el estado
          onChange={(e) => setName(e.target.value)} // Actualizamos el estado
          placeholder="Ingresa tu nombre"
          disabled={loading}
          className="bg-white px-4 py-2 rounded-lg w-full"
        />
          <button type="submit" disabled={loading} className="bg-[#502916] text-[#faf1e9] px-4 py-2 rounded-lg mt-4 cursor-pointer hover:scale-105 transition-all">
          {loading ? "Enviando..." : "Confirmar"}
            </button>
      </form>
      {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
