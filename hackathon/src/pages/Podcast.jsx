import React from "react";

const podcasts = [
  { id: 1, title: "Стартап револуција", desc: "Стартап револуција“ како од идеја до реалност? Ги откриваме тајните на успешните бизниси и споделуваме вредни искуства.", youtubeUrl: "https://www.youtube.com/watch?v=LUGsxrjcd2I&ab_channel=StartupClubSkopje", thumbnail: "https://img.youtube.com/vi/LUGsxrjcd2I/sddefault.jpg" },
  { id: 2, title: "Kако до повеќе клиенти преку твојот Linkedin профил", desc: "Добредојде во Hangout за хонорарци! Во овој подкаст, го истражуваме патувањето на хонорарците - како да ги претворите своите вештини во просперитетен бизнис.", youtubeUrl: "https://youtube.com/watch?v=def456", thumbnail: "def456" },
  { id: 3, title: "Startup Stories", desc: "Интервјуа со основачи на стартап\n.", youtubeUrl: "https://youtube.com/watch?v=ghi789", thumbnail: "ghi789" },
  { id: 4, title: "Code & Coffee", desc: "Обични разговори за развој на софтвер.", youtubeUrl: "https://youtube.com/watch?v=jkl012", thumbnail: "jkl012" },
  { id: 5, title: "Future Trends", desc: "Предвидувања за технологија и иновации.", youtubeUrl: "https://youtube.com/watch?v=mno345", thumbnail: "mno345" },
  { id: 6, title: "Cyber Security Weekly", desc: "Најнови ажурирања во сајбер безбедноста.", youtubeUrl: "https://youtube.com/watch?v=pqr678", thumbnail: "pqr678" }
];

const Podcast = () => {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Подкасти</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="bg-white p-4 rounded-xl shadow-xl shadow-blue-950">
            <iframe
              className="w-full h-40 rounded-md"
              src={`https://www.youtube.com/embed/${podcast.thumbnail}`}
              title={podcast.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="text-xl font-semibold mt-4">{podcast.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{podcast.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;