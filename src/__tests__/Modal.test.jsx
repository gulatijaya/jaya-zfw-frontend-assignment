import React from "react";
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { vi } from "vitest";
import { CharacterCard } from "../components/CharacterCards";

// Mock Modal (to avoid full render issues)
vi.mock("../components/Modal", () => ({
    Modal: ({ character, homeworld, close }) => (
        <div role="dialog">
            <button aria-label="✖" onClick={close}>✖</button>
            <h2>{character.name}</h2>
            <p>{character.height / 100} m</p>
            <p>{character.mass} kg</p>
            <p>{character.birth_year}</p>
            <p>{character.films.length}</p>
            <p>
                {new Date(character.created).toLocaleDateString("en-GB")}
            </p>
            <p>{homeworld?.name}</p>
        </div>
    ),
}));

// Mock character data (like API)
const mockCharacter = {
    name: "Test Character",
    height: "180",
    mass: "75",
    birth_year: "19BBY",
    films: ["url1", "url2"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    created: "2014-12-10T16:20:44.310000Z",
};

// Mock homeworld data
const mockHomeworld = {
    name: "MockPlanet",
    terrain: "plains",
    climate: "temperate",
    population: "12345",
};

describe("CharacterCard → Modal integration", () => {
    beforeEach(() => {
        vi.stubGlobal("fetch", (url) => {
            // handle homeworld API
            if (String(url).includes("/planets/1")) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockHomeworld),
                });
            }
            // handle species or others
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ name: "Human" }),
            });
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test("opens modal and shows correct character details", async () => {
        render(<CharacterCard character={mockCharacter} />);

        // Card renders name
        expect(screen.getByText("Test Character")).toBeInTheDocument();

        // Click to open modal
        fireEvent.click(screen.getByText("Test Character"));

        // Wait for modal to appear
        await waitFor(() => {
            expect(screen.getByRole("button", { name: "✖" })).toBeInTheDocument();
        });

        // Verify all key info appears correctly inside modal
        const modal = screen.getByRole("dialog");
        expect(within(modal).getByText(/Test Character/)).toBeInTheDocument();
        expect(within(modal).getByText(/1.8 m/)).toBeInTheDocument();
        expect(within(modal).getByText(/75 kg/)).toBeInTheDocument();
        expect(within(modal).getByText(/19BBY/)).toBeInTheDocument();
        expect(within(modal).getByText("2")).toBeInTheDocument();
        expect(within(modal).getByText(/10\/12\/2014/)).toBeInTheDocument();
        expect(within(modal).getByText(/MockPlanet/)).toBeInTheDocument();

    });
});
