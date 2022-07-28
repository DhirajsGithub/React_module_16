import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

// describe is called a suit
describe("Greeting Component", ()=>{
    test("renders 'Hellow World' & 'Greeting From Dhiraj' as a text", ()=>{
        // arrange
        render(<Greeting />)
    
        // Act 
        // ... nothing
    
        // Assert
        // look into the dom as screen.
        const hellowWorldElement = screen.getByText("Hellow World!", {exact : true});
        // exact is by default true
        const isDhirajPresent = screen.getByText("Greeting From Dhiraj", {exact : true});
        expect(hellowWorldElement).toBeInTheDocument();
        expect(isDhirajPresent).toBeInTheDocument();
    });
    test("render good to see you ", ()=>{
        // arrange
        render(<Greeting/>)

        // act

        // assert
        const textPresent = screen.getByText("good to see you", {exact : false})
        expect(textPresent).toBeInTheDocument();
    });
    test('render "Changed! if the button was clicked ', ()=>{
        // arrange
        render(<Greeting />)

        // Act
        const btnElment = screen.getByRole("button");
        userEvent.click(btnElment);

        // Assert
        const outputElement = screen.getByText("Changed !!!");
        expect(outputElement).toBeInTheDocument();
    });
    test('does not render "good to see you" if the button was clicked ', ()=>{
        // arrange
        render(<Greeting />)

        // Act
        const btnElment = screen.getByRole("button");
        userEvent.click(btnElment);

        // Assert
        const outputElement = screen.queryByText("good to see you", {exact : false});
        // queryByText returns null if "good to see you" is not matched
        expect(outputElement).toBeNull();
    });

})


// test("renders Hellow World as a text", ()=>{
//     // arrange
//     render(<Greeting />)

//     // Act 
//     // ... nothing

//     // Assert
//     // look into the dom as screen.
//     const hellowWorldElement = screen.getByText("Hellow World!", {exact : true});
//     const isDhirajPresent = screen.getByText("Greeting From", {exact : true});
//     expect(hellowWorldElement).toBeInTheDocument();
//     expect(isDhirajPresent).toBeInTheDocument();
// })