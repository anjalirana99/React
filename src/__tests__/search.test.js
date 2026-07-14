import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body"
import MOCK_DATA from "../testMocks/ApiDataMock.json"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
     return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
    })

test("should search resList with pizza text input",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
                    <Body/>
            </BrowserRouter>
        
        )   
    )
    const searchbtn = screen.getByRole("button",{name:"Search"})
    expect(searchbtn).toBeInTheDocument()
    const searchInput = screen.getByTestId("searchList-input")
    expect(searchInput).toBeInTheDocument()

    fireEvent.change(searchInput,{target:{value:"pizza"}})
    fireEvent.click(searchbtn)

    const listCards = screen.getAllByTestId("res-card")
    expect(listCards.length).toBe(2)
})

it("should filter top rated restaurants",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const topRatedbtn = screen.getByText("Top Rated Restaurants")
    expect(topRatedbtn).toBeInTheDocument()

    fireEvent.click(topRatedbtn)
    const listCards = screen.getAllByTestId("res-card")
    expect(listCards.length).toBe(7)
})