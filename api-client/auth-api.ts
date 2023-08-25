import { LoginPayload } from "@/models/index";
import axiosClient from "./api-client";

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post("/login", payload);
    },
    logout() {
        return axiosClient.post("/logout");
    },
    getProfile() {
        return axiosClient.get("/profile");
    },
};
