"use server";

import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";
import { currentUser } from "@clerk/nextjs/server";

export const getMemberShip = async () => {
  try {
    await connectDb(); // Verifique se a conexão com o banco de dados está funcionando corretamente

    const user = await currentUser();
    if (user) {
      // console.log("Usuário encontrado:", user.id); // Log para verificar o usuário
      const membership = await Membership.findOne({
        userId: user.id,
      }).lean();

      // console.log("Assinatura encontrada:", membership); // Log para verificar a assinatura
      return membership ? membership : null; // Retorne o valor encontrado
    } else {
      // console.log("Nenhum usuário encontrado.");
      return null; // Retorne null se não houver usuário
    }
  } catch (error) {
    // console.log("Erro ao obter a assinatura:", error);
    return null; // Retorne null em caso de erro
  }
};
