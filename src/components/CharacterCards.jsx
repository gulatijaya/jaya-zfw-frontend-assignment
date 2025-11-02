import { useEffect, useState } from "react";
import { Modal } from "./Modal";

// Background colors based on character species
const speciesColors = {
    Human: "bg-blue-200",
    Droid: "bg-gray-200",
    Wookiee: "bg-amber-200",
    Rodian: "bg-green-200",
    Hutt: "bg-yellow-200",
    "Yoda's species": "bg-lime-200",
    Trandoshan: "bg-teal-200",
    MonCalamari: "bg-sky-200",
    Ewok: "bg-orange-200",
    default: "bg-purple-200",
};

export const CharacterCard = ({ character }) => {
    const [show, setShow] = useState(false);
    const [speciesName, setSpeciesName] = useState("Human");
    const [imageUrl, setImageUrl] = useState(null);
    const [homeworldData, setHomeworldData] = useState(null);

    // Fetch species
    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                if (character.species.length > 0) {
                    const res = await fetch(character.species[0]);
                    const data = await res.json();
                    setSpeciesName(data.name || "Unknown");
                } else {
                    setSpeciesName("Human");
                }
            } catch {
                setSpeciesName("Human");
            }
        };
        fetchSpecies();
    }, [character.species]);

    // Generate random image using Picsum Photos
    useEffect(() => {
        const randomSeed = Math.floor(Math.random() * 1000);
        setImageUrl(`https://picsum.photos/seed/${randomSeed}/300/200`);
    }, [character]);

    // Fetch homeworld before opening modal
    const handleOpenModal = async () => {
        try {
            const res = await fetch(character.homeworld);
            const data = await res.json();
            setHomeworldData(data);
            setShow(true);
        } catch {
            setHomeworldData(null);
            setShow(true);
        }
    };

    // Set background color based on species
    const bgColor = speciesColors[speciesName] || speciesColors.default;

    return (
        <>
            {/* Character Card */}
            <div
                className={`rounded-xl cursor-pointer shadow ${bgColor}`}
                onClick={handleOpenModal}
            >
                {imageUrl && (
                    <div className="w-full aspect-3/2 overflow-hidden rounded-t-xl">
                        <img
                            src={imageUrl}
                            alt={character.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <h2 className="py-4 text-xl font-semibold text-center">
                    {character.name}
                </h2>
            </div>
            {/* Modal */}
            {show && (
                <Modal
                    character={character}
                    homeworld={homeworldData}
                    close={() => setShow(false)}
                />
            )}
        </>
    );
};
