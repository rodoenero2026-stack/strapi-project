import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 
import { Label } from "@/components/ui/label";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props;
    const { result, loading } = useGetProductField();

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && <p>Cargando orígenes...</p>}
            
            <RadioGroup onValueChange={(value: string) => setFilterOrigin(value)}>
                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin} className="capitalize cursor-pointer">
                            {origin}
                        </Label>
                    </div>
                ))}
                
                
                <div className="flex items-center space-x-2 mt-2 pt-2 border-t">
                    <RadioGroupItem value="" id="all" />
                    <Label htmlFor="all" className="cursor-pointer">Todos los orígenes</Label>
                </div>
            </RadioGroup>
        </div>
    );
};

export default FilterOrigin;