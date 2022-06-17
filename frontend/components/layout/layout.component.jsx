import Header from "../header/header.component";

export default function Layout ({ children }){
    return(
        <>
        <Header />
        <main>{children}</main>
        </>
    )
}