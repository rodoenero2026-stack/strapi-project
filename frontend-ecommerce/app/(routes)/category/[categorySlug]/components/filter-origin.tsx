import { useGetProductField } from "@/api/getProductField";

const FilterOrigin = () => {
    const { result, loading } = useGetProductField()

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result === null && (
                <p>Cargando origen...</p>
            )}
        </div>
    );
};

export default FilterOrigin;