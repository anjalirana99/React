import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
test("should load header component with login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>    
    )
    const loginbutton = screen.getByRole("button",{name:"Login"})
    expect(loginbutton).toBeInTheDocument()
    
})


test("should change to logout onclick of login",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginbtn = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginbtn)
    const logoutbtn = screen.getByRole("button",{name:"Logout"})
    expect(logoutbtn).toBeInTheDocument()
})