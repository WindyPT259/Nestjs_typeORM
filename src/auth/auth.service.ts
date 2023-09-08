import { Injectable } from "@nestjs/common";
@Injectable({}) //This is "Dependency Injection"
export class AuthService {
    register() {
        return {
            message: "Register an new user"
        }
    }
    login() {
        return {
            message: "This is login"
        }
    }
}