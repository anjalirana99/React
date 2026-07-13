import { render, screen } from "@testing-library/react"
import RestrauntCard from "../components/RestrauntCard"
import CardMockData from "../testMocks/RestaurantCardMock.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("should render Card component with correct data",()=>{
    render(
        <BrowserRouter>
            <RestrauntCard ResData={CardMockData}/>
        </BrowserRouter>
        
    )
    const cardname = screen.getByText("Pizza Hut")
    expect(cardname).toBeInTheDocument()
})