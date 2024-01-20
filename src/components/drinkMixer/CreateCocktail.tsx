import { useForm, SubmitHandler } from "react-hook-form";

interface Cocktail {
    name: string;
    description: string;
    imageUrl: string;
    ingredients: Ingredient[];
}

interface Ingredient {
    name: string;
    quantity: string;
    unit: string;
}

export const CreateCocktail = () => { 
    const { getValues, handleSubmit, setValue, watch} = useForm<Cocktail>({ 
        defaultValues: { 
            name: '',
            description: '',
            imageUrl: '',
            ingredients: [
                {name: '', quantity: '', unit: ''}, {name: '', quantity: '', unit: ''}
            ]
        } 
    });
const IngridientsList = watch('ingredients')
    const onAddIngredient = () => {
        setValue('ingredients', [...getValues('ingredients'), {name: '', quantity: '', unit: ''}])
    }
    
    const onSubmit: SubmitHandler<Cocktail> = async data => {
        try {
            console.log("Submitting cocktail", data);

            data.description = "Test description";
            data.imageUrl = "Test image url";

            const response = await fetch('/api/cocktails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Cocktail created');
            } else {
                console.log('Error creating cocktail');
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >  
                        <div>
                            {IngridientsList.map(() => (
                            <div key={Math.random()}>
                                <input
                                    type="text"
                                    placeholder="Lys rom" />
                                
                                <input 
                                    type="text" 
                                    placeholder="60" />

                                <select>
                                    <option value="ml">ml</option>
                                    <option value="dashes">stænk</option>
                                    <option value="stk">stk</option>    
                                </select>                 
                            </div>
                            ))} 
                            <div>
                                <button 
                                    type="button"
                                    onClick={onAddIngredient}>
                                    Tilføj ingrediens
                                </button>
                            </div>
                        </div> 
                                            
                    
                    <div>
                        <input type="submit" 
                            value="Gem" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateCocktail;