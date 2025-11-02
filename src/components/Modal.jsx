export const Modal = ({ character, homeworld, close }) => {

  // Format Date as(dd-MM-yyyy)
  const date = new Date(character.created);
  const formattedDate = date.toISOString().split("T")[0].split("-").reverse().join("-");

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 w-[75%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[35%] max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-out scale-100 animate-fadeIn">
        <button
          onClick={close}
          className="absolute right-3 top-2 text-gray-500 hover:text-black"
        >
          ✖
        </button>
        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-bold mt-2 mb-5 text-center text-gray-700 tracking-wide">
          {character.name}
        </h2>
        {/* Character Details */}
        <div className="grid grid-cols-2 gap-3 text-sm sm:text-base">
          <div className="bg-gray-200 rounded-lg p-2">
            <p className="text-gray-600">Height</p>
            <p className="font-semibold">{character.height !== "unknown" ? `${character.height / 100} m` : "Unknown"}</p>
          </div>

          <div className="bg-gray-200 rounded-lg p-2">
            <p className="text-gray-600">Mass</p>
            <p className="font-semibold">{character.mass !== "unknown" ? `${character.mass} kg` : "Unknown"}</p>
          </div>

          <div className="bg-gray-200 rounded-lg p-2">
            <p className="text-gray-600">Birth Year</p>
            <p className="font-semibold">{character.birth_year}</p>
          </div>

          <div className="bg-gray-200 rounded-lg p-2">
            <p className="text-gray-600">Films Appeared</p>
            <p className="font-semibold">{character.films.length}</p>
          </div>

          <div className="bg-gray-200 rounded-lg p-2 col-span-2">
            <p className="text-gray-600">Date Added</p>
            <p className="font-semibold">
              {formattedDate}
            </p>
          </div>
        </div>
        {/* Homeworld Details */}
        {homeworld && (
          <div className="mt-4 border-t border-gray-300 pt-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
              Homeworld Details
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm sm:text-base">
              <div className="bg-gray-200 rounded-lg p-2">
                <p className="text-gray-600">Name</p>
                <p className="font-semibold wrap-break-word">{homeworld.name}</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-2">
                <p className="text-gray-600">Terrain</p>
                <p className="font-semibold wrap-break-word">{homeworld.terrain}</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-2">
                <p className="text-gray-600">Climate</p>
                <p className="font-semibold wrap-break-word">{homeworld.climate}</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-2">
                <p className="text-gray-600">Population</p>
                <p className="font-semibold wrap-break-word">{homeworld.population}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
