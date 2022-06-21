import React from "react";
import { AccountController } from "../../../controller/implementation/AccountController";
import { AccountInteractor } from "../../../usecase/implementation/AccountInteractor";
import { RestAccountGateway } from "../../../gateway/implementation/RestAccountGateway";

const restAccountGateway = new RestAccountGateway();
const accountInteractor= new AccountInteractor(restAccountGateway);
const accountController=new AccountController(accountInteractor);


export const ControllerContext = React.createContext({
    accountController,
});