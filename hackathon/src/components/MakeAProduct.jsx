import {useState} from "react";
import {useNavigate} from "react-router-dom";

function MakeAProduct() {
    const navigate = useNavigate();
    const [prompt, setPrompt] = useState("");
    const [designOption, setDesignOption] = useState("AI");
    const [productType, setProductType] = useState("shirt");
    const [showPreviews, setShowPreviews] = useState(false);
    const [previews, setPreviews] = useState([]);

    const generateMerch = async () => {
        // console.log(JSON.stringify({ input: prompt }))
        try {
            const response = await fetch('http://localhost:8000/api/merch/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // Set content type to JSON
                },
                body: JSON.stringify({prompt: prompt}),  // Send the input as a JSON body
            });

            // Check if the response is ok
            if (response.ok) {
                const data = await response.json();  // Parse the JSON response
                console.log(data)
                setPreviews(data);  // Save the response data into the previews state
            } else {
                console.error('Error:', response.statusText);  // Handle non-2xx responses
            }
        } catch (error) {
            console.error('Error during fetch:', error);  // Handle network or other errors
        }
    };

    const handleOrder = async (preview) => {
        try {
            const response = await fetch('http://localhost:8000/api/merch/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(preview),  // Send the clicked preview object as the request body
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Order placed successfully:', data);

            } else {
                console.error('Error placing order:', response.statusText);
            }
        } catch (error) {
            console.error('Error during order request:', error);
        }
        navigate('/WebShop');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowPreviews(true)
        await generateMerch()
    };

    return (
        <div className="px-8 py-4">
            <div className="flex justify-center items-start mt-10">
                <div className="mr-6">
                    <button
                        onClick={() => navigate("/WebShop")}
                        className="mb-auto bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
                    >
                        Назад
                    </button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-green-700 w-full max-w-md">
                    <h2 className="text-xl font-bold text-center mb-4">Направи производ</h2>

                    <label className="block text-gray-700 font-medium">Напиши:</label>
                    <input
                        type="text"
                        className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPrompt(e.target.value)}
                    />

                    <p className="text-gray-600 text-sm mb-4">
                        Информации како работи: <span className="font-semibold">
              Внесете текст кој сакате да биде отпечатен на маица или чаша. 
              Изберете дали да користите AI за автоматско генерирање или да го дизајнирате сами. 
              Подолу можете да ги видите прегледите.
            </span>
                    </p>

                    {/* Product Type Selection */}
                    <fieldset className="space-y-3">
                        <legend className="text-gray-700 font-medium">Одбери производ:</legend>

                        {["shirt", "mug"].map((type) => (
                            <div key={type}
                                 className="flex items-center p-2 border border-gray-300 rounded-md shadow-sm">
                                <input
                                    id={type}
                                    type="radio"
                                    name="product-type"
                                    value={type}
                                    checked={productType === type}
                                    onChange={() => setProductType(type)}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor={type} className="ml-2 text-gray-900">
                                    {type === "shirt" ? "Маица" : "Чаша"}
                                </label>
                            </div>
                        ))}
                    </fieldset>

                    <fieldset className="space-y-3  mt-4">
                        <legend className="text-gray-700 font-medium">Одбери опција:</legend>

                        {["AI", "Со твое"].map((option) => (
                            <div key={option}
                                 className="flex items-center p-2 border border-gray-300 rounded-md shadow-sm">
                                <input
                                    id={option}
                                    type="radio"
                                    name="product-option"
                                    value={option}
                                    checked={designOption === option}
                                    onChange={() => setDesignOption(option)}
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor={option} className="ml-2 text-gray-900">
                                    {option}
                                </label>
                            </div>
                        ))}
                    </fieldset>


                    <button
                        onClick={handleSubmit}
                        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                    >
                        Submit
                    </button>

                    {/* Render previews if showPreviews is true */}
                    {showPreviews && (
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {previews.map((preview, index) => (
                                <div
                                    key={index}
                                    className="p-4 border shadow-md rounded-[20px] bg-gray-100"
                                    onClick={() => handleOrder(preview)}  // Call handleOrder with the clicked preview
                                >
                                    <h3 className="font-bold">{`Preview ${index + 1}`}</h3>
                                    <p>{preview.punchLine}</p>
                                    <img
                                        src={preview.image}
                                        alt={`Preview ${index + 1}`}
                                        className="object-cover rounded-lg"
                                        style={{width: '150px', height: '150px'}}
                                    />
                                    <p className="mt-2 font-semibold">Price: ${preview.price}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MakeAProduct;
