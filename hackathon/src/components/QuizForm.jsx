import React, {useState} from 'react';
import Question from './Question';
// import setRecommendedDrinks from BarPage.jsx;

const QuizForm = ({onSubmit}) => {
    const [answers, setAnswers] = useState({
        personality: [],  // First option selected by default
        feelings: [],
        taste: [],
        alcohol: [],
        juice: [ ],
        misc: []
    });


    const questionsData = [
        {
            "category": "1. Каква личност си?",
            "options": ["Оптимистична", "Песимистична", "Реалистична", "Интуитивна"],
            "stateKey": "personality"
        },
        {
            "category": "2. Како се чувствуваш моментално?",
            "options": ["Среќно", "Тагувам", "Стресирано", "Опуштено"],
            "stateKey": "feelings"
        },
        {
            "category": "3. Вкус:",
            "options": ["Сладок", "Солен", "Горчлив", "Кисел"],
            "stateKey": "taste"
        }
    ]


    const additionalIngredients = [
        {
            "category": "4.1 Алкохол",
            "options": ["Рум", "Текила", "Водка", "Џин"],
            "stateKey": "alcohol"
        },
        {
            "category": "4.2 Сокови",
            "options": ["Сок од портокал", "Лимон сок", "Јаболков сок", "Сок од грозје"],
            "stateKey": "juice"
        },
        {
            "category": "4.3 Специјални додатоци",
            "options": ["Лимон", "Крставица", "Минт", "Шербет"],
            "stateKey": "misc"
        }
    ];

    const handleChange = (category, value) => {
        let stateKey;
        const question = questionsData.find(q => q.category === category);
        const ingredient = additionalIngredients.find(i => i.category === category);

        if (question) {
            stateKey = question.stateKey;
        } else if (ingredient) {
            stateKey = ingredient.stateKey;
        } else {
            console.error("Question category not found:", category);
            return;
        }

        setAnswers(prev => {
            const updatedArray = prev[stateKey].includes(value)
                ? prev[stateKey].filter(item => item !== value)
                : [...prev[stateKey], value];
            return {...prev, [stateKey]: updatedArray};
        });
    };

    // mozebi brisi
    const handleSubmit = async (e) => {
        e.preventDefault();

        onSubmit(answers)
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            {[...questionsData, ...additionalIngredients].map((question, index) => (
                <Question
                    key={index}
                    category={question.category}
                    options={question.options}
                    value={answers[question.stateKey]}
                    onChange={handleChange}
                />
            ))}
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-yellow-700 transition duration-300"
            >
                Избери го твојот среќен пијалок!
            </button>
        </form>
    );
};

export default QuizForm;
