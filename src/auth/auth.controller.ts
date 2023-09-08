import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller('auth')
export class AuthController {
    //auth service is automatically created when initializing the controller
    constructor(private authService: AuthService) {

    }
    //Some requests from client
    @Post("register") //register a new user
    register() {
        //controller calls "service"
        return this.authService.register();
    }
    //Post: ../auth/login
    @Post("login")
    login() {
        return this.authService.login();

    }

}
//export = "make public"