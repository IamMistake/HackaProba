function EventCard({eventce}) {
    console.log(eventce)
    return (
        <div className="relative h-[100%] overflow-hidden rounded-[20px]">
            <div className="w-full h-full relative">
                {/* Full-Size Image */}

                {/*OVA E PRAVILNO, no greski sliki hehe*/}
                {/*<img className="w-full h-full object-cover" src={eventce.image}/>*/}

                {eventce.type === "weekly" && (<img className="w-full h-full object-cover" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg"/>)}
                {eventce.type === "regular" && (<img className="w-full h-full object-cover" src="https://vibe.us/blog/running-weekly-team-meetings/image-2_hu6f7a425c1b66ac7b38f7a1089ea08737_73239_1024x0_resize_q90_h2_lanczos.26659c83b0020a87ef1dedf090d2537423f4a92ce45468a23951d9384fa517b4.webp"/>)}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        </div>

    )
}

export default EventCard