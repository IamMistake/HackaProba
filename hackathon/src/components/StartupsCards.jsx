import StartupCard from "./StartupCard.jsx";
import {useState, useEffect} from "react";

function StartupsCards() {
    const [startups, setStartups] = useState([
        {
            "id": 1,
            "image": "https://media.licdn.com/dms/image/v2/C5612AQGqxckJOHf7lQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520973012383?e=2147483647&v=beta&t=WD04HRlKV74S3x5mlnxopog6cD_nJ1rv_GSPHGZKvio",
            "startupName": "nikola",
            "creator": 1,
            "description": "this is awesome",
            "participants": [1, 2, 3],
            "firstMeet": "2025-15-15"
        },
        {
            "id": 2,
            "image": "https://media.licdn.com/dms/image/v2/C5612AQGqxckJOHf7lQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520973012383?e=2147483647&v=beta&t=WD04HRlKV74S3x5mlnxopog6cD_nJ1rv_GSPHGZKvio",
            "startupName": "viktor",
            "creator": 3,
            "description": "this is awesome awesome",
            "participants": [1, 2, 3],
            "firstMeet": "2025-1-1"
        },
        {
            "id": 3,
            "image": "https://media.licdn.com/dms/image/v2/C5612AQGqxckJOHf7lQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520973012383?e=2147483647&v=beta&t=WD04HRlKV74S3x5mlnxopog6cD_nJ1rv_GSPHGZKvio",
            "startupName": "andrea",
            "creator": 1,
            "description": "this is awesome awesome awesome",
            "participants": [1, 2, 3],
            "firstMeet": "2025-12-12"
        },
        {
            "id": 4,
            "image": "https://media.licdn.com/dms/image/v2/C5612AQGqxckJOHf7lQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520973012383?e=2147483647&v=beta&t=WD04HRlKV74S3x5mlnxopog6cD_nJ1rv_GSPHGZKvio",
            "startupName": "goc i dare",
            "creator": 2,
            "description": "this is awesome awesome",
            "participants": [1, 2, 3],
            "firstMeet": "2025-13-13"
        },

    ]);

    // useEffect(() => {
    //     fetch("http://localhost:8000/api/startup/")
    //         .then(response => response.json())
    //         .then(data => setStartups(data.message))
    //         .catch(error => console.error("Error fetching bot response:", error));
    // }, []);

    return (
        <div className="flex gap-[5%] w-full h-full ml-7">
            {startups.map(startup => <StartupCard data={startup} key={startup.id}/>)}
        </div>
    )
}

export default StartupsCards