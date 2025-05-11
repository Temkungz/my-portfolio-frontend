"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"


export default function ContactPage(){

    const [name, setName]= useState("");
    const [message, setMessage]= useState("");
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        const fetchProjects = async () =>{
            try{
                const response = await fetch(`http://localhost:3001/projects`);
                const data = await response.json();
                setProjects(data);
            }
            catch (error){
                console.error("Error fetching Projects:", error);
            }   
        };
        fetchProjects();
    },[]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3001/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, description: message }),
            });

            if (!res.ok) throw new Error("Failed to send");

            alert(`Thank you, ${name}! Your message was sent.`);
            setName("");
            setMessage("");

            const updateRes = await fetch(`http://localhost:3001/projects`);
            const updateData = await updateRes.json();
            setProjects(updateData);

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message.");
        }
    };

    return(
        <div className="min-h-screen bg-gray-100 p-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                    <div >
                        <label className="block text-gray-700 font-semibold mb-1">Name</label>
                        <input type="text" 
                               className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" 
                               placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}>
                        </input>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Message</label>
                        <textarea rows={4}
                                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                  placeholder="Tell me something..."
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        send
                    </motion.button>
                </form>
                <div className=" my-10">
                    <h3 className=" text-2xl font-bold mb-4">All message</h3>
                    <ul className="space-y-2">
                        {projects.map((project: any) => (
                                <li key={project.id} className="p-4 bg-white rounded shadow">
                                    <h4 className="font-semibold">{project.id}</h4>
                                    <p className="text-gray-600">Name: {project.name}</p>
                                    <p className="text-gray-600">Description: {project.description}</p>
                                    <p className="text-sm text-gray-400">Created at: {new Date(project.createdAt).toLocaleString()}</p>
                                </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}