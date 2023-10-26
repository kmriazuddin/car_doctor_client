import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-semibold text-red-500">Services {services.length}</h3>
                <h3 className="text-5xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;