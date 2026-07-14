import { fireEvent, render, screen } from "@testing-library/react"
import Menu from "../components/Menu"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../components/Cart"

it("should load Menu Component Correctly",()=>{
    render(
        <Provider store={appStore}>
            <Menu/>
        </Provider>
        
    )
    const restaurantName = screen.getByText("Murliwala pure veg")
    expect(restaurantName).toBeInTheDocument()

    
    
})


it("should expand accordion correctly",()=>{
    render(
        <Provider store={appStore}>
            <Menu/>
        </Provider>
        
    )
    const accordionHeader = screen.getByText("Chur Chur Naan [5]")
    fireEvent.click(accordionHeader)

    const accordionBodyItems = screen.getAllByTestId("food-item")
    expect(accordionBodyItems.length).toBe(5)

})

it("should show added items in header count and cart component correctly",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <Menu/>
                <Cart/>
            </Provider>
        </BrowserRouter>     
    )
    const accordionHeader = screen.getByText("Chur Chur Naan [5]")
    fireEvent.click(accordionHeader)

    const accordionBodyItems = screen.getAllByTestId("food-item")
    expect(accordionBodyItems.length).toBe(5)

    const addBtns = screen.getAllByRole("button",{name:"ADD +"})
    fireEvent.click(addBtns[0])

    expect(screen.getByText("items-1")).toBeInTheDocument() //on adding 1 item

    fireEvent.click(addBtns[1])
    expect(screen.getByText("items-2")).toBeInTheDocument() // on adding 2 item


    const totalFoodItems = screen.getAllByTestId("food-item")
    expect(totalFoodItems.length).toBe(7); // 5 from accordion body of menu component and 2 from card component becausing to show items both are using same component menuitemlist

    const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"})
    fireEvent.click(clearCartBtn)

    expect(screen.getByText("items-0")).toBeInTheDocument() //remove count from header 2 to 0 

    const FoodItemsAfterCLearCart = screen.getAllByTestId("food-item")
    expect(FoodItemsAfterCLearCart.length).toBe(5); //removed 2 items from cart 

    expect(screen.getByText("Looks Like you didn't add any food.")).toBeInTheDocument()
})