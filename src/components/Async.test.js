import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async Component", ()=>{
    test("render posts is request succeeds", async ()=>{
        // Assign
        // replacing fetch with dummy function, to avoid traffic on api, data not returned to us by some reason by our api, etc
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async () => [{id: '1', title: 'firstPost', name: 'test'}]
        })
        render (<Async />)

        // Act
        // Nothing

        // Assert
        const listItemElements = await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0);
    })
})


// describe("Async Component", ()=>{
//     test("render posts is request succeeds", async ()=>{
//         // Assign
//         render (<Async />)

//         // Act
//         // Nothing

//         // Assert
//         const listItemElements = await screen.findAllByRole("listitem");
//         expect(listItemElements).not.toHaveLength(0);
//     })
// })