import React from "react";
import Header from "../header";
import { WrapperLayout } from "./styled";

function Layout({children}) {
    return (
        <WrapperLayout>
            <Header />
            {children}
        </WrapperLayout>
    );
}

export default Layout;