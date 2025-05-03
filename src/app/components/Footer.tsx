// src/app/Footer.tsx
export default function Footer(){
    return(
        <footer className="bg-gray-100 mt-8 py-4">
            <div className="container mx-auto text-center text-sm text-gray-600">
            © {new Date().getFullYear()} My Portfolio. All right reserved.
            </div>
        </footer>
    );
}