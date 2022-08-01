import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe('<Button />', () => {
    it('should be enabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true}/>);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled();
    });

    it('should be enabled when disabled is false', () => {
        render(<Button text="Load more" disabled={false}/>);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeEnabled();
    });
});