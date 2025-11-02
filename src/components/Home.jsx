import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacters, setpage } from "../store/CharacterSlice"
import { CharacterCard } from "./CharacterCards"
import { Pagination } from "./Pagination"

export const Home = () => {
    const dispatch = useDispatch()
    const { data, loading, error, page } = useSelector((state) => state.characters)

    // Fetch characters whenever 'page' changes
    useEffect(() => {
        dispatch(fetchCharacters(page))
    }, [dispatch, page])

    // Loading spinner while fetching data
    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-10 h-10 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );

    // Error Message
    if (error) {
        return (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
                <p className="text-center text-red-600 text-base sm:text-lg font-medium">
                    Oops! Something went wrong while fetching characters.
                </p>
            </div>
        )
    }
    // Handle empty state
    if (!data || data.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500">Fetching characters...</p>
            </div>
        )
    }
    // Main Layout
    return (
        <>
            <div className="p-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center ">Star Wars App</h1>
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 sm:my-10">
                    {
                        data.map((character, i) => (
                            <CharacterCard key={i} character={character} />
                        ))
                    }
                </div>
                {/*  Pagination controls */}
                {data.length > 0 && (
                    <Pagination
                        currentPage={page}
                        totalPages={9}
                        onPageChange={(p) => dispatch(setpage(p))}
                    />
                )}
            </div>

        </>
    )
}