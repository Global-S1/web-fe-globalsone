import { NextResponse } from "next/server";
import axios from "axios";

const url = process.env.WP_AUTH_URL;
const user = process.env.USER_SEND_FORMS;
const password = process.env.PASSWOR_SEND_FORMS;

export const GET = async () => {
  try {
    const res = await axios.post(`${url}`, {
      username: user,
      password: password,
    });

    const token = await res.data;
    console.log("token", token);
    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error en la autenticación:", error);
  }
};
