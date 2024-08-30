"use client";

import { getMemberShip } from "@/actions/get.membership";
import { useEffect, useState } from "react";

const useGetMembership = () => {
  const [data, setData] = useState<any | null>(null); // Atualizado para null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Flag para evitar atualização de estado em componente desmontado

    const handleGetMembership = async () => {
      try {
        const res = await getMemberShip();
        if (isMounted) { // Verifica se o componente ainda está montado
          setData(res);
        }
      } catch (error) {
        console.log("Erro ao obter a assinatura:", error);
      } finally {
        if (isMounted) { // Garantia de atualização de estado
          setLoading(false);
        }
      }
    };

    handleGetMembership();

    return () => {
      isMounted = false; // Limpa a flag quando o componente é desmontado
    };
  }, []);

  return { data, loading };
};

export default useGetMembership;
